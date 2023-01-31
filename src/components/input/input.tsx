// Dependencies

// Styles
import "./input.scss";

type InputProps =  {
    value?: string,
    defaultValue?: string,
    placeholder?: string,
    children: any,
    className?: string,
    classNameWrapper?: string,
    disabled?: boolean,
    type?: string,
    onChange?: Function,
}

const Input = ({value,defaultValue,placeholder,type,className,classNameWrapper,children,disabled,onChange}:InputProps):JSX.Element => {
    return (
        <div className={`input-wrapper ${classNameWrapper}`}>
            <input 
                placeholder={placeholder && placeholder} 
                value={value && value} 
                defaultValue={defaultValue && defaultValue}
                type={type ? type : 'text'}
                onChange={(e:any)=> {onChange ? onChange(e.target.value) : null} } 
                className={`input ${className}`}
            >
            </input>
            {children}
        </div>
    )
}

export default Input;