import { Input } from '../Input/Input';
import styles from './Form.module.css'

export function Form() {
  return (
    <form className={styles.form} action="">
      <div className={styles.formRow}>
        <Input 
        labelText='Task'
        id='myInput' 
        type='text'
        placeholder='Digite aqui'
        />
      </div>
      <div className={styles.formRow}>
        <button className={styles.button}>Enviar</button>
      </div>
    </form>
  );
}
