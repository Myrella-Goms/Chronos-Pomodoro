import { Container } from "../components/Container/Container";
import { CountDown } from "../components/Countdown/CountDown";
import { Logo } from "../components/Logo/Logo";
import { Menu } from "../components/Menu/Menu";
import { Form } from "../components/Form/Form";
import { Footer } from "../components/Footer/Footer";

export function Home() {
  return (
    <div>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <Form />
      </Container>
      <Container>
        <Footer/>
      </Container>
    </div>
  );
}
