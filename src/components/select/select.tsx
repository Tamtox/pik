// Dependencies
import React,{useReducer} from "react";
import {MdOutlineKeyboardArrowDown} from "react-icons/md"
// Styles
import "./select.scss";

type InputProps =  {
    value?: string,
    defaultValue?: string,
    placeholder?: string,
    className?: string,
    classNameWrapper?: string,
    disabled?: boolean,
    options:any[],
    onChange?: Function,
}

interface ISelectState {
    open:boolean,
    selectedItem:string
}

const Select = ({value,defaultValue,placeholder,className,options,classNameWrapper,disabled,onChange}:InputProps):JSX.Element => {
    // Select state
    const [state,useState] = useReducer((state:ISelectState, action:Partial<ISelectState>)=>({...state,...action}),{
        open:false,
        selectedItem: defaultValue || "123",
    })
    // Open/close handler
    const toggleSelectOpen = () => {
        if(options) {
            useState({open:!state.open})
        }
    }
    // 
    return (
        <div className={`select-container ${classNameWrapper}`} onClick={toggleSelectOpen}>
            <div className="select-header">
                {value || ""}
            </div>
            {state.open ? <div className="select-list">
                {options.map((option:any)=>{
                    return (
                        <div key={option.id} className="select-list-item" onClick={()=>{onChange ? onChange(option.title,option.id) : null}}>
                            {option.title}
                        </div>
                    )
                })}
            </div> : null}
            <MdOutlineKeyboardArrowDown className={`select-icon${state.open ? "-open" : ""}`}/>
        </div>
    )
}

export default Select;