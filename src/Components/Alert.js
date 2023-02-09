import React from 'react';
import {Alert} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { removeAlert } from '../store/alertSlice';

function AlertShow() {
//   const [show, setShow] = useState(true);
const show = useSelector((state) => state.alert);

const dispatch = useDispatch();
// console.log(show);

    if (show) {
        setTimeout(()=>{
          dispatch(removeAlert(false));
        },3000)
}

    return (
    show? 
        <Alert key="danger" variant="danger" className='text-center'>
         Fill Data Properly{' '}
        </Alert>
        : ""
    );
  }

export default AlertShow