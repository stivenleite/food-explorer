import { useAuth } from '../../hooks/auth';
import { useCart } from '../../hooks/cart';

import { useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';

import { api } from '../../services/api';

import { Container } from "./styles";
import { QtdeSelector } from "../QtdeSelector";
import { Button } from "../Button";

import { FiHeart, FiEdit } from "react-icons/fi";

export function Card ({image, title, price, id, ...rest}) {
  const { user } = useAuth();
  const { handleAddToCart } = useCart();
  const navigate = useNavigate();

  const imageURL = `${api.defaults.baseURL}/files/${image}`

  const [qtde, setQtde] = useState(1);
  const [calculatedPrice, setCalculatedPrice] = useState(price)

  function getQtdeFromSelector(qtde) {
      setQtde(qtde);
  }

  function handleEdit () {
    navigate(`/editproduct/${id}`)
  }

  function handleDetails () {
    navigate(`/details/${id}`)
  }

  function handleOrderItem () {
    handleAddToCart({
      user_id: user.id,
      product_id: id,
      title,
      image,
      price: calculatedPrice,
      qtde
    })
  }

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
      <img 
        src={imageURL} 
        alt="Product image" 
      />

      <h3 onClick={handleDetails}>
          {title}
      </h3>

      <span>
        R$ {calculatedPrice}
      </span>

      {
        user.admin ? <FiEdit size={24} onClick={handleEdit}/> : 
        <>

          <div className="order-wrapper">
            <QtdeSelector getQtdeFromSelector={getQtdeFromSelector}/>

            <Button
              title="incluir"
              height="3.2rem"
              width="16.2rem"
              onClick={handleOrderItem}
            />
          </div>
        </>
      }
    </Container>
  )
}