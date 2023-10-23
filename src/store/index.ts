import IProject from "@/interfaces/IProject";
import { Store, createStore, useStore as vuexUseStore } from "vuex";
import { v4 as uuidv4 } from 'uuid';
import { InjectionKey } from "vue";
import { ProjectMutationType } from "./ProjectMutationType";
import { INotification, NotificationType } from "@/interfaces/INotification";

interface State {
    projects: IProject[],
    notifications: INotification[];
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
    state: {
        projects: [],
        notifications: [
            {
                id: 1,
                text: 'Uma notificação de sucesso',
                title: 'sucesso',
                type: NotificationType.SUCCESS
            },
            {
                id: 2,
                text: 'Uma notificação de atencao',
                title: 'atencao',
                type: NotificationType.WARNING
            },
            {
                id: 3,
                text: 'Uma notificação de falha',
                title: 'falha',
                type: NotificationType.DANGER
            }        
        ]      
    },
    mutations: {
        [ProjectMutationType.ADD_PROJECT](state, projectName: string) {
            const project ={
                id: uuidv4(),
                name: projectName
            } as IProject
            state.projects.push(project)
        },[ProjectMutationType.EDIT_PROJECT](state, project: IProject) {
            const index = state.projects.findIndex(proj => proj.id === project.id);
            state.projects[index] = project;
        }
        ,[ProjectMutationType.DELETE_PROJECT](state, id: string) {     
            state.projects = state.projects.filter(proj => proj.id != id);
        }
    }
});

export function useStore(): Store<State> {
    return vuexUseStore(key);
}