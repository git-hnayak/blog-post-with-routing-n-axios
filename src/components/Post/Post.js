import React from 'react';
import { withRouter } from 'react-router-dom';
import { useAlert } from "react-alert";
import './Post.css';

const Post = props => {
    const alert = useAlert();
    // console.log(props);
    return (
        <div className="posts" onClick={props.click}>
            <p>Title: {props.post.title}</p>
            <p>Author: {props.post.auther}</p>
            <button style={{cursor: 'pointer'}}
        onClick={() => {
          alert.show("Showing Details!");
        }}
      >
        Show Details
      </button>
        </div>
        
    )
}

export default withRouter(Post);