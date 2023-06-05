import { Container } from "./styles";

export function Button ({icon: Icon, title, loading = false, height, width, ...rest}) {
    return (
        <Container
            type="button"
            disabled={loading}
            height={height}
            width={width}
            {...rest}
        >
            {Icon && <Icon size={20}/>}
            {loading ? 'Carregando...' : title}
        </Container>
    )
};