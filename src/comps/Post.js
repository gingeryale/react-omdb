import React from 'react'; 

class Post extends React.Component { 

    state = {
        username: ""
    } 


    render() {
        
        return (
            <div className="App">
             <h3>body: {this.props.ticket.body}</h3>
             <h4>title: {this.props.ticket.title}</h4>
             
             <h5>username:{this.state.username} </h5>
             <hr />
            </div>
        );
    }
    componentDidMount()
    {
                    debugger;

        console.log('second url');
        /* use with what you got! */
        fetch(`https://jsonplaceholder.typicode.com/users/${this.props.ticket.userId}`)
        .then(r=>r.json())
        .then(data=>
        {
                this.setState({ username: data.username  });
        });
    
    }
}
 
export default Post;
