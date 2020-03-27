import React from "react";
import "./App.css";
import GameList from "./components/GameList";
import Game from "./components/Game";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      gameClicked:[],
    };
  }

  getGameClick = state => {
    this.setState({
      gameClicked: state
    });
  };

  render() {
    return (
      <div className="App">
        <GameList items={this.state.items}
          getGameClick={this.getGameClick}
        />
        <Game gameClicked={this.state.gameClicked} />
      </div>
    );
  }
}

export default App;
