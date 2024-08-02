import React from 'react'
import { useState } from 'react';
export const Event = () => {
    const [inputValue,setInputValue]=useState('');
    const[submittedMessage,setSubmittedMessage]=useState('');
    const handleInputChange=(event)=>{
        setInputValue(event.target.value)
    }
    const handleSubmit=(event)=>{
       event.preventDefault();
       setSubmittedMessage(inputValue);
       setInputValue('');
    }
  return (
    <div>
        <h1>React EventHandler Example</h1>
        <form onSubmit={handleSubmit}>
        <label>
            Enter your message
            <input type='text' value={inputValue} onChange={handleInputChange}></input>
        </label>
        <button type="submit">submit</button>
        </form>
        {submittedMessage && (
            <div>
                <h2>Submitted Message:</h2>
                <p>{submittedMessage}</p>
                </div>
        )
}
</div>
  )
}
export default Event
