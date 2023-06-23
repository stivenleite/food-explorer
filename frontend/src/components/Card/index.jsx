import { useAuth } from '../../hooks/auth';

import { useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';

import { api } from '../../services/api';

import { Container } from "./styles";
import { QtdeSelector } from "../QtdeSelector";
import { Button } from "../Button";

import { FiHeart, FiEdit, FiChevronRight } from "react-icons/fi";

export function Card ({image, title, price, id, ...rest}) {
  const { user } = useAuth();
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
          <FiChevronRight />
      </h3>

      <span>
        R$ {calculatedPrice}
      </span>

      {
        user.admin ? <FiEdit size={24} onClick={handleEdit}/> : 
        <>
          <QtdeSelector getQtdeFromSelector={getQtdeFromSelector}/>

          <Button 
            title="incluir"
            height="3.2rem"
            width="16.2rem"
            onClick={() => alert("Função não implementada.")}
          />

          <FiHeart size={24}/>
        </>
      }
    </Container>
  )
}