import React, { Component }from 'react';

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

    // createTextForPage(){
    //   let allPrograms = [];
    //   if( this.state.cohortOptions ){
    //     this.state.cohortOptions.forEach(element => {
    //       if( element.name.toLowerCase().indexOf('bootcamp') > -1 && element.name.indexOf('6 Month') > -1){
    //         allPrograms.push(<p key={element.name} className="currentCohortsP"><span className="currentCohortsSpan">{element.name.slice(0, 8)}, Part time session:</span> {`${new Date(element.startDate + 'EST').toDateString()}`} - {`${new Date(element.endDate + 'EST').toDateString()}`}</p>)
    //       } else if( element.name.toLowerCase().indexOf('bootcamp') > -1 ) {
    //         allPrograms.push(<p key={element.name} className="currentCohortsP"><span className="currentCohortsSpan">{element.name.slice(0, 8)}, Full time session:</span> {`${new Date(element.startDate + 'EST').toDateString()}`} - {`${new Date(element.endDate + 'EST').toDateString()}`}</p>)
    //       }
    //     })
    //   }
    //   return allPrograms;
    // }

    cohortDetailsJSX(){
      try {
        if(this.state.cohortOptions){
          return this.filterBootCamps().map((option, key) => this.parseDetailsIntoJSX(option, key));
        }
      } catch(e) {
        console.log("Error caught: " + e);
      }
    }

    filterBootCamps(){
      return this.state.cohortOptions.filter(option => option.name.toLowerCase().includes('bootcamp'));
    }

    parseDetailsIntoJSX(option, key){
      const [, version, boot, camp] = /(\w\d*) (Boot)(Camp)/.exec(option.name);
      const partTimeOrFull = option.name.includes('6 Month') ? "part-time session: " : "full-time session: ";
      const startDate = `${new Date(option.startDate + 'EST').toDateString()}`;
      const endDate = `${new Date(option.endDate + 'EST').toDateString()}`;
      return (
        <p key={key} className="currentCohortsP">
          <span className="currentCohortsSpan">{`${version} ${boot} ${camp}, ${partTimeOrFull}`}</span> {startDate} - {endDate}
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