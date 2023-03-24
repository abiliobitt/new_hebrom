import { FC, ReactElement } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import { area, bed, building, car, shower } from '../../assets/icons'

import { CardBody, CardContainer, CardHeader, InfosList } from './styles'

export interface SliderProps {
    slidesPerView?: number
    onSlideChange?: Function
    pagination?: boolean
    navigation?: boolean
    classes?: string
    children?: ReactElement[]
}


const Card: FC = () => {
    return (
        <CardContainer>
            <CardHeader>
                <Swiper
                    slidesPerView={1}
                    navigation={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[Navigation]}
                >
                    <SwiperSlide><img src="http://placehold.it/200x300" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="http://placehold.it/200x300" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="http://placehold.it/200x300" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="http://placehold.it/200x300" alt="" /></SwiperSlide>
                </Swiper>
            </CardHeader>
            <CardBody>
                <h3>Bairro, Município</h3>
                <p>Localização</p>
                <InfosList>
                    <li>
                        <img src={area} alt="" />
                        50m²
                    </li>
                    <li>
                        <img src={bed} alt="" />
                        2
                    </li>
                    <li>
                        <img src={car} alt="" />
                        1
                    </li>
                    <li>
                        <img src={shower} alt="" />
                        1
                    </li>
                    <li>
                        <img src={building} alt="" />
                        17
                    </li>
                </InfosList>
                <h3> R$ 150.000</h3>
                <InfosList>
                    <li>
                        Venda
                    </li>
                    <li>
                        Residencial
                    </li>
                </InfosList>

            </CardBody>
        </CardContainer>
    )
}

export default Card