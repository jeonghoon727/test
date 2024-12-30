import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state(){
    return {
      name : 'kim',
      age: 20,
      likes: [30, 50, 40],
      좋아요눌럿니 : false,
      more : {},
    }
  },
  mutations : {
    setMore(state, data){
        state.more = data
    },
    좋아요(state){
        if(state.좋아요눌럿니 == false){
            state.likes++
            state.좋아요눌럿니 == true;
        }else{
            state.likes--
            state.좋아요눌럿니 == false;
        }
    },
    증가(state){
        state.age++
    },
    이름변경(state){
        state.name = 'park'
    },
  },
  actions : {
    getdata(context){
        axios.get('https://codingapple1.github.io/vue/more0.json').then( (a) =>{
           context.commit('setMore',a.data)
        })
    },
  },
})

export default store;