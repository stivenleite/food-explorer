import { useState } from "react";

import { Container } from "./styles";
import { MenuMobile } from "../MenuMobile";

import Logo from '../../assets/Logo.svg'
import Menu from '../../assets/Menu.svg'
import Receipt from '../../assets/Receipt.svg'

export function Header () {
   const [menuIsVisible, setMenuIsVisible] = useState(false);

    return (
        <>
        <MenuMobile 
            menuIsVisible={menuIsVisible}
            setMenuIsVisible={setMenuIsVisible}
        />

        <Container>
            <button 
                className="menu"
                onClick={() => setMenuIsVisible(true)}
            >
                <img src={Menu} />
            </button>
            
            <img src={Logo} />   

            <button className="cart">
                <div className="circle">0</div>
                <img src={Receipt} />
            </button>
        </Container>
        </>
    )
}