import type React from "react";
import styles from './Button.module.css'


type ButtonProps = {
    icon: React.ReactNode;

} & React.ComponentProps<"button">; //inter

export function Button({icon, ...props}: ButtonProps) {

  return (
    <div className="button">
      <button className={styles.button} {...props}>
          {icon}
      </button>
    </div>
  );
}

