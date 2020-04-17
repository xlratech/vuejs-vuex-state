<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div>
      Counter is: {{ counter }}
      <br>
      Loading Text: {{ loadingText }}
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello!!',
      cnt: 0
    }
  },
  computed: {
    ...mapState(['counter', 'loadingText'])
  },
  created () {
    this.updateData();
  },
  methods: {
    updateData() {
      if (this.cnt < 10) {
        this.cnt++;
        setTimeout(() => {
            this.$store.dispatch('updateCounter', this.cnt);
            this.updateData();
        }, 500)
      }

      if (this.cnt == 10) {
        this.$store.dispatch('updateLoadingText', 'Loaded');
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
