import React, { Component } from 'react';
import NewPostAxiosInstance from './NewPostAxiosInstance';
import { Redirect } from 'react-router-dom';
import { useAlert } from 'react-alert';
import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        auther: '',
        id: null,
        isRedirect: false
    }

    componentDidMount() {
        console.log(this.props);
    }

    addPostHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            auther: this.state.auther
        }

        if (this.props.postDetails) {
            NewPostAxiosInstance.put('/posts/' + this.props.postDetails.id, data)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error);
            })
        } else {
            NewPostAxiosInstance.post('/posts', data)
            .then(response => {
                alert('Post has been created successfully!!!')
                this.props.history.push('/posts');
                // this.setState({isRedirect: true});
            })
            .catch(error => {
                console.log(error);
            })
        }
    }

    componentDidUpdate() {
        if (this.props.postDetails && this.props.postDetails.id !== this.state.id) {
            const postData = this.props.postDetails;
            this.setState({
                title: postData.title,
                content: postData.body,
                auther: postData.auther,
                id: postData.id
            })
        } else if (!this.props.postDetails && this.state.id) {
            this.setState({
                title: '',
                content: '',
                auther: '',
                id: null
            })
        }
    }

    render() {
        let titleCaption = 'Add';
        if (this.props.postDetails) {
            titleCaption = 'Update'
        }

        let redirect = null;
        if (this.state.isRedirect) {
            redirect = <Redirect to="/posts" />
        }

        return (
            <div className="new-post">
                {redirect}
                <h2>{titleCaption} a New Post</h2>
                <p>
                    <label>Title: </label>
                    <input type="text" value={this.state.title} onChange={(ev) => this.setState({title: ev.target.value})} />
                </p>
                <p>
                    <label>Content: </label>
                    <textarea value={this.state.content} onChange={(ev) => this.setState({content: ev.target.value})} />
                </p>
                <p>
                    <label>Auther: </label>
                    <select value={this.state.auther} onChange={(ev) => this.setState({auther: ev.target.value})}>
                        <option value="Hkn">Hrushikesh</option>
                        <option value="Kar">Kartik</option>
                    </select>
                </p>
                <button onClick={this.addPostHandler}>{titleCaption} Post</button>
            </div>
        )
    }
}

export default NewPost;