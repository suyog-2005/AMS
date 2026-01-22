import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const login = (data) => API.post('/auth/login', data);
export const markAttendance = (subjectId, studentId) =>
  API.post('/attendance', { subjectId, studentId });