import axios from "axios";

export class UserService{
    static users = [];
    // API_URL = `https://jsonplaceholder.typicode.com`;

    static getAllUsers(){
        // let dataURL = `${API_URL}/users`;
        let dataURL = `https://jsonplaceholder.typicode.com/users`;
        return axios.get(dataURL);
    }
}