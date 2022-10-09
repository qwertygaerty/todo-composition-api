<template>
  <div class="todo">
    <div class="todo__active">
      <h2>ToDoEs</h2>
      <ol class="gradient-list">
        <li v-for="(task, index) in tasks.active" :key="index">
          <Task :task="task" @change-position="tossTask" @remove-task="removeTask"></Task>
        </li>
      </ol>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import Task from "@/components/Task.vue"
import ToDo from "@/interfaces/ToDoInterface";
import ToDos from "@/interfaces/ToDoSInterface";

export default defineComponent({
  name: 'HomePage',
  components: {
    Task
  },
  setup() {
    let tasks = ref<ToDos>({
      active: [
        {name: "learn js", id: 0, active: true},
        {name: "learn react", id: 1, active: true},
        {
          name: "learn vue composition learn vue composition learn vue composition learn vue composition learn vue composition learn vue composition ",
          id: 2,
          active: true
        },
      ],
      complete: []
    });

    let tossTask = (task: ToDo) => {

      if (task.active) {
        tasks.value.active.splice(tasks.value.active.indexOf(task), 1);
        task.active = false;
        tasks.value.complete.push(task);
        return;
      }

      if (!task.active) {
        tasks.value.complete.splice(tasks.value.active.indexOf(task), 1);
        task.active = true;
        tasks.value.active.push(task);
      }
    };

    let removeTask = (task: ToDo) => {
      if (task.active) {
        tasks.value.active.splice(tasks.value.active.indexOf(task), 1);
      }

      if (!task.active) {
        tasks.value.complete.splice(tasks.value.active.indexOf(task), 1);
      }
    }

    return {
      tasks,
      tossTask,
      removeTask,
    }
  }
});
</script>


<style lang="scss">

$black: #1d1f20;
$blue: #83e4e2;
$green: #0a96ff;
$yellow: rgba(15, 220, 50, 0.69);
$white: #fafafa;

.todo {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  gap: 2rem;
}

%boxshadow {
  box-shadow: 0.25rem 0.25rem 0.6rem rgba(0, 0, 0, 0.05), 0 0.5rem 1.125rem rgba(75, 0, 0, 0.05);
}

.todo__active, .todo__clothed, .todo__container {
  display: flex;
  flex-direction: column;
  width: 55%;
}

ol.gradient-list {
  counter-reset: gradient-counter;
  list-style: none;
  margin: 1.75rem 0;

  > li {
    background: white;
    border-radius: 0 0.5rem 0.5rem 0.5rem;
    @extend %boxshadow;
    counter-increment: gradient-counter;
    margin-top: 1rem;
    min-height: 3rem;
    padding: 1rem 1rem 1rem 3rem;
    position: relative;

    &::before,
    &::after {
      background: linear-gradient(135deg, $green 0%, $yellow 100%);
      border-radius: 1rem 1rem 0 1rem;
      content: '';
      height: 3rem;
      left: -1rem;
      overflow: hidden;
      position: absolute;
      top: -1rem;
      width: 3rem;
    }

    &::before {
      @extend %boxshadow;
      content: counter(gradient-counter);
      color: $black;
      display: flex;
      font: 900 1.5em/1 'Montserrat';
      z-index: 1;
      justify-content: center;
      align-items: center;
    }

    &::before {
      background: linear-gradient(135deg, rgba($green, 1 - (( 5) * 0.2)) 0%, rgba($yellow, 1 - ((5) * 0.2)) 100%);
    }
  }

  + li {
    margin-top: 2rem;
  }
}


</style>

