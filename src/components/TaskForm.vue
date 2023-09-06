<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input type="text" class="input" placeholder="Qual tarefa deseja iniciar?" />
            </div>
            <div class="column">
                <div class="is-flex is-align-items-center is-justify-content-space-between">
                    <section>
                        <strong>{{ timeElapsed }}</strong>
                    </section>
                    <button class="button" @click="initCount" :disabled="startIsDisabled">
                        <span class="icon">
                            <i class="fas fa-play"></i>
                        </span>
                        <span>play</span>
                    </button>
                    <button class="button" @click="endCount" :disabled="stopIsDisabled">
                        <span class="icon">
                            <i class="fas fa-stop"></i>
                        </span>
                        <span>stop</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TaskForm',
    data() {
        return {
            startIsDisabled: false,
            stopIsDisabled: true,
            timeInSeconds: 0,
            stopWatch: 0
        }
    },
    computed: {
        timeElapsed(): string {
            return new Date(this.timeInSeconds * 1000).toISOString().substring(11, 19)
        }
    },
    methods: {
        // 1 sec = 1000ms
        initCount() {
            this.stopWatch = setInterval(() => {
                this.timeInSeconds += 1
            }, 1000)
            this.startIsDisabled = true
            this.stopIsDisabled = false

        },
        endCount() {
            this.startIsDisabled = false
            this.stopIsDisabled = true
            clearInterval(this.stopWatch)
        }
    },
})
</script>
