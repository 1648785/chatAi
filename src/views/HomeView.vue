<template>
  <div class="home">
    <div class="chat">
        <div :class="data.role=='system'?'system':'user'" v-for="data in arr">{{ data.content }}</div>
    </div>
    <div class="send">
      <el-input @keyup.enter="send" v-model="input" placeholder="Please input" class="send-input" /><el-button
        type="primary" @click="send">send</el-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Header from '@/components/Header.vue'

import request from '@/utils/request.js'
export default {
  name: 'HomeView',
  data() {
    return {
      input: '',
      arr:[
        {"role":"system","content":"你好啊"},
        {"role":"user","content":"你好啊"}
      ],
      chat:{
        "model": "gpt-3.5-turbo",
        "messages": []
      }
    }
  },
  methods:{
    send(){
      this.chat.messages.push({"role":"user","content":this.input})
      this.arr.push( {"role":"user","content":this.input})
      this.input = ''
      this.arr.push({"role":"system","content":"正在思考着呢"})
      request.post("/api/api",this.chat).then(res => {
        this.arr.pop()
        let data = JSON.parse(res.data);
        let content = data.choices[0].message.content
        this.arr.push({"role":"system","content":content})
      })
      this.$nextTick(()=>{
        document.querySelector(".chat").scrollTo(0,document.querySelector(".chat").scrollHeight)
      })
    }
  },
  components: {
    // Header
  }
}

</script>

<style scoped>
.home {
  height: 700px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 5px;
  background-color: antiquewhite;
}

.home .chat {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 10px;
}

.home .send {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.system {
  background-color: yellowgreen;
  padding: 10px 8px;
  border-radius: 8px;
  margin-bottom: 10px;
  align-self: flex-start;
}

.user {
  background-color: skyblue;
  padding: 10px 8px;
  border-radius: 8px;
  margin-bottom: 10px;
  align-self: flex-end;
}
</style>