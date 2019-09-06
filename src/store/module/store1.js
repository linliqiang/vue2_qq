import axios from "axios"

export default {
  state: { 
    musicType:[],
    musicTypeIndex:0,
    musicListIndex:0,
    audioTimeAll:0,
    audioTime:0,
   },

  mutations: { 
    getMusicType(state,data){
      state.musicType = data
    },

    getMusicTypeIndex(state,data){
      state.musicTypeIndex = data
    },

    getMusicListIndex(state,data){
      state.musicListIndex = data
    },
    getMusicListIndexDel(state){
      if(state.musicListIndex != 0){
        state.musicListIndex = state.musicListIndex - 1
      }else{
        state.musicListIndex = state.musicType[state.musicTypeIndex].wangyiyunMusic.length-1
      }
    },
    getMusicListIndexAdd(state){
      if(state.musicListIndex < state.musicType[state.musicTypeIndex].wangyiyunMusic.length-1){
        state.musicListIndex = state.musicListIndex+1
      }else{
        state.musicListIndex = 0
      }
    },

    audioTimeAll(state){
     
    },
    audioTime(state){
     
    },



    getMusic(state,data){
      state.music = data
    },

  },
  actions: { 
      
    getMusicType(context){

      axios.post("http://192.168.43.182:3000/getMusicType", {
        submitType:"findJoin",
        ref:["wangyiyunMusic",""]
      }).then((data) => {
          context.commit("getMusicType",data.data)
        })

    },

    getMusicList(context,id){



      axios.post("http://192.168.43.182:3000/getMusic", {
          id:id
      }).then((data) => {
        context.commit("getMusicType",data.data)
        })

    },

    getMusic(context,id){

      axios.post("http://192.168.43.182:3000/getMusic", {
          id:id
      }).then((data) => {
        context.commit("getMusicType",data.data)
        })

    },


     
  },


  getters: { 

  }
}



