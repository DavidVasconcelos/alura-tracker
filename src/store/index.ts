import IProject from "@/interfaces/IProject";
import { Store, createStore, useStore as vuexUseStore } from "vuex";
import { v4 as uuidv4 } from 'uuid';
import { InjectionKey } from "vue";

interface State {
    projects: IProject[];
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
    state: {
        projects: []        
    },
    mutations: {
        'ADD_PROJECT'(state, projectName: string) {
            const project ={
                id: uuidv4(),
                name: projectName
            } as IProject
            state.projects.push(project)
        }
    }
});

export function useStore(): Store<State> {
    return vuexUseStore(key);
}