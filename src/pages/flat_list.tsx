// Dependencies
import React,{useReducer} from "react";
// Styles
import "../styles/flat_list.scss";
// Components
import Button from "../components/button/button";
import Input from "../components/input/input";
import Select from "../components/select/select";

const FlatList:React.FC = ():JSX.Element => {
    return (
        <div className="flat-list-container">
            <div className="flat-list-header">
                <div className="flat-list-header-options">
                    <div className="flat-list-header-options-price">
                        123
                    </div>
                    <div className="flat-list-header-options-region">
                        123
                    </div>
                </div>
                <Button className="flat-list-header-return">
                    Изменить
                </Button>
            </div>
            <div className="flat-list">
                123
            </div>
        </div>
    )
}

export default FlatList;