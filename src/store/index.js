/* eslint-disable prettier/prettier */
export const store = {
    state: {
        tasks: [],
    },
    mutations: {
        addTask(state, payload) {
            return state.tasks.push(payload);
        },
    },
    actions: {
        ADD_TASK({ commit }) {
            return commit('addTask', { title: 'task1', description: 'task1kddkjd', status: 'OPEN' })
        },
    },
};
