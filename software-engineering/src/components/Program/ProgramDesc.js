import React, { Component }from 'react';

class ProgramDesc extends Component {
    constructor(props) {
        super(props);
        this.state = {
          currentCohortText : <p className="currentCohortsP"><span className="currentCohortsSpan">Full time session:</span> test</p>
        };
    }
    componentDidMount(){

      // fetch(`http://localhost:3000/dev2/campaigns`)
      return fetch(`https://d9nuj9xdv4try.cloudfront.net/dev2/campaigns`)
        .then(res => res.json())
        .then(res => this.setState({cohortOptions: res}))
        .catch(err => {console.log(err)})

    }

    componentDidUpdate(){
      console.log('updated')
    }

    createTextForPage(){
      if( this.state.cohortOptions ){
        return this.state.cohortOptions.map(element => {
          if( this.state.cohortOptions && element.name.indexOf('6 Month') > -1){
            console.log()
            return <p className="currentCohortsP"><span className="currentCohortsSpan">Part time session:</span> {`${new Date(element.startDate + 'EST')}`} - {`${new Date(element.endDate + 'EST')}`}</p>;
          } else {
            console.log()
            return <p className="currentCohortsP"><span className="currentCohortsSpan">Full time session:</span> {`${new Date(element.startDate + 'EST')}`} - {`${new Date(element.endDate + 'EST')}`}</p>;
          }
        })
      }
    }
    
    render() {

      return (
        <div className="currentCohorts">
          {this.createTextForPage()}
        </div>
      )
    }
};

export default ProgramDesc;