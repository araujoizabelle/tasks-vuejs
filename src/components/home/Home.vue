<template>
  <div class="home">
    <nav class="home-navigation"></nav>
    <div class="home-boards">
      <board type="OPEN" class="open" />
      <board type="IN_PROGRESS" class="progress" />
      <board type="DONE" class="done" />
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
  watch: {},
  methods: {},
};
</script>

<style scoped>
@import './Home.css';
</style>
