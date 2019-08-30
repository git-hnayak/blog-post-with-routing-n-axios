import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {

    state = {
        selectedPost: null
    }

    componentDidMount() {
        // console.log(this.props);
        this.loadData();
        
    }

    componentDidUpdate() {
        this.loadData();
    }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.match.params.id)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    loadData() {
        const idParam = this.props.match.params.id;
        if ((idParam && !this.state.selectedPost) || this.state.selectedPost && this.state.selectedPost.id != idParam) {
                axios.get('/posts/' + idParam)
                .then(response => {
                    this.setState({
                        selectedPost: response.data
                    })
                })
        }
    }

    render() {
        const postIdParam = this.props.match.params.id;
        let fullPost = <p>Please select a Post...</p>
        if ((postIdParam && !this.state.selectedPost) || this.state.selectedPost && this.state.selectedPost.id != postIdParam) {
            fullPost= <p>Loading data...</p>
        } else if (postIdParam && this.state.selectedPost) {
            fullPost = (
                <div>
                    <p>Id: {this.state.selectedPost.id}</p>
                    <p>Title: {this.state.selectedPost.title}</p>
                    <p>Body: {this.state.selectedPost.body}</p>
                    <button onClick={this.deletePostHandler}>Delete</button>
                    <button onClick={(event) => this.props.updateClick(event, this.state.selectedPost)}>Update</button>
                </div>
            )
        }
        return (
            <div className="full-post">
                {fullPost}
            </div>
        )
    }
}

export default FullPost;