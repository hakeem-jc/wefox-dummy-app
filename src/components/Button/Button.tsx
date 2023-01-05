import { FC } from "react";
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    text: string;
    onClick?: () => void;
}

const Button:FC<ButtonProps> = (props) => {
    return <button className="button" type={props.type} onClick={props.onClick}>{props.text}</button>
}

export default Button;