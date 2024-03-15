/* eslint-disable no-useless-catch */
// api.js

const BASE_URL = 'https://bc5f-187-190-205-111.ngrok-free.app/api/v1';

async function login(email, password) {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    console.log(data, "USER");
    return data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
}

async function register(userData) {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
}

async function getInstructors() {
  try {
    const response = await fetch(`${BASE_URL}/instructors`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "ngrok-skip-browser-warning":"any"
      }
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching instructors:', error);
    throw error;
  }
}

async function getCourses() {
  try {
    const response = await fetch(`${BASE_URL}/courses`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "ngrok-skip-browser-warning":"any"
      }
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
}

async function getWebinars() {
  try {
    const response = await fetch(`${BASE_URL}/webinars`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "ngrok-skip-browser-warning":"any"
      }
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching webinars:', error);
    throw error;
  }
}

export { login, register, getInstructors, getCourses, getWebinars };
