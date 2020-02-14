import React, { Component } from 'react';
import { Button } from 'react-bootstrap'

class CookieConsent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: 'test',
            show: true,        
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    updateWindowDimensions() {
        this.setState({ viewWidth: window.innerWidth });
    }
    render() {
        if(this.state.show){
            return(
                <div className="cookieConsent">
                    <div>
                        By using this website, you agree to our use of cookies. We use cookies to provide you with a great experience and to help our website run effectively.
                    </div>
                    <Button onClick={() => this.setState({show: false})}> Acknowledge </Button>
                </div>
        )
        } else{
            return(<></>)
        }
    }
}
export default CookieConsent;