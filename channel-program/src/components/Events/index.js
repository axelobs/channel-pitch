import React from 'react';
import Slider from '../common/Slider';

function Events() {
  let slides = [
    {url: 'https://sweetsoul.sirv.com/BairesDev/ChannelProgram/placeholderBG.jpg',
      imgAlt: '01/06/2021', title: 'Featured Event',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      path: '/', buttonText: 'Subscribe Now'
    }
  ]

  return (
    <div>
      <Slider slides={slides}/>
    </div>
  );
};

export default Events;