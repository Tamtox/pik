// Dependencies
import React,{useReducer} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from "swiper";
import { useSelector,useDispatch } from "react-redux";
// Styles
import "../styles/flat_list.scss";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// Components
import Button from "../components/button/button";
import { RootState } from "../store/store";
import { flatActions } from "../store/store";

const flats = [
    {
        id: 1,
        name: "Flat 1",
        district:"District 1",
        apartmentType: "Studio",
        apartmentSize: "20m",
        pricePerMonth: "30000",
        price: "7100000",
        image: "",
    },
    {
        id: 2,
        name: "Flat 2",
        district:"District 2",
        apartmentType: "Studio",
        apartmentSize: "33m",
        pricePerMonth: "40000",
        price: "",
        image: "1150000",
    },
    {
        id: 3,
        name: "Flat 3",
        district:"District 3",
        apartmentType: "Studio",
        apartmentSize: "60m",
        pricePerMonth: "60000",
        price: "15500000",
        image: "",
    },
]

const FlatList:React.FC = ():JSX.Element => {
    const city = useSelector<RootState,string>(state=>state.flatSlice.city);
    const price = useSelector<RootState,string>(state=>state.flatSlice.price);
    return (
        <div className="flat-list-container">
            <div className="flat-list-header">
                <div className="flat-list-header-options">
                    <div className="flat-list-header-options-price">
                        {price}
                    </div>
                    <div className="flat-list-header-options-region">
                        {city}
                    </div>
                </div>
                <Button className="flat-list-header-return">
                    Изменить
                </Button>
            </div>
            <Swiper 
            className="flat-list"
            slidesPerView={'auto'}
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            pagination={{ clickable: true }}
            >
                {flats.map((flat) => {
                    return (
                        <SwiperSlide className="flat-list-card">
                            <div className="flat-list-card-info">
                                <div className="flat-list-card-info-apartment">
                                    <div className="apartment-name">{flat.name}</div>
                                    <div className="apartment-district">{flat.district}</div>
                                </div>
                                <div className="flat-list-card-info-size">
                                    <div className="apartment-type"></div>
                                    <div className="apartment-size"></div>
                                </div>
                                <div className="flat-list-card-info-mort">
                                    {`В ипотеку от ${flat.pricePerMonth} ₽ в месяц`}
                                </div>
                                <div className="flat-list-card-info-cost">
                                    {`Стоимость квартиры от ${flat.pricePerMonth} ₽`}
                                </div>
                            </div>
                            <div className="flat-list-card-image">

                            </div>
                            <div className="flat-list-card-controls">
                                <Button>К квартире</Button>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default FlatList;