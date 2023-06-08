import { Container } from "./styles";
import { QtdeSelector } from "../QtdeSelector";
import { Button } from "../Button";

import { FiHeart } from "react-icons/fi";

export function Card ({image, title, price}) {
  return (
    <Container>
      <img 
        src={image} 
        alt="Product image" 
      />

      <h3>
        {title}
      </h3>

      <span>
        {price}
      </span>

      <QtdeSelector />

      <Button 
        title="incluir"
        height="4.8rem"
        width="16.2rem"
      />

      <FiHeart size={24}/>

    </Container>
  )
}