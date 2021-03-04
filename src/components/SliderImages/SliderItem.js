import React from 'react';

const SliderItem = ({ imagen, titulo, height}) => {

    return (
        <div className="each-slide">
            <div style={{'backgroundImage': `url(${imagen})`, height: height || '450px' }}>
              <span>Slide 3</span>
            </div>
        </div>
  );
};

export default SliderItem;