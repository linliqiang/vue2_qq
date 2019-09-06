<template>
  <div class="music-box">

   <div class="login-top">
      <label class="to-back" @click="toBack"><</label>
      <span class="login-title">{{this.$store.state.store1.musicType[this.$store.state.store1.musicTypeIndex].wangyiyunMusic[this.$store.state.store1.musicListIndex].name}}</span>
      <img src="../images/3_05.jpg"  class="index-top-right"/>
    </div>


    <div class="bf-box">
    
      <div class="bf-box-center">

        <div>
        
          <img ref='zzimg' :src="ipp+this.$store.state.store1.musicType[this.$store.state.store1.musicTypeIndex].wangyiyunMusic[this.$store.state.store1.musicListIndex].img" style="width:12rem"/>

        </div>
        

      </div>

    </div>




    <div class="index-b">
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

    <div class="index-y">
      <span>00.00</span>
      <div class="index-y-center">
        <div class="index-y-center-center">
          <img src="../images/jj.png" style="width:2rem"/>
        </div>
      </div>
      <span>03.45</span>
    </div>

    <div class="index-z">
      <i class="el-icon-sort"  @click="au1"></i>
      <i class="el-icon-caret-left"  @click="au2"></i>
      <span ref="zb"  @click="au3"><i class="el-icon-d-arrow-right"></i></span>
      <i class="el-icon-caret-right"  @click="au4"></i>
      <i class="el-icon-rank"></i>
    </div>

    <div>
      <audio :src="ipp+this.$store.state.store1.musicType[this.$store.state.store1.musicTypeIndex].wangyiyunMusic[this.$store.state.store1.musicListIndex].music" autoplay  ref="aud" id="aud"></audio>
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
        indexx:this.$store.state.store1.musicListIndex,
        ipp:"http://192.168.43.182:3000"
    }
  },

  mounted(){
    
    },
  methods:{
    toBack(){
      this.$router.back(-1)
    },
    au1(){
        var num = parseInt(Math.random()*(this.data.wangyiyunMusic.length));
        this.$store.commit("getMusicListIndex",num)
    },
    au2(){
      this.$store.commit("getMusicListIndexDel")
    },
    au3(){
      console.log(this.$refs.aud.duration)
      console.log(this.$refs.aud.duration/60)
      console.log(this.$refs.aud.currentTime)

      var audi = document.getElementById("aud")
      if(this.$refs.aud.paused){
        this.$refs.aud.play() 
       this.$refs.zb.innerHTML='<i class="el-icon-close"></i>'
      //  this.$refs.zzimg.style.transform = rotate("50deg")
      }else{
        this.$refs.aud.pause()
         this.$refs.zb.innerHTML='<i class="el-icon-d-arrow-right"></i>'
      }
    },
    au4(){
       this.$store.commit("getMusicListIndexAdd")
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
.music-box{
  background: linear-gradient(left top, pink, #151515);
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

.bf-box{
  width:19.2rem;
  height:19.2rem;
  background:#6c6665;
  margin-left:auto;
  margin-right:auto;
  margin-top:4.8rem;
  margin-bottom:3.5rem;
  border-radius:50%;
  display:flex;
  flex-direction:column;
  align-items:center;
}
.bf-box-center{
  width:18rem;
  height:18rem;
  background:#0a0a0a;
  border-radius:50%;
  margin-top:0.6rem;
  display:flex;
  flex-direction:column;
  align-items:center;
}
.bf-box-center>div{
  width:12rem;
  height:12rem;
  margin-top:3rem;
  overflow:hidden;
  border-radius:50%;
}
.index-y{
  width:100%;
  height:3rem;
  margin-top:1rem;
  display:flex;
  align-items:center;
  justify-content:space-around;
}
.index-y-center{
  width:17rem;
  height:0.4rem;
  background:#878990;
  border-radius:0.2rem;
}
.index-y-center-center{
  width:30%;
  height:0.4rem;
  background:#d03a1d;
  border-radius:0.2rem;
}
.index-y-center-center>img{
  float:right;
  margin-right:-2rem;
  margin-top:-1.5rem;
}





.index-z{
  width:100%;
  height:3rem;

  margin-top:1rem;
  display:flex;
  align-items:center;
  justify-content:space-around;
}
.index-z i{
  font-size:1.5rem;
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
