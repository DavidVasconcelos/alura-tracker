import { defineComponent, computed } from 'vue';
<template>
    <section>
        <!-- prevent deafault behavior -->
        <form @submit.prevent="save">
            <div class="field">
                <label for="projectName" class="label">
                    Project Name
                </label>
                <input type="text" class="input" v-model="projectName" id="projectName">
            </div>
            <div class="field">
                <button class="button" type="submit">
                    Save
                </button>
            </div>
        </form>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store';
import { ProjectMutationType } from '@/store/MutationType';
import { NotificationType } from '@/interfaces/INotification';
import useNotifier from '@/hooks/notifier';

export default defineComponent({
    name: 'FormView',
    props: {
        id: {
            type: String
        }
    },
    mounted() {
        if (this.id) {
            const project = this.store.state.projects.find(p => p.id == this.id);
            this.projectName = project?.name || '';
        }
    },
    data() {
        return {
            projectName: ""
        };
    },
    methods: {
        save() {
            if (this.id) {
                this.store.commit(ProjectMutationType.EDIT_PROJECT, {
                    id: this.id,
                    name: this.projectName
                });
            } else {
                this.store.commit(ProjectMutationType.ADD_PROJECT, this.projectName);
            }
            this.projectName = '';
            this.notify(NotificationType.SUCCESS, 'Excelente!', 'O projeto foi cadastrado com sucesso!');
            this.$router.push('/projects');
        }
    },
    setup() {
        const store = useStore();
        const { notify } = useNotifier();
        return {
            store,
            notify
        }
    }
})
</script>
