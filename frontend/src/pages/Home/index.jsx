import { Container, Banner, Content, SliderContainer } from "./styles";
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Card } from '../../components/Card';

import { register } from 'swiper/element/bundle'
register();

import Dish from "../../assets/Dish.png";

import MacarronsMobile from '../../assets/MacarronsMobile.png'

export function Home () {
    return (
        <Container>
            <Header />

            <main>
                <Content>
                    <Banner>
                        <img src={MacarronsMobile} alt="" />

                        <div className="rectangle-wrapper">
                            <div className="text-wrapper">
                                <h1>Sabores inigualáveis</h1>
                                <span>Sinta o cuidado do preparo com ingredientes selecionados.</span>
                            </div>
                        </div>
                    </Banner>

                    <section>
                        <SliderContainer>
                            <h2>Refeições</h2>

                            <swiper-container slides-per-view='2' grab-cursor='true' space-between='94'>
                                <swiper-slide>
                                    <Card 
                                        image={Dish}
                                        title='Salada Ravanello'
                                        price='R$ 49,97'
                                    />
                                </swiper-slide>
                                    
                                <swiper-slide>
                                    <Card 
                                        image={Dish}
                                        title='Salada Ravanello'
                                        price='R$ 49,97'
                                    />
                                </swiper-slide>

                                <swiper-slide>
                                    <Card 
                                        image={Dish}
                                        title='Salada Ravanello'
                                        price='R$ 49,97'
                                    />
                                </swiper-slide>
                            </swiper-container>
                        </SliderContainer>

                        <SliderContainer>
                            <h2>Refeições</h2>

                            <swiper-container slides-per-view='2' grab-cursor='true' space-between='94'>
                                <swiper-slide>
                                    <Card 
                                        image={Dish}
                                        title='Salada Ravanello'
                                        price='R$ 49,97'
                                    />
                                </swiper-slide>
                                    
                                <swiper-slide>
                                    <Card 
                                        image={Dish}
                                        title='Salada Ravanello'
                                        price='R$ 49,97'
                                    />
                                </swiper-slide>

                                <swiper-slide>
                                    <Card 
                                        image={Dish}
                                        title='Salada Ravanello'
                                        price='R$ 49,97'
                                    />
                                </swiper-slide>
                            </swiper-container>
                        </SliderContainer>
                    </section>
                </Content>
            </main>

            <Footer />
        </Container>
    )
}