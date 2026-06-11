import { HomeIcon, Settings, Sun, TimerIcon } from "lucide-react";
import styles from "./Menu.module.css";
import { useEffect, useState } from "react";

type Themes = "dark" | "light";
export function Menu() {
  const [theme, setTheme] = useState<Themes>(() => {
    const storageTheme = localStorage.getItem('theme') as Themes || "dark";
    return storageTheme;
  });

  //o use effect vê que o estado theme mudou, pois é sua dependencia, e executa a mudança, não fica dentro da função. hooks ficam no topo do componente
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function handleTheme(event: React.FormEvent) {
    event.preventDefault();
    //ao usar um parametro dentro da arrow function, nós capturamos o estado prévio antes de atualizar. se o estado muda o componente é renderizado novamente
    setTheme((previousTheme) => {
      const theme = previousTheme === "dark" ? "light" : "dark";
      return theme;
    });
  }
  return (
    <div className={styles.menu}>
      <a
        className={styles.menuIcons}
        href=""
        aria-label="ir para home"
        title="Home"
      >
        <HomeIcon />
      </a>
      <a
        className={styles.menuIcons}
        href=""
        aria-label="ver histórico"
        title="Histórico"
      >
        <TimerIcon />
      </a>
      <a
        className={styles.menuIcons}
        href=""
        aria-label="configurações"
        title="Configurações"
      >
        <Settings />
      </a>
      <a
        className={styles.menuIcons}
        href=""
        aria-label="mudar tema"
        title="Tema"
        onClick={handleTheme}
      >
        <Sun />
      </a>
    </div>
  );
}
