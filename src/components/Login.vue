<template>

  <div>

    <div class="login-top">
      <label class="to-back" @click="toBack"><</label>
      <span class="login-title">手机登录</span>
      <span></span>
    </div>

    <div class="login-inpbox">
      <input type="text" placeholder="手机号" class="user-inp user-name" v-model="userName"/>
      <input type="text" placeholder="密码" class="user-inp user-psd" v-model="userPad"/>
      <input type="button" value="登录" class="login-btn" @click="userLogin"/>
      <router-link to="reg">重设密码</router-link>
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
      userLogin(){
        console.log("123123123")
        if(this.userName == "" || this.userPad == ""){
          console.log("请输入账号或密码")
      
        }else{
          axios.post("http://192.168.43.182:3000/login", {
            userName:this.userName,
            userPad:this.userPad,
            findType:"exact"
          }).then((data) => {
                if(data.data.length == 1){
                  this.$router.push("/index")
                }else{
                  console.log("账号或密码错误")
                }
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
  margin-top:1rem;
  display:flex;
  flex-direction:column;
  align-items:center;
}
.user-inp{
  width:21.3rem;
  height:3rem;
  font-size:1rem;
  border:0px;
  border-bottom:1px solid #dee1e1;
  outline:none;
  text-indent:3.6rem;
}
.user-name{
  background:url(../images/1_07.jpg) no-repeat 1rem center;
  background-size:1rem
}
.user-psd{
  background:url(../images/1_03.png) no-repeat 1rem center;
  background-size:1rem
}
.login-btn{
  width:21.3rem;
  height:3rem;
  background:#d33d32;
  font-size:1rem;
  color:#fff9e0;
  border:0px;
  border-radius:1.5rem;
  margin-top:1.8rem;
  margin-bottom:1.8rem;
  outline:none;
}
</style>

