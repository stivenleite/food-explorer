import { useState, useEffect } from "react";

import { api } from "../../services/api";

import { Container, Banner, Content, SliderContainer } from "./styles";
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Card } from '../../components/Card';

import Macarrons from '../../assets/Macarrons.png'

export function Home (){
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [categories, setCategories] = useState([]);

    const dataFromHeaderMenuMobile = (data) => {
        setSearch(data);
    };

    useEffect(() =>{
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
                                <SliderContainer>
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
                        </section>
                        ))
                    }
                </Content>
            </main>

            <Footer />
        </Container>
    )
}