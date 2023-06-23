import { Container } from "./styles";

export function Button ({icon: Icon, title, loading = false, disabled: Disabled, height, width, ...rest}) {
    return (
        <Container
            type="button"
            disabled={Disabled}
            height={height}
            width={width}
            {...rest}
        >
            {Icon && <Icon size={20}/>}
            {loading ? 'Carregando...' : title}
        </Container>
    )
};