// Dependencies
import React,{useReducer} from "react";
import {MdOutlineKeyboardArrowDown} from "react-icons/md"
// Styles
import "./select.scss";

type InputProps =  {
    value?: string,
    defaultValue?: string,
    placeholder?: string,
    children?: [],
    className?: string,
    classNameWrapper?: string,
    disabled?: boolean,
    onChange?: Function,
}

interface ISelectState {
    open:boolean,
    selectedItem:string
}

const Select = ({value,defaultValue,placeholder,className,classNameWrapper,children,disabled,onChange}:InputProps):JSX.Element => {
    // Select state
    const [state,useState] = useReducer((state:ISelectState, action:Partial<ISelectState>)=>({...state,...action}),{
        open:false,
        selectedItem:defaultValue || "",
    })
    return (
        <div className={`select-container ${classNameWrapper}`} onClick={()=>{useState({open:!state.open})}}>
            <ul className="select">
                { children ? children?.map((item:any)=> {
                    return (
                        <li className="select-option" key={item.id}>
                            {item.title}
                        </li>
                    )
                }) : null}
            </ul>
            <MdOutlineKeyboardArrowDown className={`select-icon${state.open ? "-open" : ""}`}/>
            {/* <select 
                placeholder={placeholder && placeholder} 
                value={value && value} 
                defaultValue={defaultValue && defaultValue}
                onChange={(e:any)=> {onChange ? onChange(e.target.value) : null} } 
                className={`select ${className}`}
            >
                <option value="">Select something…</option>
                <option>Lorem</option>
                <option>Ipsum</option>
                <option>Dolor</option>
                <option>Sit</option>
                <option>Amet</option>
            </select> */}
        </div>
    )
}

export default Select;