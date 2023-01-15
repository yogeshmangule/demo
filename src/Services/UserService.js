import WebUrls from "./WebUrls";

class UserService {
    loginUser = (data) => {
        return fetch(WebUrls.USER_LOGIN, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(data)
        })
    }
}

export default new UserService()