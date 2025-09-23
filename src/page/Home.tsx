import { Container } from "../components/Container/Container";
import { Logo } from "../components/Logo/Logo";
import { Menu } from "../components/Menu/Menu";


export function Home(){
    return(
        <div>
            <Container>
                <Logo/>
                <Menu/>
            </Container>
        </div>
    )
}