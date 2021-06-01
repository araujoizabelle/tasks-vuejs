/* eslint-disable prettier/prettier */
import { createStore } from 'vuex';

const state = {
    tasks: [{ title: 'task1', description: 'task1kddkjd', status: 'OPEN' },
        { title: 'task2', description: 'tasSSSS', status: 'IN_PROGRESS' },
        { title: 'task3', description: 'tasfffff', status: 'DONE' }
    ],
}

const mutations = {
    addTask(state, payload) {
        return state.tasks.push(payload);
    },
}

const actions = {
    ADD_TASK({ commit }) {
        return commit('addTask', { title: 'task2', description: 'task1k333', status: 'OPEN' })
    },
}

const getters = {
    getTasksByType: (state) => (type) => {
        return state.tasks.filter((task) => {
            return task.status === type;
        });
    },

    getTitleByType: () => (type) => {
        if (type === 'OPEN') {
            return 'Open';
        }

        if (type === 'IN_PROGRESS') {
            return 'In Progress';
        }

        if (type === 'DONE') {
            return 'Done';
        }
    }
}

export default createStore({
    state,
    mutations,
    actions,
    getters
})