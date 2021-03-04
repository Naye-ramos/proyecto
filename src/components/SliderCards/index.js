import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import SlideItem from './SlideItem';

const SliderCards = ({ elementos, numberOfCards }) => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={numberOfCards}
        gutter={20}
        leftChevron={<IconButton><Icon>chevron_left</Icon></IconButton>}
        rightChevron={<IconButton><Icon>chevron_right</Icon></IconButton>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {elementos.map((item, index) =>{
        <SlideItem
        key={item.id || index}
        imagen={item.imagen}
        titulo={item.titulo}
        descripcion={item.descripcion}
        precio={item.precio}
        reating={item.reating}
        />
        })}
      </ItemsCarousel>
    </div>
  );
};

export default SliderCards;