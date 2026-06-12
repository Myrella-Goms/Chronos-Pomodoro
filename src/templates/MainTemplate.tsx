import { Container } from "../components/Container/Container";
import { Logo } from "../components/Logo/Logo";
import { Menu } from "../components/Menu/Menu";
import { Footer } from "../components/Footer/Footer";

type TemplateProps ={
    children: React.ReactNode;
}
export function MainTemplate({ children } : TemplateProps) {
  return (
    <div>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        {children}
      </Container>
      <Container>
        <Footer/>
      </Container>
    </div>
  );
}
