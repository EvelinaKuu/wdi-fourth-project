import React from 'react';

const RegisterForm = ({ handleChange, handleSubmit, user }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <div className="label">First Name</div>
        <div className="control">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            onChange={handleChange}
            value={user.firstname}
            className="input"
          />
        </div>
      </div>


      <div className="field">
        <div className="label">Last Name</div>
        <div className="control">
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            onChange={handleChange}
            value={user.lastname}
            className="input"
          />
        </div>
      </div>


      <div className="field">
        <div className="label">Username</div>
        <div className="control">
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={user.username}
            className="input"
          />
        </div>
      </div>
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
      <div className="field">
        <div className="label">Password comfirmation</div>
        <div className="control">
          <input
            type="password"
            name="passwordConfirmation"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={user.passwordConfirmation}
            className="input"
          />
        </div>
      </div>
      <button className="button is-white">Register</button>
    </form>
  );
};

export default RegisterForm;
