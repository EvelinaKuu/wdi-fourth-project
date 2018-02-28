import React from 'react';

const CommentForm = ({newComment, handleChange, handleSubmit}) => {
  return (
    <div>
      <label className="label">Add comment</label>
      <form>
        <textarea value={newComment.content} name="content" className="textarea" onChange={handleChange}/>
        <button className="button is-white" onClick={handleSubmit}>Comment</button>

      </form>

    </div>
  );
};

export default CommentForm;
