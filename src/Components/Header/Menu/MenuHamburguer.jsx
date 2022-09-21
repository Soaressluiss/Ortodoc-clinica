import React, { useState } from 'react'

import { FaBars } from 'react-icons/fa'
import styled from 'styled-components';
import IsOpenMenu from './IsOpenMenu';


const Hamburguer = styled.div`
  display:none;
  
  @media screen and (max-width:768px ){
    display: block;
    margin-right: .5rem;
  }
`


const MenuHamburguer = () => {
  const [Menu, setMenu] = useState(false)

  const CloseMenu = () => {
    setMenu(!Menu)
  }
  return (
    <Hamburguer>
      <FaBars onClick={CloseMenu} />
      {Menu && <IsOpenMenu active={setMenu} />}
    </Hamburguer>
  )
}

export default MenuHamburguer;