import { useState } from "react";

function Form() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    let { username, password } = form;

    login({ username, password });
  }
  function handleUsernameChange(event) {
    // immutable - value cannot be modified
    // mutable - value can be modified
    // form.username = event.target.value; ❌ mutation
    // setForm(form);❌
    // setForm({ ...form, username: event.target.value }); // ✅ immubtable object

    //💡 Note: we use immutable objects because object are compared using references
    // so we need to distinguish between existing state and updated state

    setForm((prev) => ({ ...prev, username: event.target.value })); // ✅ immubtable object
  }
  function handlePasswordChange(event) {
    // setForm({ ...form, password: event.target.value }); // ✅ immubtable object
    setForm((prevForm) => ({ ...prevForm, password: event.target.value })); // ✅ immubtable object
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
        <h1>State Object(Form)</h1>
      </header>
      <section>
        <label htmlFor="username">Username</label>

        <input type="text" name="username" id="username" value={form.username} onChange={handleUsernameChange} />
      </section>
      <section>
        <label htmlFor="password">Password</label>

        <input type="password" name="password" id="password" value={form.password} onChange={handlePasswordChange} />
      </section>
      <footer>
        <button type="submit">Login</button>
      </footer>
    </form>
  );
}

export default Form;
