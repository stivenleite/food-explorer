import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { useAuth } from '../../hooks/auth';

import { Container, Form } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import Logo from '../../assets/Logo.svg';

export function SignIn () {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();
 
    function handleSignIn () {
        signIn({email, password});
    }

    return (
        <Container>
            <div className="image-wrapper">
                <img src={Logo}/>
            </div>
            
            <Form>
                <h1>Faça login</h1>
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
                    title='Entrar'
                    onClick={handleSignIn}
                />

                <ButtonText 
                    title='Criar uma conta'
                    onClick={() => navigate('/register')}
                />
               
            </Form>
        </Container>
    )
}