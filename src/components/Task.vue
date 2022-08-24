<template>
  <div class="task">
    <p class="task__name">{{ task.name }}</p>
    <div class="buttons">
      <button class="button button__complete" @click="changePosition(task)">✔</button>
      <button class="button button__delete" @click="removeTask(task)">&#x2715;</button>
    </div>
  </div>
</template>

<script>
import {defineComponent, ref} from 'vue';
export default defineComponent({
  name: "TaskToDo",
  props: {
    task: Object,
  },
  emits: ['change-position'],
  setup( props, { emit } ) {
    let changePosition = (task) => {
      emit('change-position', task)
    }

    let removeTask = (task) => {
      emit('remove-task', task)
    }

    return {
      changePosition,
      removeTask,
    }
  }
});
</script>

<style scoped lang="scss">

@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Raleway:400,400i,700,700i);

$yellow: rgba(15, 220, 50, 0.69);

.task {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
}

.button {
  border: none;
  font-size: 20px;
  color: white;
  display: flex;
  width: 2rem;
  height: 2rem;
  align-items: center;
  justify-content: center;
  border-radius: 5rem;
  cursor: pointer;
}

.button__complete {
  background: $yellow;
}

.button__delete {
  background: crimson;
}

.buttons {
  display: flex;
  gap: 1rem;
}

.task__name {
  width: 70%;
}

</style>