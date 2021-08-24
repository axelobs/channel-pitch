import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
  Link
} from "react-router-dom";

export default function Splash() {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let countDownDate = new Date("Sep 17, 2021 09:00:00").getTime();

  let x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);

  return(
    <Container
      fluid={true}
      className="vh-100 d-flex justify-content-center align-items-center text-center"
      style={{
        'background': 'url(https://images.pexels.com/photos/358558/pexels-photo-358558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940) no-repeat center center fixed',
        'backgroundSize': 'cover'
      }}
    >
      <Row>
        <Col>
          <h2
            style={{
              'fontSize':'3rem',
              'fontWeight':'bold',
              'color':'#f3f3f3',
              'textShadow':'1px 1px 10px black'
            }}
          ><Link to="/home" style={{'color':'#fff'}}>CHANNEL PROGRAM</Link></h2>
          <h1
            style={{
              'fontSize':'5rem',
              'fontWeight':'light',
              'color':'#fff',
              'textShadow':'1px 1px 10px black'
            }}
          >WE ARE COMING SOON</h1>
          <h2
            style={{
              'fontSize':'3rem',
              'fontWeight':'bold',
              'color':'#f3f3f3',
              'textShadow':'1px 1px 10px black'
            }}
          >{days} Days | {hours} Hours | {minutes} Minutes | {seconds} Seconds</h2>
        </Col>
      </Row>
    </Container>
  )
};