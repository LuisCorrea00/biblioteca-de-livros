<template>
    <div>
        <v-snackbar v-model="showMessage" :color="color" multi-line>
            {{ message }}
            <template v-slot:action="{ attrs }">
                <v-btn text v-bind="attrs" @click="showMessage = false">
                    Fechar
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>

<script>
export default {
    name: 'Feed-back',
    data() {
        return {
            message: '',
            color: '',
            showMessage: false,
        };
    },
    watch: {
        '$store.state.message.text': 'setMessage',
    },
    methods: {
        setMessage() {
            this.message = this.$store.state.message.text;
            this.color =
                this.$store.state.message.type === 'ERROR'
                    ? 'error'
                    : 'success';
            this.showMessage = true;
        },
    },
};
</script>
