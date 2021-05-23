<template>
  <div class="home">
    <nav class="home-navigation"></nav>
    <div class="home-boards">
      <board title="Open" class="open" />
      <board title="In Progress" class="progress" />
      <board title="Done" class="done" />
    </div>
  </div>
</template>
<script>
import Board from '../board/Board';
export default {
  name: 'Home',
  components: { Board },
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
};
</script>

<style scoped>
@import './Home.css';
</style>
