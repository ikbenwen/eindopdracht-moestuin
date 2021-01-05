import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './App.css';

function App() {
  const { handleSubmit, register, errors } = useForm();

  function onFormSubmit(data) {
    data.preventDefault();
    console.log(data);
  }

  return (
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <fieldset>
          <legend>Gegevens</legend>
          <label htmlFor="details-name">
            username:
            <input
            type="text"
            name="username"
            id="details-name"
            ref={register({ required: true })}
            />
          </label>
          {errors.username && <p>Dit veld is verplicht</p>}

          <label htmlFor="details-email">
            email:
            <input
            type="text"
            name="email"
            id="details-email"
            ref={register({ required: true })}
            />
          </label>
          {errors.email && <p>Dit veld is verplicht</p>}

        </fieldset>
          <button type="submit" >submit</button>
      </form>
  )
}

export default App;
