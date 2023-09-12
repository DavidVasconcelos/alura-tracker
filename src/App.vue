<template>
  <main class="columns is-gapless is-multiline" :class="{ 'dark-mode': isDarkModeActive }">
    <div class="column is-one-fifth">
      <sidebar @toThemeChanged="changeTheme" />
    </div>
    <div class="column is-four-fifths content">
      <!--whenSaveTask is an event that comes from child  -->
      <taskform @whenSaveTask="saveTask" @whenCleanTasks="cleanTasks" />
      <div class="list">
        <!-- list of tasks, alaways item first, list index in second -->
        <tasklist v-for="(task, index) in tasks" :key="index" :task="task" />
        <taskbox v-if="isListEmpty">
          <span>Você não está muito produtivo hoje 😢</span>
        </taskbox>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from './components/SideBar.vue';
import TaskForm from './components/TaskForm.vue';
import TaskList from './components/TaskList.vue';
import TaskBox from './components/TaskBox.vue';
import ITask from './interfaces/ITask'

export default defineComponent({
  name: 'App',
  components: {
    'sidebar': SideBar,
    'taskform': TaskForm,
    'taskbox': TaskBox,
    'tasklist': TaskList,
  },
  computed: {
    isListEmpty(): boolean {
      return this.tasks.length === 0;
    }
  },
  data() {
    return {
      tasks: [] as ITask[],
      isDarkModeActive: false
    }
  },
  methods: {
    saveTask(task: ITask) {
      this.tasks.push(task);
    },
    cleanTasks(): void {
      this.tasks = [];
    },
    changeTheme(isDarkModeActive: boolean): void {
      this.isDarkModeActive = isDarkModeActive;
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
