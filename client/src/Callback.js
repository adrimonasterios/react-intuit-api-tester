import React from 'react';
import axios from 'axios';
import {Redirect} from "react-router-dom";

class Callback extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      info:null
    };
  }

  async componentDidMount(){
    let uri = window.location.search
    await axios.get('/api/quickbooks/callback', {params:{uri:uri}}).then((res)=>console.log(res))
  }
  render(){
    return (
      <div>Loading</div>
    );
  }
}

export default Callback;
