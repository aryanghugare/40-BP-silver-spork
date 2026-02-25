import { useState } from "react";

function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);

    login({ username, password });
  }
  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
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
        <h1>Controlled Form Example</h1>
      </header>
      <section>
        <label htmlFor="username">Username</label>

        <input type="text" name="username" id="username" value={username} onChange={handleUsernameChange} />
      </section>
      <section>
        <label htmlFor="password">Password</label>

        <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange} />
      </section>
      <footer>
        <button type="submit">Login</button>
      </footer>
    </form>
  );
}

export default Form;
