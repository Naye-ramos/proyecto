import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import SliderItem from './SliderItem';

const SliderImages = ({ elementos, height }) => {

    return(

        <div className="slide-container">
            <Slide>
                {elementos.map((item, index) => (
                    <SliderItem
                    key = {item.id || index}
                    imagen = {item.imagen}
                    titulo ={item.titulo}
                    height ={height}
                    />
                ))}
            </Slide>
        </div>
    );
};

export default SliderImages;