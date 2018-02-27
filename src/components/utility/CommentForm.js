import React from 'react';
// import Axios from 'axios';

class CommentForm extends React.Component {
    state = {
      comment: {}
    }

    handleChange = ({ target: content }) => {
      const comment = Object.assign({}, this.state.comment, { content });
      this.setState({ comment });
    }

    // componentDidMount() {
    //   Axios
    //     .get(`/api/items/${this.props.match.params.id}`)
    //     .then(res => this.setState({ comment: res.data }, () => console.log(this.state)))
    //     .catch(err => console.log(err));
    // }

    render() {
      return (
        <div>
          <textarea value={this.state.comment.content} onChange={this.handleChange}/>


          <button onClick={this.handleClick}></button>
        </div>
      );
    }
}

export default CommentForm;
