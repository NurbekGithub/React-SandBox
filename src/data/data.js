import axios from 'axios';

const promise = axios.get('http://localhost:8080/wax/SandBox/getData?cnt=50');

export default promise;