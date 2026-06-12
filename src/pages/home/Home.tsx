import { Container } from "../../components/Container/Container";
import { CountDown } from "../../components/Countdown/CountDown";
import { Form } from "../../components/Form/Form";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { MainTemplate } from "../../templates/MainTemplate";

interface HomeProps {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
}
export function Home({ props }: HomeProps) {
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
