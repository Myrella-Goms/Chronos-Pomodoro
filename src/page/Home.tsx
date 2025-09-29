import { Container } from "../components/Container/Container";
import { CountDown } from "../components/Countdown/Countdown";
import { Logo } from "../components/Logo/Logo";
import { Menu } from "../components/Menu/Menu";


export function Home(){
    return(
        <div>
            <Container>
                <Logo/>
            </Container>
            <Container>
                <Menu/>
            </Container>
             <Container>
                <CountDown/>
            </Container>
        </div>
    )
}