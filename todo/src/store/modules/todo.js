export default {
  namespaced: true,
  state: {
    todos: [
      { id: 1, text: "buy a car", checked: false },
      { id: 2, text: "play game", checked: true },
    ],
  },
  mutations: {
    ADD_TODO(state, value) {
      state.todos.push({
        id: Math.random(),
        text: value,
        checked: false,
      });
    },
    TOGGLE_TODO(state, { id, checked }) {
      const index = state.todos.findIndex((todo) => todo.id === id);
      state.todos[index].checked = checked;
    },
    DELETE_TODO(state, todoId) {
      state.todos = state.todos.filter((todo) => todo.id !== todoId);
    },
  },
  actions: {
    addTodo({ commit }, value) {
      setTimeout(function() {
        commit("ADD_TODO", value);
      }, 500);
    },
    toggleTodo({ commit }, payload) {
      setTimeout(function() {
        commit("TOGGLE_TODO", payload);
      }, 500);
    },
    deleteTodo({ commit }, todoId) {
      setTimeout(function() {
        commit("DELETE_TODO", todoId);
      }, 500);
    },
  },
  getters: {
    numberOfCompletedTodo: (state) => {
      return state.todos.filter((todo) => todo.checked).length;
    },
  },
};
