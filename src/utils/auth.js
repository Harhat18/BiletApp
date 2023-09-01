import axios from 'axios';
import {AUTH_API_KEY} from '@env';

// const API_KEY = 'AIzaSyAjrpLFvXy8aYSaZLh3_8VQxKu4CIvfQwU';

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${AUTH_API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  console.log(response.data);
}

export async function createUser(email, password) {
  await authenticate('signUp', email, password);
}

export async function login(email, password) {
  await authenticate('signInWithPassword', email, password);
}
