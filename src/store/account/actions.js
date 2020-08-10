import router from '../../router'
import Axios from 'axios';

export function login({ commit }) {
    let url = 'https://randomuser.me/api/';
    Axios.get(url).then(function (response) {
        let userData = {
            displayName: response.data.results[0].name.first,
            email: response.data.results[0].email,
            photoURL: response.data.results[0].picture.thumbnail,
            uid: response.data.results[0].login.uuid
        }

        commit("setUserData", userData)
        router.push('/')
    })
        .catch(function (error) {
            console.log(error)
        });
}
