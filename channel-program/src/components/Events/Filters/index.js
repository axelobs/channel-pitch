import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './filter.module.css';

function Filters() {
  return (
    <>
      <Container fluid className='bg-light m-0 p-0 p-4'>
        <Container>
          <Form>
            <Row className="p-0 m-0">
              <Col>
                <Form.Control className={styles.input} placeholder="Search pitch" />
              </Col>
              <Col>
                <Form.Select className={styles.inputSelect} id="inlineFormCustomSelect">
                  <option value="0">Category</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Select className={styles.inputSelect} id="inlineFormCustomSelect">
                  <option value="0">Category</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Select className={styles.inputSelect} id="inlineFormCustomSelect">
                  <option value="0">Category</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
            </Row>
          </Form>
        </Container>
      </Container>
      <Container fluid className='p-5'>
        <Container>
          <h5>Active Filters:</h5>
        </Container>
      </Container>
      <hr className="mt-0"/>
    </>
  );
};

export default Filters;