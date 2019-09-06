<template>

  <div>

    <div class="login-top">
      <label class="to-back" @click="toBack"><</label>
      <span class="login-title">手机号注册</span>
      <span></span>
    </div>

    <div class="login-inpbox">
      <div class="div-user-name">
        <img src="../images/1_03.png" class="un-icn"/>
        <span class="un-bl">+86</span>
        <input type="text" placeholder="手机号" class="user-name" v-model="userName"/>
      </div>
      
      <input type="text" placeholder="设置登录密码，不少于6位" class="user-inp user-psd" v-model="userPad"/>
      <input type="button" value="下一步" class="login-btn" @click="userReg"/>
    </div>

  </div>

</template>

<script>
import axios from "axios"
export default {
  name: 'HelloWorld',
  data () {
    return {
      userName: '',
      userPad:""
    }
  },
  methods:{
    toBack(){
      this.$router.back(-1)
    },
    userReg(){
        if(this.userName == "" || this.userPad == ""){
          console.log("请输入账号或密码")
        }else{
          axios.post("http://192.168.43.182:3000/add", {
            userName:this.userName,
            userPad:this.userPad
          }).then((data) => {
 
                  this.$router.push("/login")

            })
        }
          
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
  text-decoration:none;
}
.login-top{
  display:flex;
  width:100%;
  height:4rem;
  background:#d33d32;
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
.login-inpbox{
  margin-left:1.05rem;
  margin-top:1rem;
  display:flex;
  flex-direction:column;
  align-items:center;
}
.div-user-name{
  width:21.3rem;
  height:3rem;
  font-size:1.03rem;
  border:0px;
  border-bottom:1px solid #dee1e1;
  display:flex;
   align-items:center;
}
.un-icn{
  margin-left:0.5rem;
  width:0.9rem
}
.un-bl{
  margin-left:0.6rem;
}
.user-name{
  width:16.7rem;
  height:2.25rem;
  border:0px;
  outline:none;
  margin-left:0.8rem;
  font-size:1.15rem;
}
.user-inp{
  width:21.3rem;
  height:3rem;
  font-size:1.05rem;
  border:0px;
  border-bottom:1px solid #dee1e1;
  outline:none;
  text-indent:2.8rem
}
.user-psd{
  background:url(../images/1_07.jpg) no-repeat 0.4rem center;
  background-size:0.9rem
}
.login-btn{
  width:21.3rem;
  height:3rem;
  background:#d33d32;
  font-size:1rem;
  color:#fff9e0;
  border:0px;
  border-radius:1.5rem;
  margin-top:1.6rem;
  margin-bottom:1.6rem;
}
</style>