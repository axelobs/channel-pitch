import React, { useState } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import CPModal from '../common/CPModal';
import PitchesGrid from '../common/PitchesGrid';
import Slider from '../common/Slider';

function Home() {
  let eventDate = new Date()
  eventDate.setDate(eventDate.getDate() + 10)
  let eventDate2 = new Date()
  eventDate2.setTime(eventDate2.getTime() + 600000)

  const event = { name: 'Channel Program Event', date: eventDate, startTime: '16:00:00', id: '3asd43asd4' }
  const event2 = { name: 'Channel Program Event', date: eventDate2, startTime: '16:00:00', id: 'dqw755dqw4' }
  const [modalOpen, setModalOpen] = useState(false)

  let slides = [
    {url: 'https://sweetsoul.sirv.com/BairesDev/ChannelProgram/placeholderBG.jpg',
      imgAlt: 'First slide', title: 'Grow your channel',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      path: '/', buttonText: 'Subscribe Now', event: event2
    },
    {url: 'https://sweetsoul.sirv.com/BairesDev/ChannelProgram/placeholderBG.jpg',
      imgAlt: 'Second Slide', title: 'Channel Program',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      path: '/', buttonText: 'Subscribe Now', event
    },
  ]

  let pitches = [
    {url: './Media/video_placeholder.mp4', title: 'Lorem Ipsum Dolor',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      btnTxt: 'View more', btnUrl: '/'
    },
    {url: './Media/video_placeholder.mp4', title: 'Dolor Sit Amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      btnTxt: 'View more', btnUrl: '/'
    },
    {url: './Media/video_placeholder.mp4', title: 'Consectetur Adipiscing Elit',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      btnTxt: 'View more', btnUrl: '/'
    },
    {url: './Media/video_placeholder.mp4', title: 'Sed Do Eiusmod Tempor',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      btnTxt: 'View more', btnUrl: '/'
    },
  ]
  

  return (
    <div>
      <Header/>
      <Slider slides={slides}/>
      <PitchesGrid pitches={pitches} />
      <CPModal type='subscribe' event={event} modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Footer/>
    </div>
  );
};

export default Home;