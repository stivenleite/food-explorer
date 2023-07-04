import { useState, useEffect, useRef } from "react";

import { api } from "../../services/api";

import { Container, Banner, Content, SliderContainer } from "./styles";
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Card } from '../../components/Card';

import Macarrons from '../../assets/Macarrons.png'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export function Home (){
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [categories, setCategories] = useState([]);
    const [sliderPosition, setSliderPosition] = useState(0);
    const [reachedEnd, setReachedEnd] = useState(false);
    const slider = document.getElementById('slider');

    const dataFromHeaderMenuMobile = (data) => {
        setSearch(data);
    };

    function scrollLeft () {
        slider.scrollLeft -= 94;
        setSliderPosition(slider.scrollLeft)

        setReachedEnd(false);
    }

    function scrollRight () {
        slider.scrollLeft += 94;

        setSliderPosition(slider.scrollLeft)

        const isEndReached = slider.scrollLeft === (slider.scrollWidth - slider.offsetWidth);
        setReachedEnd(isEndReached);
    }

    function handleSliderScroll (e) {
        setSliderPosition(e.target.scrollLeft);
    }

    useEffect(() => {
        async function fetchProducts () {
            const response = await api.get(`/products?searchParam=${search}`);
            setProducts(response.data);

            setCategories([...new Set(response.data.map(product => product.category))]);
        }

        fetchProducts();
    }, [search])
    
    return (
        <Container>
            <Header dataFromHeaderMenuMobile={dataFromHeaderMenuMobile}/>
            
            <main>
                <Content>
                    <Banner>
                        <img src={Macarrons} alt="" />

                        <div className="rectangle-wrapper">
                            <div className="text-wrapper">
                                <h1>Sabores inigualáveis</h1>
                                <span>Sinta o cuidado do preparo com ingredientes selecionados.</span>
                            </div>
                        </div>
                    </Banner>

                    {
                        categories.map((category, index) => (
                        <section key={index}>    
                                <h2>{category}</h2>
                                <SliderContainer id="slider" onScroll={e => handleSliderScroll(e)}>
                                    {
                                        products
                                            .filter(product => product.category == category)
                                            .map(product => (
                                                <Card 
                                                    key={product.id}
                                                    image={product.image}
                                                    title={product.name}
                                                    price={product.price}
                                                    id={product.id}
                                                />
                                            ))
                                    }
                                </SliderContainer>
                                <div id="shadow-left" className={sliderPosition == 0 ? "hide" : ""}><FiChevronLeft size={60} onClick={scrollLeft}/></div>
                                <div id="shadow-right" className={reachedEnd ? "hide" : ""}><FiChevronRight size={60} onClick={scrollRight}/></div>
                        </section>
                        ))
                    }
                </Content>
            </main>

            <Footer />
        </Container>
    )
}