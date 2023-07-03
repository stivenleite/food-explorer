import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { api } from "../../services/api";

import { Container, Content, InputFile, SelectContainer } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Textarea } from "../../components/Textarea";
import { ProductTag } from "../../components/ProductTag";

import { FiChevronLeft, FiChevronDown, FiShare } from "react-icons/fi";

export function NewProduct () {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState(""); 

  const [buttonStatus, setButtonStatus] = useState(false);
  const [disableButton, setDisableButton] = useState(true);

  function handleAddIngredient(){
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted){
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
  }

  function handleInputImage(event) {
    const file = event.target.files[0];
    setImage(file);
  }

  function handleNewProduct(){
    if(newIngredient) {
      return alert("Existem ingredientes não adicionados. Clique no sinal de + para adicionar.")
    }

    setButtonStatus(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("image", image);
    formData.append("price", price);
    formData.append("description", description);

    ingredients.map(ingredient => (
      formData.append("ingredients", ingredient)
    ));

    api.post("/products", formData)
      .then(alert("Produto cadastrado com sucesso!"), navigate(-1))
      .catch((error) => {
        if(error.response){
          alert(error.response.data.message)
        }else{
          alert("Erro ao cadastrar o produto.")
        }
      });

      setButtonStatus(false);
  }

  useEffect(() => {
    if (name && category && description && image && price && ingredients) {
      setDisableButton(false);
    }
  }, [name, category, description, image, price, ingredients])

  return (
    <Container>
      <Header />

      <main>
        <Content>
          <button onClick={() => navigate("/")}>
            <FiChevronLeft size={22}/>
            voltar
          </button>

          <form>
            <h1>Novo prato</h1>

            <div className="first-wrapper">
              <label>
                Imagem do produto
                <InputFile>
                  <input type="file" onChange={handleInputImage}/>
                  <div className="wrapper">
                    <FiShare />
                    Selecione imagem
                </div>
                </InputFile>
              </label>

              <label>
                Nome
                <Input 
                  type='text'
                  placeholder='Ex.: Salada Ceasar'
                  onChange={e => setName(e.target.value)}
                />
              </label>

              <label>
                Categoria
                <SelectContainer>
                  <select name="category" onChange={e => setCategory(e.target.value)}>
                      <option defaultValue="">Selecione</option>
                      <option value="Entradas">Entradas</option>
                      <option value="Aperitivos">Aperitivos</option>
                      <option value="Refeições">Refeições</option>
                      <option value="Pratos Principais">Pratos Principais</option>
                      <option value="Sobremesas">Sobremesas</option>
                      <option value="Bebidas">Bebidas</option>
                  </select>
                  <FiChevronDown />
                </SelectContainer>
              </label>
            </div>

            <div className="second-wrapper">
              <label>
                Ingredientes
                <div className="ingredients-wrapper">
                  {
                    ingredients.map((ingredient, index) => (
                      <ProductTag
                        key={String(index)} 
                        value={ingredient}
                        onClick={() => handleRemoveIngredient(ingredient)}
                      />
                    ))
                  }    
                  <ProductTag 
                    isNew
                    placeholder='Adicionar' 
                    onChange={e => setNewIngredient(e.target.value)}
                    value={newIngredient}
                    onClick={handleAddIngredient}
                  />
                </div>
              </label>

              <label>
                Preço
                <Input 
                  type='text'
                  placeholder='Ex.: 40,00'
                  onChange={e => setPrice(e.target.value)}
                />
              </label>
            </div>

            <label>
              Descrição
              <Textarea 
                placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
                onChange={e => setDescription(e.target.value)}
              />
            </label>

            <Button
              id='save-button' 
              title='Salvar alterações' 
              height='4.8rem' 
              disabled={disableButton}
              loading={buttonStatus}
              onClick={handleNewProduct}
            />
          </form>
        </Content>
      </main>
      <Footer />

    </Container>
  )
}