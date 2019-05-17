import React from 'react';
import './App.css';
import Movie from './comps/Movie';
import Search from "./comps/Search";

class App extends React.Component {

    state = {
        movies : []
    }

    render(){
        return(
            <div className="App">
                <Search download={this.downloadMovies.bind(this)}/>
                {this.state.movies.map(m => <Movie switchTitle={this.changeMovieTitle.bind(this)} mov={m} key={m.imdbID} />)}
            </div>
            )
    }

    downloadMovies(searchWord) {
        fetch(`http://www.omdbapi.com/?s=${searchWord}&apikey=b003b1e2`)
        .then(r=>r.json())
        .then(data => {
            this.setState({ movies : data.Search })
        })
    }
    changeMovieTitle(newName, movieID){
    let oldArr = [...this.state.movies];
    var locateMovieinArr = oldArr.find(el => el.imdbID === movieID);
    locateMovieinArr.Title = newName;
    this.setState({ movies : oldArr });
}

}



export default App;
