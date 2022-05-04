import './App.css';
import React from 'react';
import Device from './components/Device'
import Header from './components/Header'
import Styled from 'styled-components'
const URL = process.env.BASE_URL || 'http://localhost';
const PORT = process.env.PORT || 8888;
const API_VERSION = process.env.API_VERSION || "/api/v1"

const AppStyle = Styled.div `
  text-align: center;
  background-color: #030F15;
  margin:0;
  width:100vw;
  height:100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  justify-content:flex-start;


  .separator{
    width:90vw;
    text-align:left;
    div{
      
    }
    p{
      font-size:0.8em;
      margin-bottom:2px;
    }
  }
`
const Devices = Styled.div `
  display:flex;
  width:100vw;
  height:100%;
  flex-direction:column;
  justify-content:flex-start;
  align-items: center;
  overflow:scroll;
`

function App() {

  const [devices, setDevices] = React.useState([])

  async function fetchDevices() {
    await fetch(`${URL}:${PORT}${API_VERSION}/devices`).then(response => response.json())
    .then(data => setDevices(data));
  }

  const devices_render = devices.map((device) =>{
    return <Device device={device} key={device.id}></Device>
  });

  React.useEffect(() => {
    fetchDevices()
  },[])
  return (
    <AppStyle>
      <Header> </Header>
      <div className="separator">
        <p style={{color: '#61D482'}}>DEVICES</p>
        <div style={{height: '1px',backgroundColor: '#61D482', width:'100%'}}></div>
      </div>
      <Devices>
        {devices_render}
      </Devices>
      
    </AppStyle>
  );
}

export default App;
