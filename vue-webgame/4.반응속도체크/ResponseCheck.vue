<template>
  <div>
    <!--v-bind:class="state"-->
    <div id="screen" :class="state" @click="onClickState">{{ message }}</div>
    <template v-if="result.length">
      <div>평균 시간 : {{ average }}ms</div>
      <button @click="onReset">리셋</button>
    </template>
  </div>
</template>
<script>
// 화면과 관련 없는 시간은 data로 관리하지 않음
let startTime = 0;
let endTime = 0;
let timeout = null;
export default {
  data() {
    return {
      result: [],
      state: 'waiting',
      message: '클릭해서 시작하세요'
    }
  },
  computed: {
    average() {
      return this.result.reduce((a, c) => a + c, 0) / this.result.length || 0
    }
  },
  methods: {
    onReset() {
      this.result = [];
    },
    onClickState() {
      if (this.state === 'waiting') {
        this.state = 'ready';
        this.message = '초록이 되면 클릭하세요!';
        setTimeout(() => {
          this.state = 'now'
          this.message = '지금 클릭하세요'
          startTime = new Date();
        }, Math.floor(Math.random() * 1000) + 2000); //2~3초
      } else if (this.state === 'ready') {
        clearTimeout(timeout); // 기존 타임아웃 없애기
        this.state = 'now';
        this.message = '너무 성급하시네요! 초록이 된 후에 클릭하세요';
      } else if (this.state === 'now') {
        endTime = new Date();
        this.state = 'waiting';
        this.message = '클릭해서 시작하세요~~~';
        this.result.push(endTime - startTime);
      }
    }
  }
}
</script>
<!--scoped를 붙이면 이 컴포넌트 안에서만 유효함-->
<style scoped>
#screen {
  width: 300px;
  height: 200px;
  text-align: center;
  user-select: none;
}

#screen.waiting {
  background-color: aqua;
}

#screen.ready {
  background-color: red;
  color: white;
}

#screen.now {
  background-color: greenyellow;
}
</style>