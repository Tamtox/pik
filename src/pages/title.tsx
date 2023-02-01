// Dependencies
import React,{useReducer} from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// Styles
import "../styles/title.scss";
// Components
import {MdOutlineApartment} from 'react-icons/md';
import {BiRuble} from 'react-icons/bi';
import Button from "../components/button/button";
import Input from "../components/input/input";
import Select from "../components/select/select";
import { RootState } from "../store/store";
import { flatActions } from "../store/store";

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
    city: string;
    cityId:string,
}

const Title:React.FC = ():JSX.Element => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const city = useSelector<RootState,string>(state=>state.flatSlice.city);
    const cityId = useSelector<RootState,string>(state=>state.flatSlice.cityId);
    const price = useSelector<RootState,string>(state=>state.flatSlice.price);
    // Title state
    const [state, setState] = useReducer((state:ITitleState,action:Partial<ITitleState>) => ({...state,...action}), {
        amount: price || "",
        city:cities[0].title,
        cityId:cities[0].id,
    });
    const amountInputHandler = (newAmount:string) => {
        setState({amount:newAmount});
    }
    const regionSelectHandler = (newCity:string,newCityId:string) => {
        setState({city:newCity,cityId:newCityId});
    }
    const formSubmitHandler = (event:any) => {
        event.preventDefault();
        dispatch(flatActions.setPrice(state.amount));
        dispatch(flatActions.setCity(state.city));
        dispatch(flatActions.setCityId(state.cityId));
        navigate("/flat-list");
    }
    return (
        <form className="title" onSubmit={formSubmitHandler}>
            <div className="title-icon-wrapper">
                <MdOutlineApartment className="title-icon"/>
            </div>
            <div className="title-text-wrapper">
                <h2>Сколько вы платите за аренду квартиры?</h2>
            </div>
            <Select classNameWrapper="title-region-select" value={state.city} onChange={regionSelectHandler} options={cities}/>
            <Input value={state.amount} onChange={amountInputHandler} classNameWrapper="title-amount" placeholder="Ежемесячный платёж">
                <BiRuble className="title-amount-icon"/>
            </Input>
            <Button className="title-button">
                Продолжить
            </Button>
        </form>
    )
}

export default Title