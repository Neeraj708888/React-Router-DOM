import React, { useState } from 'react'
import { useRef } from 'react';

// No use this component

const UncontrolledForm = () => {
   const [show, setShow] = useState(false);
    const luckyname = useRef(null);

    const handleSubmit = (e) => {
      e.preventDefault();
      const name = luckyname.current.value; // Here input box will be locked

      // Here input box will be unlocked
    //   const name = luckyname.current.focus(); 
        name === '' ? alert("please fill the data...") : setShow(true);
    }

  return (
    <div>
      <h1>Uncontrolled Form</h1>

      <form action="" onSubmit={handleSubmit}>
        <div className="container">
            <label htmlFor="">
                Enter your lucky Name 
            </label>
            <br />
            <input type="text" id='luckyname' ref={luckyname}/>
            <br />
            <button type='Submit'>Submit</button>
        </div>
      </form>
      <p>{show ? `Your lucky name is ${luckyname.current.value}` : ""}</p>
    </div>
  )
}

export default UncontrolledForm;
