<template>
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div>
                <div class="text-center mt-5">
                    <h2>Login Form </h2>
                </div>
                <div class="mx-5">
                    <form @submit.prevent="handleSubmit">
                        <div class="form-group mb-3">
                            <input type="email" id="email" v-model="email" class="form-control" placeholder="Email"
                                required>
                        </div>
                        <div class="form-group mb-3">
                            <input type="password" id="password" v-model="password" class="form-control"
                                placeholder="Password" required>
                        </div>
                        <button type="submit" class="btn btn-primary rounded">Login</button>
                        <router-link class="nav-link blue-text" to="/register">Don't have an account?
                            Register</router-link>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { mapState } from 'vuex';

export default defineComponent({
    computed: {
        ...mapState('auth', {
            firstName: (state: any) => state.name
        })
    },
    name: 'LoginView',
    setup() {
        const email = ref('');
        const password = ref('');

        const handleSubmit = () => {
            console.log('Email:', email.value);
            console.log('Password:', password.value);
        };

        return {
            email,
            password,
            handleSubmit,
        };
    },
});
</script>

<style scoped>
.blue-text {
    color: cornflowerblue;
}
</style>