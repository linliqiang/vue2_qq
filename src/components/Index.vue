<template>
  <div>

    <div class="index-top">
      <img src="../images/3_03.jpg" class="index-top-img1"/>
      <img src="../images/3_01_03.jpg" style="width:1.2rem" class="ss-icn"/>
      <input type="text"  placeholder="搜索音乐、视频、歌词、电台" class="sousuo"/>
      <img src="../images/3_05.jpg"  class="index-top-img2"/>
    </div>

    <div class="banner">
    
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="音乐" name="first">
        
          <el-carousel :interval="5000" arrow="always" height="10rem">
            <el-carousel-item v-for="item in 4" :key="item">
               <img src="http://192.168.43.182:3000/images/b.jpg" style="width:100%;height:100%"/>
            </el-carousel-item>
          </el-carousel>
        
        </el-tab-pane>
        <el-tab-pane label="视频" name="second">
        
          <el-carousel :interval="5000" arrow="always" height="10rem">
            <el-carousel-item v-for="item in 4" :key="item">
              <img src="../images/b.jpg" style="width:100%;height:100%"/>
            </el-carousel-item>
          </el-carousel>
        
        </el-tab-pane>
        <el-tab-pane label="电台" name="third">
        
          <el-carousel :interval="5000" arrow="always" height="10rem">
            <el-carousel-item v-for="item in 4" :key="item">
               <img src="../images/b.jpg" style="width:100%;height:100%"/>
            </el-carousel-item>
          </el-carousel>
        
        </el-tab-pane>
      </el-tabs>

    </div>

    <div class="index-3">
      <ul>
        <li>
          <img src="../images/33_03.jpg" style="height:3rem"/>
          <span>私人FM</span>
        </li>
         <li>
          <img src="../images/33_05.jpg" style="height:3rem"/>
          <span>每日推荐</span>
        </li>
         <li>
          <img src="../images/33_07.jpg" style="height:3rem"/>
          <span>歌单</span>
        </li>
         <li>
          <img src="../images/33_09.jpg" style="height:3rem"/>
          <span>排行榜</span>
        </li>
      </ul>
    </div>

    <div class="index-4">
      <p class="index-4-p1">&nbsp;推荐歌单&nbsp;&nbsp;></p>

      <div class="index-4-box">
        <el-row>
          <el-col :span="8" v-for="(value, index) in this.$store.state.store1.musicType" :key="index" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }" >

              <div @click="toMusicList(index)">
                <img :src="iip+value.img" class="image">
                <div style="padding: 0.3rem;">
                  <span>{{value.name}}</span>
                </div>
              </div>

            </el-card>
          </el-col>
        </el-row>
      </div>
    
    </div>


    <div class="index-bottom-f">
      
    </div>

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
      activeName: 'second',
      currentDate: new Date(),
      iip:"http://192.168.43.182:3000/"
    }
  },

  mounted(){
      this.$store.dispatch("getMusicType")
    },

  methods:{
     handleClick(tab, event) {
        console.log(tab, event);
      },
    toMusicList(index){
      this.$store.commit("getMusicTypeIndex",index)
      this.$router.push("/musicList")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul,li{
  margin:0px;
  padding:0px;
}
.index-top{
  width:100%;
  height:4rem;
  background:#db383c;
  display:flex;
  align-items:center;
 justify-content:space-between;
}
.sousuo{
  width:16.7rem;
  height:1.9rem;
  border:0px;
  border-radius:1.5rem;
  background:white;
  font-size:0.9rem;
  text-align:center;
}
.index-top-img1{
  height:1.5rem;
  margin-left:0.9rem;
}
.index-top-img2{
  height:1.5rem;
  margin-right:0.9rem;
}
.ss-icn{
  position:absolute;
  left: 4.6rem
}
.banner{
  width:100%;
}
.index-3{
  width:100%;
  margin-top:1rem;
}
.index-3 ul{
  width:100%;
  display:flex;
  flex-direction:row;
  justify-content:space-around
}
.index-3 li{
  list-style:none;
  display:flex;
  flex-direction:column;

}
.index-4-p1{
  height:1rem;
  font-size:1rem;
  border-left:0.2rem solid #dc3730;
  line-height:1rem;
}
.index-4-box>div{

}
.index-4-box>div>div{
  margin-left:0px;
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







 .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }



    .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 7.4rem;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
