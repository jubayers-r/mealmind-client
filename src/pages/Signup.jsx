import React from "react";

const Register = () => {
  return (
    <form>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Registration</legend>

        <label className="label">Name</label>
        <input name="name" type="text" className="input" placeholder="Name" />

        <label className="label">Photo URL</label>
        <input name="url" type="text" className="input" placeholder="Photo URL" />

        <label className="label">Email</label>
        <input name="email" type="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />

        <button className="btn btn-neutral mt-4">Login</button>
      </fieldset>
    </form>
  );
};

export default Register;
