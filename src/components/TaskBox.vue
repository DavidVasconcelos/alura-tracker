<template>
    <div class="box has-text-weight-bold" :style="styles">
        <!-- To render another component -->
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'TaskBox',
    data() {
        return {
            styles: {
                backgroundColor: '#FAF0CA'
            }
        }
    }
})
</script>
