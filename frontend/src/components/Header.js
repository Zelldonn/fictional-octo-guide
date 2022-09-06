import React from 'react'
import Styled from 'styled-components'
import AddIcon from '../assets/images/+.svg'
import DeleteIcon from '../assets/images/delete.svg'
import ModalNewDevice from './ModalNewDevice'

const HeaderStyle = Styled.div `
    width:100vw;
    min-height:55px;
    background-color:#072230;
    display flex;
    align-items: center;
    padding-left:5vw;
    padding-right:5vw;
    margin-bottom: 15px;
    justify-content:space-between;

    .input-wrapper{
      display:flex;
      width:75px;
      justify-content:space-between;
      align-items: center;
      height:100%;
      input{
        height:50%;
      }
    }
    
    @media (max-width: 768px) {
    }
`


function Header() {
  return (
    <HeaderStyle>
        <div className="title">
          Wake On Wan
        </div>
        <div className="input-wrapper">
          <ModalNewDevice></ModalNewDevice>
          {/* <input type="image" src={AddIcon} alt="Add device"/> */}
          <input type="image" src={DeleteIcon} alt="Delete device"/>
        </div>
    </HeaderStyle>
  )
}

export default Header