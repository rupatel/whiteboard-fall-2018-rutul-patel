const URL = 'http://localhost:8080';

export default class UserService {

    static findAllUser() {

    }

    static login(username,password,role) {

        return fetch(
            URL + '/api/login',
            {
                method:"POST",
                headers:{
                    "Content-Type":'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    role:role
                })
            });

    }


    static logout(id, course) {

    }

    static findUserById(id) {

    }

    static register(user) {
        return fetch(
            URL + '/api/register',
            {
                method:"POST",
                headers:{
                    "Content-Type":'application/json'
                },
                body: JSON.stringify(user)
            });
    }

    static updateProfile(user){
        return fetch(URL + '/api/profile',
            {
                method:"PUT",
                headers:{
                    "Content-Type":'application/json'
                },
                body: JSON.stringify(user)
            });
    }
}