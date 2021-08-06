import React from 'react';
import Slider from '../common/Slider';

function Home() {
  let slides = [
    {url: 'https://sweetsoul.sirv.com/BairesDev/ChannelProgram/placeholderBG.jpg', 
      imgAlt: 'First slide', title: 'Grow your channel', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      path: '/', buttonText: 'Subscribe Now'
    },
    {url: 'https://sweetsoul.sirv.com/BairesDev/ChannelProgram/placeholderBG.jpg', 
      imgAlt: 'Second Slide', title: 'Channel Program', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      path: '/', buttonText: 'Subscribe Now'
    },
  ]


  return (
    <div>
      <Slider slides={slides}/>
    </div>
  );
};

export default Home;