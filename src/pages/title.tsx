// Dependencies
import React,{useReducer} from "react";
// Styles
import "../styles/title.scss";
// Components
import {MdOutlineApartment} from 'react-icons/md';
import {BiRuble} from 'react-icons/bi';
import Button from "../components/button/button";
import Input from "../components/input/input";

interface ITitleState {
    amount: string;
}

const Title:React.FC = ():JSX.Element => {
    const [state, setState] = useReducer((state:ITitleState,action:Partial<ITitleState>) => ({...state,...action}), {amount:""});
    const amountInputHandler = (newAmount:string) => {
        setState({amount:newAmount});
    }
    return (
        <div className="title">
            <div className="title-icon-wrapper">
                <MdOutlineApartment className="title-icon"/>
            </div>
            <div className="title-text-wrapper">
                <h2>Сколько вы платите за аренду квартиры?</h2>
            </div>
            <div className="title-region-select ">

            </div>
            <Input value={state.amount} onChange={amountInputHandler} classNameWrapper="title-amount" placeholder="Ежемесячный платёж">
                <BiRuble className="title-amount-icon"/>
            </Input>
            <Button className="title-button">
                Продолжить
            </Button>
        </div>
    )
}

export default Title