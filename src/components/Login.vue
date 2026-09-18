<script setup lang="js">
import { useRouter } from 'vue-router';
import { loginStore } from '@/stores/LoginStore';
import { ref } from 'vue';


const router = useRouter()
const myLoginStore = loginStore();

if (myLoginStore.isAuthenticated){
    router.replace({name: "home"})
}

const username = ref("");
const password = ref("");
const verifyCode = ref("");

function login(){
    myLoginStore.login(username, password);
}

function verify(){
    myLoginStore.verify(verifyCode);
    console.log("verify", verifyCode);
    router.replace({name: "home"});
}
</script>
<template>
    <v-card v-if="!loginStore().loggedIn && !loginStore().isAuthenticated">
        <v-card-title>Login</v-card-title>
        <v-card-subtitle>Login for Real Estate Care</v-card-subtitle>
        <v-card-text>
            <v-form ref="v-form " @submit.prevent="login()">
                <v-text-field v-model="username" name="username" label="Username" type="text" placeholder="username"
                required></v-text-field>
                <v-text-field v-model="password" name="password" label="Password" type="password" placeholder="password"
                required></v-text-field>
                <v-btn type="submit" class="mt-4" color="primary" value="log in">Login</v-btn>
            </v-form>
        </v-card-text>
    </v-card>

    <v-card v-if="loginStore().loggedIn && !loginStore().isAuthenticated">
        <v-card-title>Two-factor Authentication</v-card-title>
        <v-card-text>
            <v-form ref="v-form " @submit.prevent="verify()">
            <p>Open your authentication app and enter the code for Real Estate Care</p>
            <v-text-field v-model="verifyCode" name="verifyCode" label="Verify code" type="text" placeholder="Enter 6 digits code"
            required></v-text-field>
            <v-btn type="submit" class="mt-4" color="primary" value="verify">Verify</v-btn>
            </v-form>    
        </v-card-text>
    </v-card>
</template>