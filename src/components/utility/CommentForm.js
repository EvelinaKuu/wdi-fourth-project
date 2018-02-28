import React from 'react';

const CommentForm = ({newComment, handleChange, handleSubmit}) => {
  return (
    <div>
      <label>Add comment</label>
      <form>
        <textarea value={newComment.content} name="content" onChange={handleChange}/>
        <button className="button is-white" onClick={handleSubmit}>Comment</button>

      </form>

    </div>
  );
};

export default CommentForm;
