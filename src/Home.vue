<template>
  <div>
    <nav></nav>
    <div class="board-center"></div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  components: {},
  props: {},
  data() {
    return {
      tasks: [
        { title: 'clean floor', description: 'make it shine', status: 'OPEN' },
        {
          title: 'wash dishes',
          description: 'make it bright',
          status: 'IN PROGRESS',
        },
        { title: 'wash clothes', description: 'make it soft', status: 'DONE' },
      ],
    };
  },
  computed: {},
  watch: {},
  methods: {},
};
</script>
