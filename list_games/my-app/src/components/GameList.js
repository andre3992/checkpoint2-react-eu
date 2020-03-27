import React from "react";
import "../App.css";

class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      game: [],
      biggerRating: false
    };
  }

  getGames = () => {
    return fetch("https://wild-games.herokuapp.com/api/v1")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  };

  componentDidMount() {
    this.getGames();
  }

  gameClicked = (name, image, rating , screenshots, id) => {
    this.setState(
      { game: { name: name, image: image, rating: rating, screenshots:screenshots,id:id } },
      () => {
        this.props.getGameClick(this.state.game);
      }
    );
  };

  showBestGames = () =>{
    if(this.state.biggerRating===false){
    this.setState({
      biggerRating:true
    })
  } else this.setState({
    biggerRating:false 
  })

  }
 

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h1>Choose a game to see more information</h1>
          <div>
          {items
            .filter(game=>
            this.state.biggerRating ? game.rating>4.5 : game.rating >0)
            .map(item => (
              <button
                className="buttons"
                onClick={() =>
                  this.gameClicked(
                    item.name,
                    item.background_image,
                    item.rating,
                    item.short_screenshots,
                    item.id
                  )
                }
              >
                {item.name}
              </button>
            ))}
            <button onClick={this.showBestGames}>Best Games</button>
          </div>
        </div>
      );
    }
  }
}

export default GameList;
