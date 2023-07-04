import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";
import { useCart } from "../../hooks/cart";
import { useAuth } from "../../hooks/auth";

import { Container, Content, Items } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { FiChevronLeft } from "react-icons/fi"

export function Cart () {
    const navigate = useNavigate();
    const { cart, handleRemoveFromCart } = useCart();
    const { user } = useAuth();

    const [ userCart, setUserCart ] = useState(cart.filter(item => item.user_id == user.id)  || []);
    const [ totalPrice, setTotalPrice ] = useState("");

    useEffect (() => {
        function calculateTotalPrice () {
            const allPrices = userCart.map(item => {
                return Number(item.price.replace(",","."))
            })

            let sum = 0;
            for (let i = 0; i < allPrices.length; i++){
                sum += allPrices[i];
            }

            setTotalPrice(String(sum.toFixed(2).replace(".",",")))
        }

        calculateTotalPrice();
    }, [userCart])

    return (
        <Container>
        <Header />

        <main>
            <Content>
                <button onClick={() => navigate(-1)}>
                    <FiChevronLeft size={22}/>
                    voltar
                </button>

                <h1>Meu pedido</h1>

                <Items>
                    {
                        userCart.map((item, index) => (
                            <li key={index}>
                                <img src={`${api.defaults.baseURL}/files/${item.image}`} alt="" />
                                <span>
                                    <h2>{item.qtde} x {item.title}  <span>{item.price}</span></h2>
                                    <button onClick={() => handleRemoveFromCart(item.id)}>Excluir</button>
                                </span>
                            </li>
                        ))
                    }
                </Items>

                <span>Total: R$ {totalPrice}</span>
            </Content>
        </main>

        <Footer />
    </Container>
    )
}