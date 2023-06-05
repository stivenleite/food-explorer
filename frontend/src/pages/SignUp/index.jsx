import { Container, Form } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import Logo from '../../assets/Logo.svg';

export function SignUp () {
    return (
        <Container>
            <Form>
                <img src={Logo}/>

                <label>
                    Seu nome
                    <Input
                        type='text'
                        placeholder='Exemplo: Maria da Silva' 
                    />
                </label>

                <label>
                    Email
                    <Input
                        type='text'
                        placeholder='Exemplo: exemplo@exemplo.com.br' 
                    />
                </label>

                <label>
                    Senha
                    <Input
                        type='password'
                        placeholder='No mínimo 6 caracteres' 
                    />
                </label>

                <Button
                    width='100%'
                    height='4.8rem'
                    title='Entrar'
                />

                <ButtonText 
                    title='Criar uma conta'
                />
               
            </Form>
        </Container>
    )
}