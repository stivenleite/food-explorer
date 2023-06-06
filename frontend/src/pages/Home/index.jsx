import { Container, Banner } from "./styles";
import { Header } from '../../components/Header';

import MacarronsMobile from '../../assets/MacarronsMobile.png'

export function Home () {
    return (
        <Container>
            <Header />

            <Banner>
                <img src={MacarronsMobile} alt="" />

                <div className="rectangle-wrapper">
                    <div className="text-wrapper">
                        <h1>Sabores inigualáveis</h1>
                        <span>Sinta o cuidado do preparo com ingredientes selecionados.</span>
                    </div>
                </div>
            </Banner>
        </Container>
    )
}