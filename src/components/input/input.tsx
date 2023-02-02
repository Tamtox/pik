// Dependencies

// Styles
import "./input.scss";

type InputProps =  {
    value?: string,
    defaultValue?: string,
    placeholder?: string,
    children?: any,
    className?: string,
    classNameWrapper?: string,
    disabled?: boolean,
    required?:boolean
    type?: string,
    onChange?: Function,
}

const Input = ({value,defaultValue,placeholder,type,className,classNameWrapper,children,disabled,required,onChange}:InputProps):JSX.Element => {
    return (
        <div className={`input-container ${classNameWrapper}`}>
            <input 
                placeholder={placeholder && placeholder} 
                value={value && value} 
                defaultValue={defaultValue && defaultValue}
                type={type ? type : 'text'}
                required={required || false} 
                onChange={(e:any)=> {onChange ? onChange(e.target.value) : null} } 
                className={`input ${className}`}
            >
            </input>
            {children}
        </div>
    )
}

export default Input;