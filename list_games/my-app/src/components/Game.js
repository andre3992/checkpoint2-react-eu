import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Link
} from "react-router-dom";
class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      gameClicked: [],
    };
  }
  render() {
    return (
<div>
      <Container fluid>
        <Row className="information">
          <Col>Name:{this.props.gameClicked.name}</Col>
          <Col>Rating:{this.props.gameClicked.rating}</Col>
          <Col>
            <button className="buttons" onClick={this.props.removeGame}>Remove Game</button>
            <button className= "screenshoots">
          <Link
            to={{
              pathname: `/screenshots/${this.props.gameClicked.id}`,
              state: {gameClicked:this.props.gameClicked}
            }}
          >
            ScreenShots
          </Link>
        </button>
          </Col>
        </Row>
        <Row className="image">
          <Col>
            <img src={this.props.gameClicked.image} alt="" />
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
  
}


export default Game;
