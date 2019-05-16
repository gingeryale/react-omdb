import React from 'react'; 

class Search extends React.Component { 


    render() {
        
        return (
            <div className="App">
            <input name="s" onChange={this.handleInput.bind(this)} />
            <button onClick={this.searchMovie.bind(this)}>go</button>
             <hr />
            </div>
        );
    }

    handleInput(e){
        this.setState({[e.target.name] : e.target.value});
    }

    searchMovie(){
        var searchWord=this.state.s;
        this.props.download(searchWord);
    }
    
}
 
export default Search;
