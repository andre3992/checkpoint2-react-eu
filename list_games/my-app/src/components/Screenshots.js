import React from "react";
import {
  Link
} from "react-router-dom";
import { Carousel } from "react-bootstrap";

class Screenshoots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameClicked: []
    };
  }

  render() {
    return (
      <>
      <button><Link to="/">Get Back</Link>
      </button>
      <Carousel className="carousel">
        {this.props.location.state.gameClicked.screenshots ? (
          this.props.location.state.gameClicked.screenshots.map(
            (img, index) => (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={`${img.image}`}
                  alt="First slide"
                  key={index}
                />
              </Carousel.Item>
            )
          )
        ) : (
          <h2>Loading</h2>
        )}
      </Carousel>
      </>
    );
  }
}
export default Screenshoots;
