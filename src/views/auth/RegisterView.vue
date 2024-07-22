<template>
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div>
                <div class="text-center mt-5">
                    <h2>Register Form</h2>
                </div>
                <div class="mx-5">
                    <form @submit.prevent="onSignup">
                        <div class="form-group mb-3">
                            <input type="email" id="email" v-model="email" class="form-control" placeholder="Email"
                                required>
                        </div>
                        <div class="form-group mb-3">
                            <input type="password" id="password" v-model="password" class="form-control"
                                placeholder="Password" required>
                        </div>
                        <button type="submit" class="btn btn-primary rounded">Register</button>
                        <router-link class="nav-link blue-text" to="/login">Go to Login Page</router-link>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { SIGNUP_ACTION } from '@/stores/storeConstants';
import { defineComponent, ref } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
    data() {
        return {
            email: '',
            password: '',
            errors: '',
        }
    },
    methods: {
        ...mapActions('auth', {
            signup: SIGNUP_ACTION
        }),
        onSignup() {
            this.signup({ email: this.email, password: this.password })
        }
    }
});
</script>

<style scoped>
.blue-text {
    color: cornflowerblue;
}
</style>