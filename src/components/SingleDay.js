import React, { Component, Fragment } from 'react';

class SingleDay extends Component {
  constructor(props){
    super(props);

    this.state ={
      currentDate: '',
      currentLogo: '',
      highTemp: '',
      lowTemp: '',
    }
  }

  componentWillMount() {

  }

  render() {
    return (
      <Fragment>
        <div>
          Current Date
        </div>
        <div>
          Current Image
        </div>
        <div>
          High Temp:
        </div>
        <div>
          Low Temp:
        </div>
      </Fragment>
    );
  }
}

export default SingleDay;
