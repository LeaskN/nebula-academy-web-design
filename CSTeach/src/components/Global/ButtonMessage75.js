import React, { useState } from 'react'; 
import { Button } from 'react-bootstrap';  
import './ButtonMessage.css';  

  function ButtonHover() {
    const [isShown, setIsShown] = useState(false);
  
    return (
     <>
        <Button
          style={{marginBottom: '75px'}} className="bottom contentCentered" 
          onClick={() => setIsShown(true)}
          // toggle={() => setIsShown(false)}
          id="buttonDisabled">
          Register for In-Person
        </Button>
        {isShown && (
          <div 
          style={{marginBottom: '75px'}} className="bottom contentCentered message"
          onClick={() => setIsShown(false)}
           >
             <p className="message-text">Due to COVID-19, In-Person sessions have been suspended for the health and safety of our team and participants.</p>
          </div>
        )}
     </>
    );
  }


export default ButtonHover;