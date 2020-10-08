import React, { Component }from 'react';

class ProgramDesc extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount(){
      // return fetch(`https://d9nuj9xdv4try.cloudfront.net/dev2/campaigns`)

      return fetch(`http://localhost:3000/dev2/campaigns`)
        .then(res => res.json())
        .then(res => this.setState({cohortOptions: res}))
        .catch(err => {console.log(err)})
    }
    componentDidUpdate(){
      this.createTextForPage();
    }
    createTextForPage(){
      if(this.state.cohortOptions){
        for (let i = 0; i < this.state.cohortOptions.length; i++) {
          const element = this.state.cohortOptions[i];
          console.log(element)
        }
      }
    }
    // get cohort options    
    render() {
      console.log(this.state.cohortOptions ? this.state.cohortOptions[0].name:'');
      
      return (
        <div className="currentCohorts">
          <p className="currentCohortsP"><span className="currentCohortsSpan">Full time session:</span> September 14th - December 30th</p>
          <p className="currentCohortsP"><span className="currentCohortsSpan">Part time session:</span> September 14th - March 19th</p>
        </div>
      )
    }
};

export default ProgramDesc;