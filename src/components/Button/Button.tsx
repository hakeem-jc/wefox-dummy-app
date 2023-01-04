import { FC } from "react";
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    text: string;
}

const Button:FC<ButtonProps> = (props) => {
    return <button className="button" type={props.type}>{props.text}</button>
}

export default Button;