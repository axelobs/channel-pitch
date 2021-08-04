import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import './App.css';

axios.defaults.xsrfCookieName = 'CSRF-TOKEN';
axios.defaults.xsrfHeaderName = 'X-CSRF-Token';

function App() {
  const { register, handleSubmit, errors, formState } = useForm();

  async function onSubmit(data) {
    try {
      const response = await axios.post('/api/books', data);
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  }

  async function fetchData() {
    try {
      const result = await axios.get('/api/books');
      console.log(result.data);
    } catch (error) {
      console.error(error);
    }
  }

  fetchData();

  return (
    <div>
      <h1>Save a new book</h1>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="title"
            autoComplete="off"
            {...register("title", {
              required: "Required",
            })}
          />

          <input
            name="subtitle"
            autoComplete="off"
            {...register("subtitle", {
              required: "Required",
            })}
          />

          <button type="submit" disabled={formState.isSubmitting}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;