<template>
  <div class="board">
    <div class="board-top">
      <p>{{ title }}</p>
      <p>{{ tasksNumber }}</p>
    </div>
    <div class="board-main">
      <task-card />
      <task-card />
    </div>
  </div>
</template>
<script>
import TaskCard from '../task-card/TaskCard';
export default {
  name: 'Board',
  components: { TaskCard },
  props: {
    title: {
      type: String,
      default: 'Tasks',
    },
    tasksNumber: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
};
</script>

<style scoped>
@import './Board.css';
</style>
