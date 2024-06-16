import React, { useState, useEffect } from 'react';
import { Title } from '../componentes/Title';
import { Carousel } from '../componentes/Carousel';
import reviewData from '../data/reviewData.json';



const Home = () => {
    return (
            <section className="reviewSection">
                <Title
                    text='Bienvenido a Sonkei FC'
                /> 
                <div className="carouselSection">
                    <Carousel data={reviewData.slides} />
                </div>
            </section>
    )
};

export default Home;


