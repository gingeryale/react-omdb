import React from 'react';
import './App.css';
import Movie from './comps/Movie';
import Search from "./comps/Search";

class App extends React.Component {

    state = {
        movies: []
    } 

    render() {
        return (
            <div className="App">
            <Search download={this.downloadMovies.bind(this)}/>
                <h1>Movies</h1>
                {this.state.movies.map((m) => <Movie changeBindingFunc={this.changeMovieData.bind(this)} mov={m} key={m.imdbID}  />  )}
            </div>
        );
    }

    downloadMovies(searchWord){
        fetch(`http://www.omdbapi.com/?s=${searchWord}&apikey=58a8ecd0`)
        .then(r => r.json())
        .then(data => {
                this.setState({ movies: data.Search  });
        });
    }

changeMovieData(newMoveName, currentIdKey) {
    var oldArr = [...this.state.movies];
    var editedTitle = oldArr.find(el => el.imdbID === currentIdKey);
    editedTitle.Title = newMoveName;
    this.setState({ movies : oldArr})
}
}



export default App;
