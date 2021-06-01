<template>
  <div class="task-card">
    <div class="task-card--top">{{ task.title }}</div>
    <div class="task-card--main">{{ task.description }}</div>
  </div>
</template>
<script>
export default {
  name: 'TaskCard',
  components: {},
  props: {
    task: {
      type: Object,
      default: () => {
        return {};
      },
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
@import './TaskCard.css';
</style>
