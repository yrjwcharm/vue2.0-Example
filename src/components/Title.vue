<template>
  <div class="title_container">
    <img @click="goBack" src="../assets/back.png" style="height:17px ; width:9px ">
    <span style=" text-align:center;color:#333;font-size: 16px;">{{title}}</span>
    <span/>
  </div>
</template>

<script>
export default {
  name: "Title",
  props:["title"],
  methods:{
    goBack:function(){
      window.postMessage(JSON.stringify({back:true}))
      alert('ahahah');
    }

  }

}
</script>

<style scoped>
.title_container {
  /*padding-inline: 10px;*/
  padding-left: 10px;
  padding-right: 10px;
  background-color: #fff;
  height: 44px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between
}


</style>
