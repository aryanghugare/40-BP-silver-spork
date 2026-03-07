import React from "react";

function Form() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    const formData = new FormData(event.target);
    const username = formData.get("username");
    const password = formData.get("password");
    login({ username, password });
  }
  function login({ username, password }) {
    console.log("trying to login user....");
    setTimeout(() => {
      console.log("user logged in with username:", username);
    }, 1000);
  }
  return (
    <form onSubmit={handleSubmit}>
      <header>
        <h1>Uncontrolled Form Example</h1>
      </header>
      <section>
        <label htmlFor="username">Username</label>
        {/* uncontrolled input */}
        <input type="text" name="username" id="username" />
      </section>
      <section>
        <label htmlFor="password">Password</label>
        {/* uncontrolled input */}
        <input type="password" name="password" id="password" />
      </section>
      <footer>
        <button type="submit">Login</button>
      </footer>
    </form>
  );
}

export default Form;
