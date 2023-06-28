import { useEffect, useState } from "react";

import { useAuth } from '../../hooks/auth';

import { useNavigate } from 'react-router-dom';

import { ContainerMobile, MenuMobile, ContainerDesktop } from "./styles";

import { Input } from '../Input';
import { Footer } from '../Footer';

import { FiSearch, FiMenu, FiX, FiLogOut } from 'react-icons/fi'

import Logo from '../../assets/Logo.svg'
import Receipt from '../../assets/Receipt.svg'

export function Header ({dataFromHeaderMenuMobile}) {
    const navigate = useNavigate();
    const { user, signOut } = useAuth();

    const [menuIsVisible, setMenuIsVisible] = useState(false);
    const [ isMobile, setIsMobile ] = useState(window.innerWidth < 1000 ? true : false);
    const [ userCart, setUserCart ] = useState([]);

    document.body.onresize = function() {
        setIsMobile(document.body.clientWidth < 1000 ? true : false);
    };

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

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("@foodexplorer:cart"));
        
        setUserCart(cart.filter(item => item.user_id == user.id));
    }, [])

    return (
        <>
        {
            isMobile ? 
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
                    
                <ContainerMobile isAdmin={user.admin}>
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

                        <button className="cart" onClick={() => navigate(`/cart`)}>
                            <div className="circle">{userCart.length}</div>
                            <img src={Receipt} />
                        </button>
                        </>
                    }
                </ContainerMobile> 
                </>                
            : 
                <ContainerDesktop>
                    <div className="content">
                        <div className="logo-wrapper">
                            <img src={Logo} />
                            {true ? <span>admin</span> : <></>}
                        </div>

                        <Input
                            icon={FiSearch}
                            placeholder='Busque por pratos ou ingredientes'
                            onChange={e => dataFromHeaderMenuMobile(e.target.value)}
                            onKeyPress={e => handleKeyPress(e)}
                        />

                        <button >
                            <img src={Receipt} alt="" />
                            <span>Pedidos ({userCart.length})</span>
                        </button>

                        <FiLogOut />
                    </div>
                </ContainerDesktop>
        }
        </>
    )
}