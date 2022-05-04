import React from 'react'
import TurnOnSVG from '../assets/images/turn_on.svg'
import Styled from 'styled-components'
import {PORT, URL, API_VERSION} from '../api'

const DeviceStyle = Styled.div `
    
    @media (max-width: 768px) {
        display:flex;
        flex-direction: row;
        background-color: #072230;
        border-radius:5px;
        justify-content:space-between;
        min-height:80px;
        width:90vw;
        padding: 0 5vw 0 5vw;
        margin-top:15px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
        .device{
            display:flex;
            flex-direction: row;
            align-items:center;
            justify-content:space-between;
            width:75%;
            margin-right:20px;
            .description{
                margin-right:20px;
            }
        }
        .button{
            display:flex;
            flex-direction: row;
            align-items:center;
            img{
                transition: 0.15s;
                @media (max-width: 300px) {
                    
                    height:50%;
                    filter: drop-shadow(0px 4px 0px #929292);
                }
                height:70%;
                filter: drop-shadow(0px 4px 0px #929292);
            }
        }
    }
`

function Device(props) {

    async function wakeUpDevice(mac_address) {
        const options = {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(mac_address)
        }
        await fetch(`${URL}:${PORT}${API_VERSION}/wakeup`,options)
                .then(response => response.json())
                .then(data => console.log(data));
      }

    const onClick = (mac_address) =>{
        console.log(mac_address)
        wakeUpDevice(mac_address) 
    }

    return (
        <DeviceStyle>
            <div className="device">
                <div className="description">
                    {props.device.description}
                </div>
                <div className="status">
                    {props.device.status}
                </div>
            </div>
            <div className="button" onClick={()=>(onClick(props.device.mac_address))}>
                <img src={TurnOnSVG} className="img" alt="Turn on device"/>
            </div>
        </DeviceStyle>
    )
}

export default Device