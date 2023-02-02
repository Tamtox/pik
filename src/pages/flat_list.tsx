// Dependencies
import React,{useReducer,useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from "swiper";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {IoHeartOutline} from 'react-icons/io5';
import {AiOutlinePercentage} from 'react-icons/ai';
import {BsCalendar3} from 'react-icons/bs';
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
    const navigate = useNavigate();
    const city = useSelector<RootState,string>(state=>state.flatSlice.city);
    const price = useSelector<RootState,string>(state=>state.flatSlice.price);
    const [detailedFlat, setDetailedFlat] = useState<any>(null);
    const detailedFlatComponent = detailedFlat ? (
        <div className="detailed-flat">
            <Swiper 
            className="detailed-flat-images"
            slidesPerView={'auto'}
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            >
                <SwiperSlide className="detailed-flat-image-container">
                    <img className="detailed-flat-image" src="https://balancedarchitecture.com/wp-content/uploads/2021/11/EXISTING-FIRST-FLOOR-PRES-scaled-e1635965923983.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="detailed-flat-image-container">
                    <img className="detailed-flat-image" src="https://balancedarchitecture.com/wp-content/uploads/2021/11/EXISTING-FIRST-FLOOR-PRES-scaled-e1635965923983.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="detailed-flat-image-container">
                    <img className="detailed-flat-image" src="https://balancedarchitecture.com/wp-content/uploads/2021/11/EXISTING-FIRST-FLOOR-PRES-scaled-e1635965923983.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
            <div className="detailed-flat-info">
                <div className="detailed-flat-info-size-container">
                    <div className="detailed-flat-info-size">
                        {`${detailedFlat.apartmentType} ${detailedFlat.apartmentSize}`}
                    </div>
                    <IoHeartOutline className="detailed-flat-info-size-favourite"/>
                </div>
                <div className="detailed-flat-info-location">
                    {`${detailedFlat.district}`}
                </div>
                <div className="detailed-flat-info-price">
                {`От ${detailedFlat.price} ₽`}
                </div>
            </div>
            <div className="detailed-flat-info-program">
                <div className="detailed-flat-info-program-item detailed-flat-info-program-type">
                    <AiOutlinePercentage className="detailed-flat-info-program-icon"/>
                </div>
                <div className="detailed-flat-info-program-item detailed-flat-info-program-rate">
                    <AiOutlinePercentage className="detailed-flat-info-program-icon"/>
                </div>
                <div className="detailed-flat-info-program-item detailed-flat-info-program-downment">
                    <BsCalendar3 className="detailed-flat-info-program-icon"/>
                </div>
            </div>
            <div className="detailed-flat-info-link-container">
                Для получения актуальной информации по предложениям зайдите на
                <a className="detailed-flat-info-link" target="_blank" href={`https://www.pik.ru/`}>pik.ru</a>
            </div>
            <div className="detailed-flat-controls">
                <Button>Хочу тут жить</Button>
                <Button>Следующая квартира</Button>
            </div>        
        </div>
    ) : null;
    return (
        <div className="flat-list-container">
            <div className="flat-list-header">
                <div className="flat-list-header-options">
                    <div className="flat-list-header-options-price">
                        <p className="price-number">{`${price} ₽`}</p>
                        <p className="price-text">{"/в месяц"}</p>
                    </div>
                    <div className="flat-list-header-options-region">
                        {city}
                    </div>
                </div>
                <Button onClick={()=>{navigate("/")}} className="flat-list-header-return">
                    Изменить
                </Button>
            </div>
            {detailedFlat ? detailedFlatComponent : <Swiper 
            className="flat-list"
            slidesPerView={'auto'}
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            pagination={{ clickable: true }}
            >
                {flats.map((flat) => {
                    return (
                        <SwiperSlide className="flat-list-card" key={flat.id}>
                            <div className="flat-list-card-info">
                                <div className="flat-list-card-info-apartment">
                                    <div className="apartment-name">{flat.name}</div>
                                    <div className="apartment-district">{flat.district}</div>
                                </div>
                                <div className="flat-list-card-info-size">
                                    {`${flat.apartmentType} ${flat.apartmentSize}`}
                                </div>
                                <div className="flat-list-card-info-mort">
                                    {`В ипотеку от ${flat.pricePerMonth} ₽ в месяц`}
                                </div>
                                <div className="flat-list-card-info-cost">
                                    {`Стоимость квартиры от ${flat.pricePerMonth} ₽`}
                                </div>
                            </div>
                            <div className="flat-list-card-image-container">
                                <img className="flat-list-card-image" src="https://balancedarchitecture.com/wp-content/uploads/2021/11/EXISTING-FIRST-FLOOR-PRES-scaled-e1635965923983.jpg" alt="" />
                            </div>
                            <div className="flat-list-card-controls">
                                <Button onClick={()=>{setDetailedFlat(flat)}} className="flat-list-card-controls-flat-link">К квартире</Button>
                                <IoHeartOutline className="flat-list-card-controls-favourite"/>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>}
        </div>
    )
}

export default FlatList;