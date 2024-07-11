<template>
  <div>
    <div id="computer" :style="computedStyleObject"></div>
    <div>
      <button @click="onClickButton('바위')">바위</button>
      <button @click="onClickButton('가위')">가위</button>
      <button @click="onClickButton('보')">보</button>
    </div>
    <div>{{result}}</div>
    <div>현재 {{score}}점</div>
  </div>
</template>
<script>
const rspCoords = {
  바위 : '0',
  가위 : '-142px',
  보 : '-248px'
};

let interval = null;
export default {
  data() {
    return {
      imageCoord : rspCoords.바위,
      result : '',
      score : 0
    }
  },
  computed: {
    computedStyleObject () {
      return {
        background : `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imageCoord} 0`
      }
    }
  },
  methods: {
    onClickButton (choice) {

    },
    created() {
      console.log('created');
    },
    beforeMount() {
      console.log('beforeMount');
    },
    mounted() {
      console.log('mounted');
      interval = setInterval(() => {
        if (this.imageCoord === rspCoords.바위) {
          this.imageCoord = rspCoords.가위;
        } else if (this.imageCoord === rspCoords.가위) {
          this.imageCoord = rspCoords.보;
        } else if (this.imageCoord === rspCoords.보){
          this.imageCoord = rspCoords.바위;
        }
      })
    },
    beforeUpdated() {
      console.log('beforeUpdated');
    },
    updated() {
      console.log('updated');
    },
    destroyed() {
      console.log('destroyed');
    },
  }
}
</script>
<style scoped>
  #computer {
    width: 142px;
    height: 200px;
    background-position: 0 0;
  }
</style>