import React from "react";

export default function Login() {
  return (
    <form className="bg-zinc-100 flex flex-col justify-center items-center gap-4 w-sm p-4 rounded-2xl shadow-xl">
      <header className="text-2xl">
        <h1>Login</h1>
      </header>
      <fieldset className="flex gap-4">
        <label htmlFor="username">Username</label>
        <input className="border rounded-xl" type="text" id="username" name="username" />
      </fieldset>
      <fieldset className="flex gap-4">
        <label htmlFor="password">Password</label>
        <input type="text" id="password" name="password" className="border rounded-xl" />
      </fieldset>
      <fieldset className="flex gap-4 items-center">
        <input type="checkbox" name="rememberMe" id="rememberMe" className="size-4" />
        <label htmlFor="rememberMe">Remember me</label>
      </fieldset>
      <footer>
        <button className="bg-black p-1 rounded text-white">Login</button>
      </footer>
    </form>
  );
}
