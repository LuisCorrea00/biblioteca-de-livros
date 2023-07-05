<template>
    <v-container fluid>
        <v-row justify="center">
            <v-col cols="12" md="4" lg="3" class="text-center">
                <h6 class="display-1 text-uppercase">Login</h6>
                <v-text-field v-model="token" label="Token"> </v-text-field>
                <v-btn
                    depressed
                    color="primary"
                    dark
                    block
                    class="mb-2"
                    @click="login"
                >
                    login
                </v-btn>
                <v-btn text color="secondary" @click="loginAsGuest">
                    entrar como visitante
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'LoginPage',
    data() {
        return {
            token: 'AIzaSyDse61i5-N8yS_SDEOG1_r0EPGpp5D6dzY',
        };
    },
    methods: {
        login() {
            if (this.token) {
                this.$store.commit('setAuthToken', this.token);
                this.$store.commit('setLogged', true);
                this.$router.push('/book');
            } else {
                this.$store.commit(
                    'showErrorMessage',
                    'Você deve informar um token'
                );
            }
        },
        loginAsGuest() {
            this.$store.commit('setLogged', true);
            this.$router.push('/book');
        },
    },
};
</script>
