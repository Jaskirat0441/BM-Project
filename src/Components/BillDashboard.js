import React, { useEffect } from "react";
import {  Form, Table } from "react-bootstrap";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { filterCategory, remove } from "../store/billSlice";
import { showModal } from "../store/modalSlice";

const BillDashboard = () => {
  let genBill = useSelector((state) => state.bills);
  let categoryData= JSON.parse(localStorage.getItem('localbills'));
  // let genBill= JSON.parse(localStorage.getItem('localbills'));

  const dispatch = useDispatch();
  const handleRemove = (prod) => {
    dispatch(remove(prod.id));
  };

  const handleEdit = (prod) => {
    dispatch(showModal());
  };
  

  const handleCategory=(e)=>{
    console.log(e.target.value)
    if(e.target.value === "category" || e.target.value==="Category"){
      return genBill;
    }
    dispatch(filterCategory(e.target.value));

  }
  

  return (
    <>
      <h1 className="text-center my-3">Bill Dashboard</h1>
      <Table striped bordered hover variant="dark" className="my-5 p-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>
          <Form.Select aria-label="Default select example"  onChange={(e)=>handleCategory(e)}>
          <option val="category"> Category</option>

               {genBill.length > 0 &&
                genBill.map((val, i) => (
                  <option key ={val.id} value={val.category}>{val.category}</option>
                  ))
                }
              </Form.Select>
                </th>
            <th>Amount</th>
            <th>Description</th>
            <th>Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
         
        </thead>
        <tbody>
          {genBill.length > 0 &&
            genBill.map((val, i) => (
              <tr key={val.id}>
                <td>{i + 1}</td>
                <td>{val.category}</td>
                <td>{val.amount}</td>
                <td>{val.desc}</td>
                <td>{val.date}</td>
                <td>
                  <AiOutlineEdit onClick={() => handleEdit(val)} /> 
                </td>
                <td>
                  <AiOutlineDelete onClick={() => handleRemove(val)} /> 
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default BillDashboard;
