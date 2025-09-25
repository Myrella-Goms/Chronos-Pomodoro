import { PlayCircleIcon } from 'lucide-react';
import { Button } from '../Button/Button';
import { Cycles } from '../Cycles/Cycles';
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

      <div className="formRow">
        <Cycles/>
      </div>

      <div className="formRow">
        <Button icon={<PlayCircleIcon/>}/>
      </div>
    </form>
  );
}
