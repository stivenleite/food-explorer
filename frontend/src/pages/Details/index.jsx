import { useNavigate, useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart";

import { Container, Content, Tags } from "./styles";
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Tag } from "../../components/Tag"
import { QtdeSelector } from "../../components/QtdeSelector"
import { Button } from "../../components/Button"

import { FiChevronLeft } from "react-icons/fi";

export function Details () {
    const navigate = useNavigate();
    const params = useParams();
    const { user } = useAuth();
    const { handleAddToCart } = useCart();

    const [product, setProduct] = useState([]);
    const [imageURL, setImageURL] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [price, setPrice] = useState(null)
    const [calculatedPrice, setCalculatedPrice] = useState(null)
    const [qtde, setQtde] = useState(1);

    function getQtdeFromSelector(qtde) {
        setQtde(qtde);
    }

    function handleOrderItem () {
        handleAddToCart({
          user_id: user.id,
          product_id: product.id,
          title: product.name,
          image: product.image,
          price: calculatedPrice,
          qtde
        })
      }

    useEffect(() => {
        async function fetchProduct(){
            const response = await api.get(`/products/${params.id}`)
            setProduct(response.data);

            const { image, ingredients, price } = response.data;
            setImageURL(`${api.defaults.baseURL}/files/${image}`);
            setIngredients(ingredients.map(ingredient => ingredient.name));
            setPrice(price);
            setCalculatedPrice(price);
        }

        fetchProduct();
    }, [])

    useEffect(() => {
        function priceCalculation() {
            if(price){
                const calculatedPriceNumber = parseFloat(price.replace(",",".")) * qtde;
                const calculatedPriceString = String(calculatedPriceNumber.toFixed(2));
    
                setCalculatedPrice(calculatedPriceString.replace(".", ","))
            }
        }

        priceCalculation();
    }, [qtde])

    return (
        <Container>
            <Header />

            <main>
                <Content>
                    <button onClick={() => navigate(-1)}>
                        <FiChevronLeft size={22}/>
                        voltar
                    </button>

                    <section>
                        <img src={imageURL} alt="Foto do produto" />
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                        
                        <Tags>
                            {
                                ingredients.map((ingredient, index) => (
                                    <Tag 
                                        key={String(index)}
                                        title={ingredient}
                                    />
                                ))
                            }
                        </Tags>
                    </section>
                    
                    {
                        user.admin ? 
                        <>
                            <Button
                                title='Editar prato'
                                height='4.8rem'
                                width='100%'
                                onClick={() => navigate(`/editproduct/${params.id}`)}
                            />
                        </> 
                        : 
                        <>
                            <div className="order">
                                <QtdeSelector getQtdeFromSelector={getQtdeFromSelector} />
                                <button onClick={handleOrderItem}>
                                    incluir ∙ {calculatedPrice}
                                </button>
                            </div>
                        </>
                    }
                </Content>
            </main>

            <Footer />
        </Container>
    )
}