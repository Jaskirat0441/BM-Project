import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/billSlice";
import { v4 as uuid } from "uuid";
import AlertShow from "./Alert";
import { showAlert } from "../store/alertSlice";
import { hideModal } from "../store/modalSlice";

const AddBill = (props) => {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const dispatch = useDispatch();
  const genBills = useSelector((state) => state.bills);

  const clearModal = () => {
    setAmount("");
    setDesc("");
    setDate("");
    setCategory("");
  };

  const currBill = {
    id: uuid(),
    category,
    amount,
    desc,
    date,
  };
  const show = useSelector((state) => state.modal);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (category === "" || amount === "" || desc === "" || date === "") {
      dispatch(showAlert(true));
      return;
    }
    dispatch(add(currBill));
    dispatch(hideModal(false));
    localStorage.setItem("currBills", JSON.stringify(currBill));
    clearModal();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-center text-center">
          Add Bill
        </Modal.Title>
      </Modal.Header>

      <AlertShow />
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="amount">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="date">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>
          <div className="d-grid gap-2 col-4 mx-auto">
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Add
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddBill;
