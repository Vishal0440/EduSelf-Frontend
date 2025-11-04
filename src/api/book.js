import axios from "axios";

const BASE =
  process.env.REACT_APP_API_URL || "https://eduself-backend.onrender.com";

export const getAllBook = () =>
  axios.get(`${BASE}/book`).then((res) => res.data);

export const getBook = (id) =>
  axios.get(`${BASE}/book/${id}`).then((res) => res.data);

export const createBook = (book) =>
  axios.post(`${BASE}/book`, book).then((res) => res.data);

export const updateBook = (id, book) =>
  axios.put(`${BASE}/book/${id}`, book).then((res) => res.data);

export const deleteBook = (id) =>
  axios.delete(`${BASE}/book/${id}`).then((res) => res.data);
