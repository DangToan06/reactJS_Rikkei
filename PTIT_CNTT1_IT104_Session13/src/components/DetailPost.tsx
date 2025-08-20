import React, { Component } from "react";

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

type PropTypes = {
  post: Post;
};

export default class DetailPost extends Component<PropTypes> {
  render() {
    const { id, title, content, author } = this.props.post;

    return (
      <div style={{ marginBottom: "15px" }}>
        <p>
          <b>Id:</b> {id}
        </p>
        <p>
          <b>Title:</b> {title}
        </p>
        <p>
          <b>Content:</b> {content}
        </p>
        <p>
          <b>Author:</b> {author}
        </p>
        <hr />
      </div>
    );
  }
}
