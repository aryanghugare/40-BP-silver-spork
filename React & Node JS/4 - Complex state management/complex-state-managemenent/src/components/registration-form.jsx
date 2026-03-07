import { useState } from "react";

function RegistrationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    address: {
      street: "",
      city: "",
      state: "",
      pincode: "",
    },
  });

  function handleChange(event) {
    setForm((prevVal) => ({ ...prevVal, [event.target.name]: event.target.value }));
  }

  function handleAddressChange(event) {
    setForm((prevVal) => ({ ...prevVal, address: { ...prevVal.address, [event.target.name]: event.target.value } }));
  }

  function register(event) {
    event.preventDefault();
    console.log(form);
  }

  return (
    <form onSubmit={register}>
      <header>
        <h1>Registration Form</h1>
      </header>
      <fieldset>
        <label htmlFor="name">Name</label>
        <input autoComplete="false" type="text" name="name" id="name" value={form.name} onChange={handleChange} />
      </fieldset>
      <fieldset>
        <label htmlFor="email">Email</label>
        <input autoComplete="false" type="email" name="email" id="email" value={form.email} onChange={handleChange} />
      </fieldset>
      <fieldset>
        <label htmlFor="password">Password</label>
        <input
          autoComplete="false"
          type="password"
          name="password"
          id="password"
          value={form.password}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="street">Street</label>
        <input
          autoComplete="false"
          type="text"
          name="street"
          id="street"
          value={form.address.street}
          onChange={handleAddressChange}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="city">City</label>
        <input
          autoComplete="false"
          type="text"
          name="city"
          id="city"
          value={form.address.city}
          onChange={handleAddressChange}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="state">State</label>
        <input
          autoComplete="false"
          type="text"
          name="state"
          id="state"
          value={form.address.state}
          onChange={handleAddressChange}
        />
      </fieldset>
      <footer>
        <button type="submit">Register</button>
      </footer>
    </form>
  );
}

export default RegistrationForm;
