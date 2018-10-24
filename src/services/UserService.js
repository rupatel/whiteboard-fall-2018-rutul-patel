const URL = 'https://cs5610-fall-2018-java-server.herokuapp.com';

export default class UserService {


    static login(username, password, role) {
        return fetch(
            URL + '/api/login',
            {
                method: "POST",
                credentials: 'include',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    role: role
                })
            });
    }


    static logout() {
        return fetch(
            URL + '/api/logout',
            {
                method: "POST",
                credentials: 'include',
                headers: {
                    "Content-Type": 'application/json'
                }
            });
    }

    static register(user) {
        return fetch(
            URL + '/api/register',
            {
                credentials: 'include',
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(user)
            });
    }

    static updateProfile(user) {
        return fetch(URL + '/api/profile',
            {
                credentials: 'include',
                method: "PUT",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(user)
            });
    }

    static getProfile() {
        return fetch(URL + '/api/profile',
            {
                credentials: 'include',
                method: "GET",
                headers: {
                    "Content-Type": 'application/json'
                }
            });
    }
}