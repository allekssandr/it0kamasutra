import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {'API-KEY': 'a321971b-ce27-48fc-abc4-f85026133687'},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});

export const getUsers = (currentPage = 1, count = 10) => {
    return instance.get(`users?page=${currentPage}&count=${count}`)
        .then(response => response.data);
}

export const followUser = (userId) => {
    return instance.post(`follow/${userId}`)
        .then(response => response.data);
}

export const unfollowUser = (userId) => {
    return instance.delete(`follow/${userId}`)
        .then(response => response.data);
}

export const authMe = () => {
    return instance.get(`auth/me`)
        .then(response => response.data);
}

    export const getProfile = (userId) => {
    return instance.get(`profile/${userId}`)
        .then(response => response.data);
}

