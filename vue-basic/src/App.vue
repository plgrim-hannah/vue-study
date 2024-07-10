<template>
  <div>
    <input type="text" v-model="inputValue1" />
    <input
      type="text"
      v-model="inputValue2"
      @input="inputValue2 = $event.target.value"
    />
    <!--onChange onInput => v-on => @change, @input-->
  </div>
  <div>{{ inputValue1 }}</div>
  <div>{{ inputValue2 }}</div>
</template>

<script>
export default {
  data() {
    return {
      inputValue1: "",
      inputValue2: "",
    };
  },
};
</script>

<style lang="scss" scoped></style>
