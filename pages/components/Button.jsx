import styles from "./Button.module.scss";

function doNothing() { }

const Button = ({ onClick = doNothing, type = "button", name, variant = "default", children, className, disabled }) => {
  const buttonStyle = `${styles.button} ${styles[variant]}} ${className}`
  return <button type={type} className={buttonStyle} onClick={onClick} disabled={disabled}>{children}{name}</button>
};

export default Button;