import React from 'react';
import './App.css';
import Post from './comps/Post';

var apiKey = 58a8eclo
class App extends React.Component {
    state = {
        posts: []
    } 
    render() {
        console.log('render!!!!!!');
        return (
            <div className="App">
                <h1>Posts</h1>
                {
                    this.state.posts.map(m=> <Movie  ticket={m}   />  )
                }
            </div>
        );
    } 
    componentDidMount()
    {
        console.log('componentDidMount!!!!!!');
        fetch('http://www.omdbapi.com/?s=superman&apikey=58a8ecd0')
        .then(r=>r.json())
        .then(data=>
        {
                this.setState({ posts: data  });
        });
    }
}

export default App;
