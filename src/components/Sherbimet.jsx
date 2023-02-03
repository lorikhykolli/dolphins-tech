import React from "react"; 
import "./Sherbimet.css";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import fotosherbim1 from "../images/logo.png";
import Button from 'react-bootstrap/Button';


function Sherbimet() {
    return ( <div>
    <section id="sherbimet1">
    <h1>Shërbime teknologjike që premtojnë suksesin tuaj.</h1>
      <Row xs={1} md={3} className="g-4">
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={fotosherbim1} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Button variant="info">Shiko Shembuj</Button>{' '}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </section>
      </div>
    );
  }

export default Sherbimet;