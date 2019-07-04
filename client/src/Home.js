import React from 'react';
import axios from 'axios';


let uri = ''
class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      info:null
    };
  }


  async getInfo(e){
    e.preventDefault()
    await axios.get('/api/quickbooks/authUri')
      .then(async (res)=> {
        let win = await window.open(res.data,'','top=500,left=500,width=400,height=400')
        var pollOAuth = window.setInterval(function () {
            try {
                if (win.document.URL.indexOf("code") != -1) {
                    window.clearInterval(pollOAuth);
                    win.close();
                    window.location.reload();
                }
            } catch (e) {
                console.log(e)
            }
        }, 100);
      })
    }

  async retrieveToken(e){
    e.preventDefault()
    axios.get('/api/quickbooks/retrieveToken').then((res)=>console.log(res))
  }

  async getCompanyInfo(e){
    e.preventDefault()
    await axios.get('/api/quickbooks/getCompanyInfo').then(res=>console.log(res))
  }

  render(){
    return (
      <div className="App">
        <h1>TESINT APP</h1>
        <button onClick={(e)=>this.getInfo(e)}>Get info</button>
        <button onClick={(e)=>this.retrieveToken(e)}>Retrieve Token</button>
        <button onClick={(e)=>this.getCompanyInfo(e)}>Get Company Name</button>
      </div>
    );
  }
}

export default Home;
