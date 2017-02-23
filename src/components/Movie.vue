<template>
    <div>
      <ul class="movieBox clearfix">
        <li class="movieList" v-for="item in dataList">
          <div class="wrap front">
            <img v-bind:src="item.images.large">
            <div class="title">{{item.title}}</div>
          </div>
          <div class="wrap reverse">
            <div>
              <strong>名称:</strong>
              <strong>{{item.title}}</strong>
            </div>
            <div>
              <strong>年份:</strong>
              <strong>{{item.year}}年</strong>
            </div>
            <div>
              <strong>类型:</strong>
              <span v-for="genres in item.genres">{{genres}}</span>
            </div>
            <div>
              <strong>评分:</strong>
              <span>{{item.rating.average}}</span>
            </div>
            <div>
              <strong>主演:</strong>
              <span v-for="casts in item.casts">{{casts.name}}</span>
            </div>
            <div>
              <strong>详情:</strong>
              <a :href="item.alt" target="_blank">查看详情</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>
<style>
    a{text-decoration:none;}
    .clearfix:after {content: "." ;display: block ;height: 0 ;clear: both ;visibility: hidden ;}
    .clearfix{ display: block; }
    .movieBox{width:990px;margin:0 auto;}
    .movieList{width:300px;height:450px;float:left;margin:15px;position:relative;transform-style:preserve-3d; transform-origin: right center;}
    .movieList img{width:100%;height:100%;}
    .title{width:100%;height:30px;position:absolute;left:0;bottom:0;background:rgba(0,0,0,.8);color:#fff;text-align:center;line-height:30px;}
    .movieList .wrap{width:100%;height:100%;position:absolute;left:0;top:0;backface-visibility: hidden;}
    .movieList .front{transition:.8s all;}
    .movieList .reverse{transform:rotateY(-180deg);transition:.8s all;background:rgba(0,0,0,.5);padding:20px;}
    .movieList:hover .front{transform:rotateY(180deg);}
    .movieList:hover .reverse{transform:rotateY(0deg);}
    .reverse div{line-height:36px;}
    .reverse span,.reverse a{padding:5px 8px;background:blue;color:#fff;margin-right:5px;border-radius:3px;}
</style>
<script>
    export default{
        props:{
          dataList:''
        },
        data(){
            return{
                msg:'hello vue'
            }
        }
    }
</script>
