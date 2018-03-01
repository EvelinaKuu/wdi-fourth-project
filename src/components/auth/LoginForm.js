import React from 'react';

const LoginForm = ({ handleChange, handleSubmit, user }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <div className="label">Email</div>
        <div className="control">
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={user.email}
            className="input"
          />
        </div>
      </div>

      <div className="field">
        <div className="label">Password</div>
        <div className="control">
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={user.password}
            className="input"
          />
        </div>
      </div>
      <button className="button is-white">Login</button>
    </form>
  );
};

export default LoginForm;
