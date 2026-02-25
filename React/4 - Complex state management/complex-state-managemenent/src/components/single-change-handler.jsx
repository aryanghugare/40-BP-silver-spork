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

  //   form = { username :"gaurav", password:"xyz"}
  // {username: 'gaurav', password: 'xyz'}
  // form.username
  // 'gaurav'
  // form['username']
  // 'gaurav'
  // form['password']
  // 'xyz'
  // form.password
  // 'xyz'
  // let dynamicProp = 'username'
  // undefined
  // form.dynamicProp
  // undefined
  // form[dynamicProp]
  // 'gaurav'
  // dynamicProp = 'password'
  // 'password'
  // form[dynamicProp]
  // 'xyz'

  function handleChange(event) {
    console.log({ target: event.target });
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
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
        <h1>State Object - Single Change Handler(Form)</h1>
      </header>
      <section>
        <label htmlFor="username">Username</label>

        <input type="text" name="username" id="username" value={form.username} onChange={handleChange} />
      </section>
      <section>
        <label htmlFor="password">Password</label>

        <input type="password" name="password" id="password" value={form.password} onChange={handleChange} />
      </section>
      <footer>
        <button type="submit">Login</button>
      </footer>
    </form>
  );
}

export default Form;
