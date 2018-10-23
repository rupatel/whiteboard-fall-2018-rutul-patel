const URL = 'http://localhost:8080';

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
}