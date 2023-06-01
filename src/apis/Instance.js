import axios from 'axios';

const Instance = axios.create({
    baseURL: "https://pdcesx04069.exnet.sas.com",
    //baseURL: "http://10.96.12.143",
    headers:{}
});

export default Instance;