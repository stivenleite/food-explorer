import { Container, Content, Tags } from "./styles";
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Tag } from "../../components/Tag"
import { QtdeSelector } from "../../components/QtdeSelector"

import { FiChevronLeft } from "react-icons/fi";
import Dish from '../../assets/Dish.png'

export function Details () {
    return (
        <Container>
            <Header />

            <main>
                <Content>
                    <button>
                        <FiChevronLeft size={32}/>
                        voltar
                    </button>

                    <section>
                        <img src={Dish} alt="Foto do produto" />
                        <h1>Salada Ravanello</h1>
                        <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
                        <Tags>
                            <Tag title='alface'/>
                            <Tag title='cebola'/>
                            <Tag title='pão naan'/>
                            <Tag title='pepino'/>
                            <Tag title='rabanete'/>
                            <Tag title='tomate'/>
                        </Tags>
                    </section>

                    <div className="order">
                        <QtdeSelector />
                        <button>
                            incluir ∙ R$ 25,00
                        </button>
                    </div>

                </Content>
            </main>

            <Footer />
        </Container>
    )
}