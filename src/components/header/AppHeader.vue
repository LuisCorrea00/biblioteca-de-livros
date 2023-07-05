<template>
    <v-app-bar color="secondary" app dense dark flat>
        <v-toolbar-title>Projeto - Curso Vue</v-toolbar-title>
        <v-spacer />
        <v-toolbar-items v-if="$store.state.logged">
            <v-btn text @click="goToBookList"> Livros </v-btn>
            <v-btn text @click="goToCollection"> Minha Coleção </v-btn>
            <v-btn text @click="logout"> Sair </v-btn>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
export default {
    name: 'AppHeader',
    methods: {
        goToBookList() {
            this.$router.push('/book');
        },
        goToCollection() {
            this.$router.push('/collection');
        },
        logout() {
            this.$store.commit('setAuthToken', '');
            this.$store.commit('setLogged', false);
            this.$router.push('/');
        },
    },
};
</script>
