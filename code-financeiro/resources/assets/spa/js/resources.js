export class Jwt {
    static accessToken(email, password){
        Vue.http.post('access_token', {
            email: email,
            password: password
        })

    }
}