import React, { Component } from 'react';
import { parseCohortStr, parseDateStr } from '../../helperFunctions/helperFunctions';

class ProgramDesc extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount(){
      return fetch(`https://d9nuj9xdv4try.cloudfront.net/dev2/campaigns`)
        .then(res => res.json())
        .then(res => this.setState({cohortOptions: res}))
        .catch(err => {console.log(err)})
    }

    cohortDetailsJSX(){
      try {
        if(this.state.cohortOptions){
          return this.filterBootCamps().map((option, key) => this.formatDetailsIntoJSX(option, key));
        }
      } catch(e) {
        console.log("Error caught: " + e);
      }
    }

    filterBootCamps(){
      return this.state.cohortOptions.filter(option => option.name.toLowerCase().includes('bootcamp') && option.isActive);
    }

    formatDetailsIntoJSX(option, key){
      const { cohortName, fullOrPartTime } = parseCohortStr(option);
      const startDate = parseDateStr(option.startDate);
      const endDate = parseDateStr(option.endDate);

      return (
        <div key={key} className="center-with-flex">
          <p className="currentCohortsP">
            <span className="currentCohortsSpan">
              {`${cohortName} - ${fullOrPartTime}`}
            </span>
          </p>
          <p className="program-duration">
            {startDate} - {endDate}
          </p>
        </div>
      )
    }

    render() {
      return (
        <div className="currentCohorts">
          {this.cohortDetailsJSX()}
        </div>
      )
    }
};

export default ProgramDesc;