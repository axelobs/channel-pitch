import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Slider from '../common/Slider';
import Filters from './Filters';
import Episode from './Episode';

function Events() {
  let eventDate = new Date()
  eventDate.setDate(eventDate.getDate() + 10)
  let eventDate2 = new Date()
  eventDate2.setTime(eventDate2.getTime() + 600000)

  const event = { name: 'Channel Program Event', date: eventDate, startTime: '16:00:00', id: '3asd43asd4' }

  let slides = [
    {url: 'https://sweetsoul.sirv.com/BairesDev/ChannelProgram/placeholderBG.jpg',
      imgAlt: 'First slide', title: 'Grow your channel',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      path: '/', buttonText: 'Subscribe Now', event: event
    },
  ]

  return (
    <div>
      <Header/>
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
      <Footer/>
    </div>
  );
};

export default Events;