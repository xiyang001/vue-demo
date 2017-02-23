<template>
  <div>
    <movie :dataList="dataList"></movie>
  </div>
</template>
<style>

</style>
<script>
    import movie from './Movie.vue'
    export default{
        data(){
            return{
                dataList:''
            }
        },
        created(){
            this.getdata()
        },
        methods:{
            getdata:function(){
                this.$http.get('https://api.douban.com/v2/movie/new_movies', {}, {
                    headers: {},
                    emulateJSON: true
                }).then(function(res){
                    this.dataList=res.body.subjects;
                    console.log(this.dataList)
                }).then(function(res){
                    console.log(res)
                })
            }
        },
        components:{movie}
    }
</script>
