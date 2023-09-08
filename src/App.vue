<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <sidebar />
    </div>
    <div class="column is-three-quarter content">
      <taskform @whenSaveTask="saveTask" />
      <div class="list">
        <!-- list of tasks, alaways item first, list index in second -->
        <tasklist v-for="(task, index) in tasks" :key="index" :task="task" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from './components/SideBar.vue';
import TaskForm from './components/TaskForm.vue';
import TaskList from './components/TaskList.vue';
import ITask from './interfaces/ITask'

export default defineComponent({
  name: 'App',
  components: {
    'sidebar': SideBar,
    'taskform': TaskForm,
    'tasklist': TaskList
  },
  data() {
    return {
      tasks: [] as ITask[]
    }
  },
  methods: {
    saveTask(task: ITask) {
      this.tasks.push(task);
    }
  },
});
</script>

<style>
.list {
  padding: 1.25rem;
}

main {
  --bg-primary: #fff;
  --text-primary: #000;
}

main.dark-mode {
  --bg-primary: #2b2d42;
  --text-primary: #ddd;
}

.content {
  background-color: var(--bg-primary);
}
</style>
