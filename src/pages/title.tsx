// Dependencies
import React,{useReducer} from "react";
// Styles
import "../styles/title.scss";
// Components
import {MdOutlineApartment} from 'react-icons/md';
import {BiRuble} from 'react-icons/bi';
import Button from "../components/button/button";
import Input from "../components/input/input";
import Select from "../components/select/select";

const cities = [
    {title: "Москва и область", id:"1"},
    {title: "Санкт петербург", id:"2"},
    {title: "Благовещенск", id:"3"},
    {title: "Владивосток ", id:"4"},
    {title: "Екатеринбург", id:"5"},
    {title: "Казань", id:"6"},
    {title: "Калуга", id:"7"},
    {title: "Нижний новгород", id:"8"},
    {title: "Новороссийск", id:"9"},
    {title: "Обнинск", id:"10"},
    {title: "Тюмень", id:"11"},
    {title: "Южно сахалинск", id:"12"},
    {title: "Ярославль", id:"13"},
]

interface ITitleState {
    amount: string;
    region: string;
    regionId:string,
}

const Title:React.FC = ():JSX.Element => {
    // Title state
    const [state, setState] = useReducer((state:ITitleState,action:Partial<ITitleState>) => ({...state,...action}), {
        amount:"",
        region:cities[0].title,
        regionId:cities[0].id,
    });
    const amountInputHandler = (newAmount:string) => {
        setState({amount:newAmount});
    }
    const regionSelectHandler = (newRegion:string,newRegionId:string) => {
        setState({region:newRegion,regionId:newRegionId});
    }
    return (
        <div className="title">
            <div className="title-icon-wrapper">
                <MdOutlineApartment className="title-icon"/>
            </div>
            <div className="title-text-wrapper">
                <h2>Сколько вы платите за аренду квартиры?</h2>
            </div>
            <Select classNameWrapper="title-region-select" value={state.region} onChange={regionSelectHandler} options={cities}/>
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