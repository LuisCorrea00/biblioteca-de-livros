<template>
<div>

</div>
</template>

<script>
import axios from "axios";

export default {
    name: "BookEntryPage",
    created() {
        axios
            .get(`https://www.googleapis.com/books/v1/volumes/${this.$route.params.id}`)
            .then((response)=>{
            console.log(response.data);
        })
    }
}
</script>

<style scoped>

</style>