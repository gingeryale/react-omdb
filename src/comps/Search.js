import React from 'react'; 

class Search extends React.Component { 


     render(){
        return(
            <div className="App">
                <input name="s" onChange={this.handleInput.bind(this)} />
                <button onClick={this.searchData.bind(this)} >GO</button>
            </div>
            )
    }
    handleInput(e){
        this.setState({ [e.target.name] : e.target.value })
    }
    searchData(){
        let searchWord = this.state.s;
        this.props.download(searchWord);
    }

}
 
export default Search;
