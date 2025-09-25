import styles from "./Input.module.css";

type InputProps = {
  //type: 'text' | 'number' | 'search'; union type
  id: string;
  labelText: string;
} & React.ComponentProps<"input">; //inter

export function Input({id,type,labelText,...rest}: InputProps) {

  return (
    <div className={styles.container}>
      <label className={styles.label} 
      htmlFor={id}>{labelText}</label>
      <input className={styles.input} id={id} type={type} {...rest}/>
    </div>
  );
}
