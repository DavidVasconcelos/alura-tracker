<template>
    <header>
        <h1>
            <img src="../assets/logo.png" alt="Alura Tracker">
        </h1>
        <div class="has-text-centered">
            <button class="button" @click="changeTheme">
                <span v-if="isDarkModeActive">Desativar modo escuro</span>
                <span v-else>Ativar modo escuro</span>
            </button>
        </div>
        <nav class="panel mt-5">
            <ul>
                <li>
                    <router-link to="/" class="link">
                        <i class="fas fa-tasks"></i>
                        tasks
                    </router-link>
                </li>
                <li>
                    <router-link to="/projects" class="link">
                        <i class="fas fa-project-diagram"></i>
                        projects
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'SideBar',
    emits: ['toThemeChanged'],
    data() {
        return {
            isDarkModeActive: false
        }
    },
    methods: {
        changeTheme() {
            this.isDarkModeActive = !this.isDarkModeActive;
            this.$emit('toThemeChanged', this.isDarkModeActive);
        }
    },
});
</script>

<style scoped>
h1 {
    text-align: center;
}

strong {
    color: #f95738;
}

header {
    background: #0d3b66;
    width: 100%;
    height: 100vh;
    padding: 2rem;
}

@media only screen and (max-width: 768px) {
    header {
        height: auto;
    }
}

.panel li {
    margin: 8px 0;
}

.link {
    color: #fff;
}

.link:hover {
    color: #FAF0CA;
}

.link.router-link-active {
    color: #FAF0CA;
}
</style>