import { Container, Banner } from "./styles";
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";

import Dish from "../../assets/Dish.png";

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

            <Swiper spaceBetween={80} slidesPerView={2}>
                <SwiperSlide>
                    <Card 
                        image={Dish}
                        title="Salada Ravanello"
                        price="R$ 49,97"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card 
                        image={Dish}
                        title="Salada Ravanello"
                        price="R$ 49,97"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card 
                        image={Dish}
                        title="Salada Ravanello"
                        price="R$ 49,97"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card 
                        image={Dish}
                        title="Salada Ravanello"
                        price="R$ 49,97"
                    />
                </SwiperSlide>
            </Swiper>
            
        </Container>
    )
}