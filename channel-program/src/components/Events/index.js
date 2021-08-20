import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Slider from '../common/Slider';
import Filters from './Filters';
import Episode from './Episode';

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
      <Container>
        <h2 className="pt-3 pb-3">Previous Events</h2>
      </Container>
      <Filters/>
      <Container>
        <Row className="mt-3 mb-4">
          <Episode/>
          <Episode/>
          <Episode/>
          <Episode/>
          <Episode/>
          <Episode/>
          <Episode/>
          <Episode/>
          <Episode/>
        </Row>
      </Container>
    </div>
  );
};

export default Events;