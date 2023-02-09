import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux';

const MonthlyBudget = () => {

    const [budget,setBudget]= useState(0);
    const [paid,setPaid]= useState(0);

  var bills = useSelector((state) => state.bills);
  var sum =0;
  let newBills;
  let paidArr=[];
  newBills =[...bills].sort((a, b) => {
      return a.amount - b.amount
    })
  const handleBudget=(e)=>{
      e.preventDefault();
        for(let i=0;i<newBills.length;i++){
            if(sum < budget){
                setPaid(i);
                sum += Number(newBills[i].amount);
            }
                else{
                    break;
                }    
    }
}
  return (
    <>
    <Container>
        <h1 className='m-5 text-center'>Monthly Budget</h1>
    <Form>
      <Form.Group className="mb-3" controlId="category">
        <Form.Control type="number" placeholder="Enter Amount" value={budget} onChange={(e)=>setBudget(e.target.value)} />
      </Form.Group>
      <div className="d-grid gap-2 col-4 mx-auto" >
      <Button variant="primary" type="submit" onClick={handleBudget}>
        Add
      </Button>
      </div>
    </Form>

     <h2 className='text-center m-5'>Minimum number of bills that should be paid in budget :{paid}</h2>
    </Container>
    </>
  )
}

export default MonthlyBudget