import { useState } from "react";

import { Container } from "./styles";
import { MenuMobileAdmin } from "../MenuMobileAdmin";

import Logo from '../../assets/Logo.svg'
import Menu from '../../assets/Menu.svg'
import Receipt from '../../assets/Receipt.svg'

export function HeaderAdmin () {
   const [menuIsVisible, setMenuIsVisible] = useState(false);

    return (
        <>
        <MenuMobileAdmin 
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
            
            <div className="wrapper">
                <img src={Logo} />
                <span>admin</span>
            </div>

        </Container>
        </>
    )
}