import React, { Component } from 'react';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import RecaptchaTest from '../../../components/Captcha/Recaptcha';
import axios from 'axios';
import { Route } from 'react-router-dom';

class Posts extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        selectedPostDetails: null
    }

    componentDidMount() {
        // Making a request call to remote api for getting all posts
        axios.get('/posts')
            .then(response => {
                // console.log(JSON.parse(response.data));
                const posts = response.data.slice(0, 5);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        auther: 'HK'
                    }
                })
                this.setState({
                    posts: updatedPosts
                })
            })
            .catch(err => {
                console.log("error", err);
            })
    }

    postClickHandler = (id) => {
        this.props.history.push('/posts/' + id);
    }

    selectedPostDetailsHandler = (ev, postDetails) => {
        this.setState({
            selectedPostDetails: postDetails
        })
    }

    onChangeCaptcha = (value) => {
        console.log("Captcha value:", value);
    }

    render() {
        const style =  {
            float: 'left'
        };

        let Posts = <p>Loading...</p>
        if (this.state.posts.length) {
            Posts = this.state.posts.map((post, index) => {
                return (
                // <Link to={'/' + post.id} key={post.id}>
                    <Post post={post} key={post.id}
                    click={() => this.postClickHandler(post.id)} 
                    />
                //  </Link>
                )
            });
        }

        return (
            <div>
                <div>
                <RecaptchaTest />
                </div>
                <div style={style}>
                    <section>
                        {Posts}
                    </section>
                </div>
                <div style={style}>
                    <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
                </div>
            </div>
        )
    }
}

export default Posts;