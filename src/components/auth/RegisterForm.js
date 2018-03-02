import React from 'react';

const RegisterForm = ({ handleChange, handleSubmit, user, errors}) => {

  const formIsInvalid = Object.keys(errors).some(key => errors[key]);

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
          {errors.firstname && <small>{errors.firstname}</small>}
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
          {errors.lastname && <small>{errors.lastname}</small>}
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
          {errors.username && <small>{errors.username}</small>}
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
          {errors.email && <small>{errors.email}</small>}
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
          {errors.password && <small>{errors.password}</small>}
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
          {errors.passwordConfirmation &&  <small>{errors.passwordConfirmation}</small>}
        </div>
      </div>
      <button className="button is-white" disabled={formIsInvalid}>Register</button>
    </form>
  );
};

export default RegisterForm;
