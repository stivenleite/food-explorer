import { useAuth } from '../../hooks/auth';

import { useNavigate } from 'react-router-dom';

import { Container } from "./styles";
import { Input } from '../Input';

import Close from '../../assets/Close.svg'
import { FiSearch } from 'react-icons/fi'

export function MenuMobile ({menuIsVisible, setMenuIsVisible}) {
    const navigate = useNavigate();
    const { user, signOut } = useAuth();

    function handleSignOut(){
        signOut();
        navigate("/");
    }

    function handleNewProduct(){
        navigate("/newproduct");
        setMenuIsVisible(false);
    }

    return (
        <Container isVisible={menuIsVisible}>
            <header>
                <button>
                    <img 
                        src={Close} 
                        onClick={() => setMenuIsVisible(false)}
                    />
                </button>
                Menu
            </header>

            <main>
                <Input
                    icon={FiSearch}
                    placeholder='Busque por pratos ou ingredientes'
                />

                <nav>
                    {user.admin ? <a onClick={handleNewProduct}>Novo prato</a> : <></>}
                    <a onClick={handleSignOut}>Sair</a>
                </nav>
            </main>
        </Container>
    )
}