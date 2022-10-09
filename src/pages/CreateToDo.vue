<template>
  <div class="todo">
    <div class="todo__container">
      <h2>Create</h2>

      <div>
        <Button label="Сохранить" />
      </div>

      <div class="todo__editor">
        <v-md-editor v-model="todoMD"></v-md-editor>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

let todoMD = ref('')

</script>

<style scoped>
.todo__editor {
  padding: 2rem 0;
}

.todo__container {
  width: 55%;
}


</style>