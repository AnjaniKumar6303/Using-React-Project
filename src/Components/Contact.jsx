import React from 'react'
import "./../Styles/contact.css"

const Contact = () => {
  return (
    <div className='contact'>
        <h1>Contact</h1>
        <div className='contact-inner'>
          <form action="">
            <div className="form-group">
              <label >fullname</label>
              <input type="text"placeholder='enter full name' name="" id="" /> 
            </div>
            <div className="form-group">
              <label >email id</label>
              <input type="text"placeholder='enter Email id ' name="" id="" />
            </div>
            <div className="form-group">
              <label >Phone</label>
              <input type="text"placeholder='Phone' name="" id="" /> 
            </div>
            <div className="form-group">
              <label >Queries</label>
              <input type="text"placeholder='Tell us about your  queries' name="" id="" /> 
            </div>
            <div className="form-submit">
              <button>Send</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Contact