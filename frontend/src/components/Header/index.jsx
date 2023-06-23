import { useEffect, useState } from "react";

import { useAuth } from '../../hooks/auth';

import { useNavigate } from 'react-router-dom';

import { Container, MenuMobile } from "./styles";

import { Input } from '../Input';
import { Footer } from '../Footer';

import { FiSearch, FiMenu, FiX } from 'react-icons/fi'

import Logo from '../../assets/Logo.svg'
import Receipt from '../../assets/Receipt.svg'

export function Header ({dataFromHeaderMenuMobile}) {
    const navigate = useNavigate();
    const { user, signOut } = useAuth();

    const [menuIsVisible, setMenuIsVisible] = useState(false);

    function handleSignOut(){
        signOut();
        navigate("/");
    }

    function handleNewProduct(){
        navigate("/newproduct");
        setMenuIsVisible(false);
    }

    function handleKeyPress(e){
        if (e.key === 'Enter'){
            setMenuIsVisible(false)
        }
    }

    return (
        <>
        <MenuMobile isVisible={menuIsVisible}>
            <header>
                <button onClick={() => setMenuIsVisible(false)}>
                    <FiX size={32}/>
                </button>
                Menu
            </header>

            <main>
                <Input
                    icon={FiSearch}
                    placeholder='Busque por pratos ou ingredientes'
                    onChange={e => dataFromHeaderMenuMobile(e.target.value)}
                    onKeyPress={e => handleKeyPress(e)}
                />

                <nav>
                    {user.admin ? <a onClick={handleNewProduct}>Novo prato</a> : <></>}
                    <a onClick={handleSignOut}>Sair</a>
                </nav>
            </main>

            <Footer/>
        </MenuMobile>

        <Container isAdmin={user.admin}>
            <button 
                className="menu"
                onClick={() => setMenuIsVisible(true)}
            >
                <FiMenu size={32}/>
            </button>
            
            { user.admin ? 
                <div className="wrapper">
                    <img src={Logo} />
                    <span>admin</span>
                </div>
            :
                <>
                    <img src={Logo} />   

                    <button className="cart">
                        <div className="circle">0</div>
                        <img src={Receipt} />
                    </button>
                </>
            }


        </Container>
        </>
    )
}