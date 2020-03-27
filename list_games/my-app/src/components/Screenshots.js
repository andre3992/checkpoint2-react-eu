import React from "react";

class Screenshoots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameClicked: []
    };
  }
  render() {
    return (<div><img src = { this.props.gameClicked.screenshots[1].image }
    alt = "" /> ;
    <img src = { this.props.gameClicked.screenshots[2].image }
    alt = "" /> ;
    <img src = { this.props.gameClicked.screenshots[3].image }
    alt = "" /> ;
    <img src = { this.props.gameClicked.screenshots[4].image }
    alt = "" /> ;
    <img src = { this.props.gameClicked.screenshots[5].image }
    alt = "" /> ;
        </div>

    )
  }
  
}

export default Screenshoots;


