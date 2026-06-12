import { Home } from "lucide-react";
import { Button } from "../../components/Button/Button";
import { GenericTemplate } from "../../templates/GenericTemplate";
import styles from './NotFound.module.css'

export function NotFound() {
  return (
    <GenericTemplate>
      <div className={styles.title}>
        Page Not Found
      </div>
      <div className={styles.subtitle}>
        This content no longer exists :(
      </div>
      <Button style={ { fontSize: '1px'}} color="red" icon={<Home />} title="Home">
      </Button>
    </GenericTemplate>
  );
}
