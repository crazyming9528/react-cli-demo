import React from 'react';
import Demo2 from "./demo2";
export default class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state ={posts:[]};
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
                .then(data=>this.setState({
                    posts:data
                }));
    }

    render() {
        const  postsItem = this.state.posts.map(post =>(
            <li key={post.id}><h3>{post.title}</h3><p>{post.body}</p></li>
        ));
        return (
            <div style={{backgroundColor:"orange",padding:"15px"}}>
                <h3>This is demo component</h3>
                <p>{this.props.tips}</p>
                <Demo2 tips={this.props.tips}/>
                <ul>{postsItem}</ul>
            </div>
        );
    }


}
