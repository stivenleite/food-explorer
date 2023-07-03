import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import { Container, Form } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import Logo from '../../assets/Logo.svg';

export function SignUp () {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    function handleSignUp () {
        if (!name || !email || !password) {
            alert("Preencha todos os campos!");
        }

        api.post("/users", {name, email, password})
            .then(() => {
                alert("Usuário cadastrado com sucesso!");
                navigate(-1);
            })
            .catch(error => {
                if(error.response){
                    alert(error.response.data.message);
                } else {
                    alert("Não foi possível cadastrar o usuário.")
                }
            });
    }

    return (
        <Container>
            <div className="image-wrapper">
                <img src={Logo}/>
            </div>

            <Form>
                <h1>Crie sua conta</h1>
                <label>
                    Seu nome
                    <Input
                        type='text'
                        placeholder='Exemplo: Maria da Silva'
                        onChange={e => setName(e.target.value)} 
                    />
                </label>

                <label>
                    Email
                    <Input
                        type='text'
                        placeholder='Exemplo: exemplo@exemplo.com.br' 
                        onChange={e => setEmail(e.target.value)} 
                    />
                </label>

                <label>
                    Senha
                    <Input
                        type='password'
                        placeholder='No mínimo 6 caracteres' 
                        onChange={e => setPassword(e.target.value)} 
                    />
                </label>

                <Button
                    width='100%'
                    height='4.8rem'
                    title='Criar conta'
                    onClick={handleSignUp}
                />

                <ButtonText 
                    title='Já tenho uma conta'
                    onClick={() => navigate(-1)}
                />
               
            </Form>
        </Container>
    )
}