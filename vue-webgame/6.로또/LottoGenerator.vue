<template>
  <div>
    <div>당첨 숫자</div>
    <div id="결과창">
      <lotto-ball></lotto-ball>
    </div>
    <div>보너스</div>
    <button>한번 더!!</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  watch: {
  },
  methods: {

  },
  mounted() {
    console.log('mounted');
  },
  beforeDestroy() {
    console.log('beforeDestroy');
  },
}
</script>
<style scoped>
</style>