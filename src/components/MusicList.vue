<template>
  <div>

   <div class="login-top">
      <label class="to-back" @click="toBack"><</label>
      <span class="login-title">我的歌单</span>
      <img src="../images/3_05.jpg"  class="index-top-right"/>
    </div>

    <div class="index-b">
      <div class="index-b-top">
        <img :src="ipp+this.$store.state.store1.musicType[this.$store.state.store1.musicTypeIndex].img" />
        <div class="index-b-top-right">
          <p style="width:12rem">{{this.$store.state.store1.musicType[this.$store.state.store1.musicTypeIndex].info}}</p>
          <p style="color:#c5c5c5">作者：{{this.$store.state.store1.musicType[this.$store.state.store1.musicTypeIndex].autor}}</p>
        </div>
      </div>

      <ul class="index-c">
        <li>
          <i class="el-icon-message"></i>
          <span>3324</span>
        </li>
        <li>
          <i class="el-icon-tickets"></i>
          <span>16</span>
        </li>
        <li>
          <i class="el-icon-star-off"></i>
          <span>34</span>
        </li>
        <li>
          <i class="el-icon-download"></i>
          <span>下载</span>
        </li>
      </ul>
    </div>

    <div class="index-d">
      <div class="index-d-1">
        <i class="el-icon-service icn-1"></i>
        <span>播放全部</span>
        <span class="num-a">(共54首)</span>
        <div>
          <i class="el-icon-menu"></i>
          <span>多选</span>
        </div>
      </div>

      <ul class="index-e">
        <li v-for="(value,index) in this.$store.state.store1.musicType[this.$store.state.store1.musicTypeIndex].wangyiyunMusic">
          <span class="index-e-s1">{{index+1}}</span>
          <div  class="index-e-d1" @click="toMusic(index)">
            <span  class="index-e-d1-s1">{{value.name}}</span>
            <span  class="index-e-d1-s2">{{value.autor}}</span>
          </div>
          <i class="el-icon-caret-right index-e-i1"></i>
          <i class="el-icon-more index-e-i1"></i>
        </li>
      </ul>


    </div>


    <div class="index-bottom-f"></div>

    <div class="index-bottom">
      <ul>
         <li>
          <img src="../images/b_1.png" style="width:1.4rem"/>
          <span>发现音乐</span>
        </li>
         <li>
          <img src="../images/b_2.png" style="width:1.4rem"/>
          <span>我的音乐</span>
        </li>
         <li>
          <img src="../images/b_3.png" style="width:1.4rem"/>
          <span>朋友</span>
        </li>
         <li>
          <img src="../images/b_4.png" style="width:1.4rem"/>
          <span>账号</span>
        </li>
      </ul>
    </div>



  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
        data:this.$store.state.store1.musicType[this.$store.state.store1.musicTypeIndex],
        ipp:"http://192.168.43.182:3000"
    }
  },

  mounted(){
    console.log(this.$store.state.store1.musicTypeIndex)
    console.log(this.$store.state.store1.musicType[this.$store.state.store1.musicTypeIndex])
    },
  methods:{
    toBack(){
      this.$router.back(-1)
    },
    toMusic(index){
      this.$store.commit("getMusicListIndex",index)
      this.$router.push("/music")
    },

    audioPlay(){
      this.$refs.audio.play()
    },
    audioNoPlay(){
       this.$refs.audio.pause()
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
  text-decoration:none;
}
ul,li{
  margin:0px;
  padding:0px;
  list-style:none;
}
.login-top{
  display:flex;
  width:100%;
  height:4rem;
  background: linear-gradient(left, pink, #d53b34);
  font-size:1.4rem;
  justify-content:space-between;
  align-items:center;
}
.to-back{
  font-size:1.4rem;
  color:#fff9e0;
  margin-left:1.05rem;
}
.login-title{
  font-size:1.4rem;
  color:#fff9e0;
  margin-right:1.5rem;
}
.index-top-right{
  width:1.5rem;
  margin-right:1rem
}
.index-b{
  width:100%;
  height:12.7rem;
  background: linear-gradient(left top, pink, #151515);
  overflow:hidden;
}
.index-b-top{
  width:100%;
  
  margin-left:1rem;
  margin-top:1rem;
  display:flex;
}
.index-b-top-right{
  display:flex;
  flex-direction:column;
  margin-left:1rem; 
}
.index-c{
  width:100%;
  padding-top:0.4rem;
  display:flex;
  justify-content:space-around;
}
.index-c li{
  display:flex;
  flex-direction:column;
  align-items:center;
}
.index-c i{
  color:white;
}
.index-c span{
  color:#b4b4b4;
  margin-top:0.2rem
}
.index-d{
  width:100%;
}
.index-d-1{
  display:flex;
  align-items:center;
  padding-top:0.3rem;
  padding-bottom:0.3rem;
}
.icn-1{
  margin-left:0.3rem;
  margin-right:0.3rem;
}
.num-a{
  font-size:0.8rem;
  color:#a0a0a1;
  flex-grow:1
}
.index-d-1>div{
  margin-right:1rem;
}
.index-e{
  width:100%;
}
.index-e li{
  width:100%;
  height:3.5rem;
  display:flex;
  align-items:center;
}
.index-e-s1{
  margin-left:1rem;
  margin-right:1rem;
}
.index-e-d1{
  flex-grow:1;
  display:flex;
  flex-direction:column;
}
.index-e-i1{
  margin-right:1rem;
}
.index-e-d1-s2{
  font-size:0.8rem;
  color:#838686;
}


.index-bottom-f{
  width:100%;
  height:3.1rem;
}
.index-bottom{
  width:100%;
  height:3.1rem;
  background:#1d1d1a;
  position:fixed;
  bottom:0;
  left:0;
}
.index-bottom ul,.index-bottom li{
  margin:0px;
  padding:0px;
}
.index-bottom ul{
  height:100%;
  width:100%;
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;
}
.index-bottom ul li{
  display:flex;
  flex-direction:column;
  align-items:center;
}
.index-bottom ul li span{
  font-size:0.5rem;
  color:#d9d8db;
}



</style>
