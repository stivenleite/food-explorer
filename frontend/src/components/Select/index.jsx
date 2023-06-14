import { Container } from "./styles"

import { FiChevronDown } from "react-icons/fi"

export function Select () {
    return (
        <Container>
            <select name="category">
                <option selected disabled>Selecione</option>
                <option value="Entradas">Entradas</option>
                <option value="Aperitivos">Aperitivos</option>
                <option value="Refeições">Refeições</option>
                <option value="Pratos Principais">Pratos Principais</option>
                <option value="Sobremesas">Sobremesas</option>
                <option value="Bebidas">Bebidas</option>
            </select>
            <FiChevronDown />
        </Container>
    )
}