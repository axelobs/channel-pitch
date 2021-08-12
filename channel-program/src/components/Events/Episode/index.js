import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import styles from './episode.module.css';

function Episode() {
  return (
    <Col className="mt-3 mb-3">
      <Card style={{ width: '25rem', border: 'none' }}>
        <Card.Img variant="top" src="https://via.placeholder.com/450x250?text=300x250+MPU" />
        <Card.Body>
          <p><small>Category Name | 01/06/2021</small></p>
          <Card.Title>Lorem ipsum dolor sit amet, consectetur.</Card.Title>
          <Card.Text>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia in deserunt mollit anim id est sint laborum.
          </Card.Text>
          <Button variant="primary" className={styles.slideBtn}>Watch now</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Episode;