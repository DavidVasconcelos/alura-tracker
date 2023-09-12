<template>
    <header>
        <h1>
            <img src="../assets/logo.png" alt="">
        </h1>
        <button class="button" @click="changeTheme">
            <span v-if="isDarkModeActive">Desativar modo escuro</span>
            <span v-else>Ativar modo escuro</span>
        </button>
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
header {
    padding: 1rem;
    background: #0d3b66;
    width: 100%;
    height: 100vh;
    text-align: center;
}

@media only screen and (max-width: 768px) {
    header {
        padding: 2.5rem;
        height: auto;
    }
}
</style>