<template>
  <div class="board">
    <div class="board-top">
      <p>{{ getTitleByType(type) }}</p>
      <p>{{ tasksAmount() }}</p>
    </div>
    <div class="board-main">
      <div v-for="(task, i) in getTasksByType(type)" :key="i">
        <task-card :task="task" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import TaskCard from '../task-card/TaskCard';

export default {
  name: 'Board',
  components: { TaskCard },
  props: {
    type: {
      type: String,
      default: 'OPEN',
    },
  },
  computed: {
    ...mapGetters(['getTasksByType', 'getTitleByType']),
  },
  methods: {
    tasksAmount() {
      const amount = this.getTasksByType(this.type);
      return amount.length;
    },
  },
};
</script>

<style scoped>
@import './Board.css';
</style>
