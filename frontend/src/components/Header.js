import React from 'react'
import Styled from 'styled-components'

const HeaderStyle = Styled.div `
    width:100vw;
    min-height:55px;
    background-color:#072230;
    display flex;
    align-items: center;
    padding-left:5vw;
    margin-bottom: 15px;
    
    @media (max-width: 768px) {
    }
`


function Header() {
  return (
    <HeaderStyle>
        Wake On Wan
    </HeaderStyle>
  )
}

export default Header