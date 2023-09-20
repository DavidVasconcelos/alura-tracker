<template>
  <main class="columns is-gapless is-multiline" :class="{ 'dark-mode': isDarkModeActive }">
    <div class="column is-one-fifth">
      <sidebar @toThemeChanged="changeTheme" />
    </div>
    <div class="column is-four-fifths content">
      <!-- view -->
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from './components/SideBar.vue';

export default defineComponent({
  name: 'App',
  components: {
    'sidebar': SideBar
  },
  data() {
    return {
      isDarkModeActive: false
    }
  },
  methods: {
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
