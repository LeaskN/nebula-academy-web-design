import React, { useState } from 'react'; 
import { Button } from 'react-bootstrap';  
import './ButtonMessage.css';  

  function ButtonMessage125px() {
    const [isShown, setIsShown] = useState(false);
  
    return (
     <>
       <Button
          style={{marginBottom: '125px'}} className="bottom contentCentered hoverButton" 
          onClick={() => setIsShown(true)}
          id="buttonDisabled"
          >
            Register for In-Person
        </Button>
          {isShown && (
            <div 
              style={{marginBottom: '125px'}} className="bottom contentCentered message"
              onClick={() => setIsShown(false)}
            >
              {/* <p 
                className="message-text"
                > */}
                 Due to Covid-19, In-Person courses are temporarily suspended
              {/* </p> */}
            </div>   
        )}
     </>
    );
  }


export default ButtonMessage125px;

