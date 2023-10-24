import IProject from "@/interfaces/IProject";
import { Store, createStore, useStore as vuexUseStore } from "vuex";
import { v4 as uuidv4 } from 'uuid';
import { InjectionKey } from "vue";
import { NOTIFY, ProjectMutationType } from "./MutationType";
import { INotification } from "@/interfaces/INotification";

interface State {
    projects: IProject[],
    notifications: INotification[];
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
    state: {
        projects: [],
        notifications: []      
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
        },
        [NOTIFY](state, newNotification: INotification) {     
            newNotification.id = uuidv4();
            state.notifications.push(newNotification);

            setTimeout(() => {
                state.notifications = state.notifications.filter(proj => proj.id != newNotification.id);
            }, 3000);
        }
    }
});

export function useStore(): Store<State> {
    return vuexUseStore(key);
}