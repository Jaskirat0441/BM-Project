import React from "react";
import { Container } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
import { useSelector } from "react-redux";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

const BillChart = () => {
  // let genBills= JSON.parse(localStorage.getItem('localbills'))
  let genBills = useSelector((state) => state.bills);


  console.log(genBills);

  return (
    <Container className="bg-dark text-white my-3">
      {/*  chart */}
      <Line
        data={{
          labels:
            genBills.length > 0 &&
            genBills.map((bill) => {
              let date = bill.date;
              return date;
            }),
          datasets: [
            {
                label:"Monthly-Graph",
              data: genBills.length > 0 && genBills.map((bill) => bill.amount),
              backgroundColor:'grey',
              borderColor:'white',
              tension:0.4,
              fill:true,
              pointStyle:'rect',
              pointBorderColor:'blue',
              pointBackgroundColor:'#fff',
              showLine:true
            },
          ],
        }}
      />

    </Container>
  );
};

export default BillChart;
