import { useNavigate, useParams } from "react-router-dom";

import { useEffect, useState } from "react";

import { api } from "../../services/api";

import { Container, Content, InputFile, SelectContainer } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";

import { Button } from "../../components/Button";
import { Textarea } from "../../components/Textarea";
import { ProductTag } from "../../components/ProductTag";

import { FiChevronLeft, FiChevronDown, FiShare } from "react-icons/fi";

export function EditProduct () {
  const navigate = useNavigate();
  const params = useParams();

  const [product, setProduct] = useState(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const [buttonStatus, setButtonStatus] = useState(false);

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

  async function handleUpdateProduct() {
    if(newIngredient) {
      return alert("Existem ingredientes não adicionados. Clique no sinal de + para adicionar.")
    }

    setButtonStatus(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("description", description);

    ingredients.map(ingredient => (
      formData.append("ingredients", ingredient)
    ));

    if(image){
      formData.append("image", image);
    }

    await api.put(`/products/${params.id}`, formData)
      .then(alert("Produto atualizado com sucesso!"), navigate("/"))
      .catch((error) => {
        if(error.response){
          alert(error.response.data.message)
        }else{
          alert("Erro ao atualizar o produto.")
        }
      })

    setButtonStatus(false);
  }

  async function handleDeleteProduct() {
    const confirm = window.confirm("Tem certeza que deseja deletar este produto?");

    setButtonStatus(true);

    if(confirm){
      await api.delete(`/products/${params.id}`)
        .then(alert("Produto deletado com sucesso!"), navigate("/"))
        .catch((error) => {
          if(error.response){
            alert(error.response.data.message)
          }else{
            alert("Erro ao deletar o produto.")
          }
        })
    }

    setButtonStatus(false);
  }

  useEffect(() => {
    async function fetchProduct () {
      const response = await api.get(`/products/${params.id}`);
      setProduct(response.data);

      const { name, category, description, price, ingredients } = response.data;
      setName(name);
      setCategory(category);
      setDescription(description);
      setPrice(price);
      setIngredients(ingredients.map(ingredient => ingredient.name));
      }
      
      fetchProduct();
  }, []);

  return (
    <Container>
      <Header />

      <main>
        <Content>
          <button onClick={() => navigate(-1)}>
            <FiChevronLeft size={22}/>
            voltar
          </button>

          <form>
            <h1>Editar prato</h1>

            <label>
              Imagem do produto
              <InputFile>
                <input type="file" onChange={handleInputImage}/>
                <div className="wrapper">
                  <FiShare />
                  Selecione imagem para alterá-la
              </div>
              </InputFile>
            </label>

            <label>
              Nome
              <Input 
                type='text'
                placeholder='Salada Ceasar'
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </label>

            <label>
              Categoria
              <SelectContainer>
                <select name="category" onChange={e => setCategory(e.target.value)}>
                    { category ? <option defaultValue={category}>{category}</option> : <option defaultValue="">Selecione</option> }
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
                value={price}
                onChange={e => setPrice(e.target.value)}
              />
            </label>

            <label>
              Descrição
              <Textarea 
                placeholder='A Salada César é uma opção refrescante para o verão.'
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </label>

            <div className="buttons-wrapper">
              <Button 
                title='Excluir prato' 
                height='4.8rem' 
                loading={buttonStatus}
                onClick={handleDeleteProduct}
              />

              <Button 
                title='Salvar alterações' 
                height='4.8rem' 
                loading={buttonStatus}
                onClick={handleUpdateProduct}
              />
            </div>
          </form>
        </Content>
      </main>
      <Footer />

    </Container>
  )
}