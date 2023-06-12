import { Container, Content } from "./styles";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { Input } from "../../components/Input";

import { FiChevronLeft } from "react-icons/fi";

export function NewProduct () {
  return (
    <Container>
      <HeaderAdmin />

      <main>
        <Content>
          <button>
            <FiChevronLeft size={22}/>
            voltar
          </button>

          <form>
            <h1>Novo prato</h1>

            <label>
              Imagem do produto
            </label>

            <label>
              Nome
              <Input 
                type='text'
                placeholder='Ex.: Salada Ceasar'
              />
            </label>
          </form>
        </Content>
      </main>
    </Container>
  )
}