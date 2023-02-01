// Dependencies

// Styles
import "./button.scss";

type ButtonProps =  {
    children?: any,
    className?: string,
    disabled?: boolean,
    onClick?: Function,
}

const Button = ({className,children,disabled,onClick}:ButtonProps):JSX.Element => {
    return (
        <button onClick={()=>{onClick ? onClick() : null}} className={`button ${className}`}>
            {children}
        </button>
    )
}

export default Button;