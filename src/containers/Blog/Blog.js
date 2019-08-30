import React, { Component } from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css'

/* 
** Route: To implement routing, we need to configure our routs, using <Route> component from react-router-dom library

** Link: Used to define our url links for navigating to respective page/ component 

** NavLink: Used for styling the activates link
*/
class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        selectedPostDetails: null,
        auth: true
    }

    render() {
        const newPostLinkconfig = {
            pathname: '/new-post',
            hash: '#submit',
            search: '?quicksubmit=true'
        }

        return (
            <React.Fragment>
            <div>
                <div className="Blog">
                    <header>
                        <nav>
                            <ul>
                                <li><Link to="/" exact>Home</Link></li>
                                <li><NavLink to="/posts" activeClassName="my-home-active" activeStyle={{ color: 'red'}} >Posts</NavLink></li>
                                <li><NavLink to={newPostLinkconfig}>New Post</NavLink></li>
                            </ul>
                        </nav>
                    </header>
                    <Route path="/" exact render={() => <h1>Home Page</h1>} />
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/posts" component={Posts} />
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default Blog;