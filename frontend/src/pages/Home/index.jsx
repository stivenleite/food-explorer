import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Container, Banner, Content, SliderContainer } from "./styles";
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Card } from '../../components/Card';

import { useAuth } from "../../hooks/auth";

import MacarronsMobile from '../../assets/MacarronsMobile.png'

export function Home (){
    const { user } = useAuth();
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [productId, setProductId] = useState("");

    const dataFromHeaderMenuMobile = (data) => {
        setSearch(data);
    };

    useEffect(() =>{
        async function fetchProducts () {
            const response = await api.get(`/products?searchParam=${search}`);
            setProducts(response.data);
        }

        fetchProducts();
    }, [search])
    
    return (
        <Container>
            <Header dataFromHeaderMenuMobile={dataFromHeaderMenuMobile}/>
            
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
                            <h2>Refeições</h2>
                            <SliderContainer>
                                {
                                    products.map((product) => (
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
                </Content>
            </main>

            <Footer />
        </Container>
    )
}