import React, { useState } from 'react';
import './Popup.css'
import {Box} from '@mantin/core';


function Popup() {
    const [modal , setModal] = useState(false)

    const toggleModal = ()=>{
        setModal(!modal)
    }
  return (
        <div className='cart'> 
        <Box></Box>
            {modal ? <div className='msg'>
            <div><img src="https://tse4.mm.bing.net/th?id=OIP.-tPw2O8LHlYcjI1Z--FyvQAAAA&pid=Api&P=0" alt="img" />
            </div>
            <p><strong>Your payment was Successfull</strong></p>
            <p>Thank you for your payment. We will be in contact with more details shortly</p>
            <button onClick={toggleModal}>Continue</button>
        </div> 
        :
         <button onClick={toggleModal}>Confirm Payment</button>
}
        
    </div>
  )
}

export default Popup