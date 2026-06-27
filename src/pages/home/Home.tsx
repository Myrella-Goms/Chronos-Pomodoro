import { Container } from "../../components/Container/Container";
import { CountDown } from "../../components/Countdown/CountDown";
import { Form } from "../../components/Form/Form";
import { MainTemplate } from "../../templates/MainTemplate";

export function Home() {
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <Form />
      </Container>
    </MainTemplate>
  );
}
