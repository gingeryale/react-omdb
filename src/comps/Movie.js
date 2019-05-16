import React from 'react'; 

class Movie extends React.Component { 

    state = {
        movieTitle: ""
    } 

    componentDidMount(){
        this.setState({ movieTitle: this.props.mov.Title })
    }

    componentWillReceiveProps() {
        this.setState( { movieTitle: this.props.mov.Title })
    }
    render() {
        return (
            <div className="App">
             <h1><input onChange={this.handleText.bind(this)} value={this.state.movieTitle} /> </h1>
             <img src={this.props.mov.Poster} />
             <h4>year: {this.props.mov.Year}</h4>
             <hr />
            </div>
        );
    }

    handleText(e){
        var newMoveName = e.target.value;
        var currentIdKey = this.props.mov.imdbID;
        //this.setState({ [e.target.name] : e.target.value});
        this.props.changeBindingFunc(newMoveName, currentIdKey);
    }
    
}
 
export default Movie;
