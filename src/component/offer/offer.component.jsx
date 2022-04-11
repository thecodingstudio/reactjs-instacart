import React from "react";

import FreeDelivery from './freedelivery/freedelivery.component';
import Refer from './refer/refer.component';

import Carousel from 'react-elastic-carousel';

import './offer.styles.scss';
import './carousel2.styles.css';

const Offer = () => {

    const breakPoints = [
        { width: 150, itemsToShow: 1 }
    ];

    return (

        <div className="offer">
            <Carousel breakPoints={breakPoints} >
                <FreeDelivery />
                <Refer />
            </Carousel>
        </div>
    )
};

export default Offer;