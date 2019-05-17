import React from 'react'; 

class Movie extends React.Component { 

    state={
        mt: this.props.mov.Title
    }
    componentDidMount(){
        this.setState({ mt : this.props.mov.Title })
    }
    componentWillReceiveProps(){
        this.setState({ mt : this.props.mov.Title })
    }

     render(){
        return(
            <div className="App">
            <h1><input name="mt" onChange={this.handleNEWTitle.bind(this)} value={this.state.mt} /></h1>
            <img src={this.props.mov.Poster} />
             <h2>{this.props.mov.Year}</h2>
            </div>
            )
    }

    handleNEWTitle(e){
        let newName = e.target.value;
        let movieID = this.props.mov.imdbID;
        this.props.switchTitle(newName, movieID);
    }
    
}
 
export default Movie;
