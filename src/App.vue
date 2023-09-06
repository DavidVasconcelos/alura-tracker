<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <sidebar />
    </div>
    <div class="column is-three-quarter">
      <taskform />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from './components/SideBar.vue';
import TaskForm from './components/TaskForm.vue';

export default defineComponent({
  name: 'App',
  components: {
    'sidebar': SideBar,
    'taskform': TaskForm
  }
});
</script>

<style></style>
