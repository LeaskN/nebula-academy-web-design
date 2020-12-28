import React, { Component }from 'react';
import { formatDateString } from '../../helperFunctions/helperFunctions'

class ProgramDesc extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount(){
      // fetch(`http://localhost:3000/dev2/campaigns`)
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
      const [, version, boot, camp] = /(\w\d*) (Boot)(Camp)/.exec(option.name);
      const partTimeOrFull = option.name.includes('6 Month') ? "part-time session: " : "full-time session: ";
      const startDate = formatDateString(option.startDate, true);
      const endDate = formatDateString(option.endDate, true);
      return (
        <p key={key} className="currentCohortsP">
          <span className="currentCohortsSpan">
            {`${version} ${boot}${camp.toLowerCase()}, ${partTimeOrFull}`}
          </span>
          {startDate} - {endDate}
        </p>
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