import React from 'react';
import PropTypes from  'prop-types'
import {connect} from "react-redux";
import {fetchPosts} from "../../../store/action/postAction";
class Demo extends React.Component {
    static propTypes ={
        fetchPosts:PropTypes.func.isRequired,
        posts: PropTypes.array.isRequired
    };
    // constructor(props) {
    //     super(props);
    //     this.state ={posts:[]};
    // }

    componentDidMount() {
        this.props.fetchPosts();
        // fetch("https://jsonplaceholder.typicode.com/posts")
        //     .then(res => res.json())
        //         .then(data=>this.setState({
        //             posts:data
        //         }));
    }

    render() {
        const  postsItem = this.props.posts.map(post =>(
            <li key={post.id}><h3>{post.title}</h3><p>{post.body}</p></li>
        ));
        return (

            <div style={{backgroundColor:"orange",padding:"15px"}}>
                <h3>This is demo component</h3>
                <p>{this.props.tips}</p>
                <ul>{postsItem}</ul>
            </div>

        );
    }


}



const mapStateToProps = state => ({
    posts: state.posts.items
});

export  default  connect(mapStateToProps, {fetchPosts})(Demo);
