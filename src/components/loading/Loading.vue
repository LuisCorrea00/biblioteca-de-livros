<template>
  <div>
      <div v-if="condition">
          <v-progress-circular
                  indeterminate
                  color="primary"
          />
      </div>
      <div v-if="!condition">
          <slot />
      </div>
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Loading",
    props:{
        condition: {type:Boolean, required:true},
    }
}
</script>

<style scoped>

</style>