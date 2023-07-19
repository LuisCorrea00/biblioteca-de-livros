<template>
    <v-card class="mx-auto book-card">
        <div
                v-if="book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail"
                class="text-center pt-3"
        >
            <img :src="book.volumeInfo.imageLinks.smallThumbnail" alt="">
        </div>
        <v-card-title>
            <span>{{ book.volumeInfo.title.substring(0,maxTitleLength)}}</span>
            <span v-if="book.volumeInfo.title.length > maxTitleLength">...</span>
        </v-card-title>
        <v-card-text>{{ book.volumeInfo.subtitle || "Sem descrição"}}</v-card-text>
        <v-card-actions>
            <v-btn
                    text
                    small
                    color="primary"
                    @click="goToDetails"
            >
                Ver Detalhes
            </v-btn>
        </v-card-actions>
        <v-card-actions>
            <v-btn
                    v-if="book.volumeInfo.previewLink"
                    text
                    small
                    color="primary"
                    @click="goToPreview"
            >
                Ver Preview
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>

export default {
    name: "BookItem",
    props:{
        book:{type:Object, required:true}
    },
    data(){
        return{
            maxTitleLength : 20,
        }
    },
    methods:{
        goToPreview(){
            window.open(this.book.volumeInfo.previewLink);
        },
        goToDetails(){
            this.$router.push(`/book/${this.book.id}`)
        },
    },
}
</script>

<style scoped>
  .book-card{
      height: 100%;
  }
</style>