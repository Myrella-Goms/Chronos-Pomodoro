import { Container } from "../components/Container/Container";

interface Props {
    children: React.ReactNode;
}
export function GenericTemplate({children}: Props){
    return(
        <Container>
            {children}
        </Container>
    )
}