import React from "react";
import Screenshots from "./Screenshots"
import { Container, Row, Col } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      gameClicked: [],
    };
  }
  
  removeGame = () => {
    this.setState({ gameClicked: [] });
  };

  render() {
    return (
        <Router>

      <Container fluid>
        <Row className="information">
          <Col>Name:{this.props.gameClicked.name}</Col>
          <Col>Rating:{this.props.gameClicked.rating}</Col>
          <Col>
            <button className="buttons" onClick={this.removeGame}>Remove Game</button>
          </Col>
          

          <Col><Link to={`/jeu/screenshots/${this.props.gameClicked.id}`}>More Images</Link>
</Col>
        </Row>
        <Row className="image">
          <Col>
            <img src={this.props.gameClicked.image} alt="" />
          </Col>
        </Row>
      </Container>
      <Switch>
      <Route path={`/jeu/screenshots/${this.props.gameClicked.id}`}>
      <Screenshots gameClicked={this.props.gameClicked}
/>
          </Route>
        </Switch>
      </Router>
      
    );
  }
  
}


export default Game;
