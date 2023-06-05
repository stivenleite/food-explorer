import { Container } from "./styles";
import { Input } from '../Input';

import Close from '../../assets/Close.svg'
import { FiSearch } from 'react-icons/fi'

export function MenuMobile ({menuIsVisible, setMenuIsVisible}) {
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
                    <a href="#">Sair</a>
                </nav>
            </main>
        </Container>
    )
}