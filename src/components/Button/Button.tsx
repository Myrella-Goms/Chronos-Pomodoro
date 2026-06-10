import type React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  icon: React.ReactNode;
  color?: "green" | "red";
} & React.ComponentProps<"button">; 

export function Button({ color = 'green', icon, ...props }: ButtonProps) {
  return (
    <div className="button">
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </div>
  );
}
