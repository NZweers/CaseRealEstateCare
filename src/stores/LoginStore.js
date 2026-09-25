import { defineStore } from "pinia";
import { ref } from "vue";

export const loginStore = defineStore('login', {
    state: () => ({
        username: "",
        userKey: "",
    }),
    getters: {
        loggedIn() {
            return !!this.username;
        },
        isAuthenticated() {
            return !!this.userKey;
        }
    },
    actions: {
        login(username, password) {
            this.username = username;
            localStorage.setItem("userName", username);
        },
        verify(userKey) {
            this.userKey = userKey;
            localStorage.setItem("userKey", userKey)
        },
        init() {
            if (localStorage.getItem("userName")) {
                this.username = localStorage.getItem("userName");
            }
            if (localStorage.getItem("userKey")) {
                this.userKey = localStorage.getItem("userKey");
            }
        }
    }
});