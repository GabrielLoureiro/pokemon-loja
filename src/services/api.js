import axios from 'axios';

const api = axios.create({ baseURL: 'https://pokeapi.co/api/v2/pokemon?offset=300&limit=100' });

export default api;