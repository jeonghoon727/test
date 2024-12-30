<template >
<div style="padding : 10px">
  <h4>팔로워</h4>
  <input placeholder="?" @input="search($event.target.value)" />
  <div class="post-header" v-for="(a, i) in follower" :key="i">
    <div class="profile" :style="`background-image:url(${a.image})`"></div>
    <span class="profile-name">{{a.name}}</span>
  </div>
</div>
</template>
<script>
import axios from 'axios';
import {onMounted, ref} from 'vue';
export default {
    name: 'MyPage',
    props: { 
        one: Number,
    },
    setup(){
        let follower = ref([]);
        // let {one} = toRefs(props);
        // console.log(one.value);
        function search(){

        }

        onMounted(() =>{
            axios.get('/follower.json').then((a) =>{
            follower.value = a.data
            })
        })

        return{follower, search}
    },
    data(){
        return {

        }
    },
}
</script>
<style >
    
</style>