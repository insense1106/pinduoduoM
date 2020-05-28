<template>
  <div class="root">
      <div class="header">
       
            <!-- 左边 -->
          <i class="icon-music"></i>
        <!-- 中间 -->
          <form >
          <i class="icon-search "></i>

          <input type="text" :placeholder="input" class="search">
          </form>
        <!-- 右边 -->

        <i class="icon-mic"></i>
         
      </div>
      <div class="nav">
          <a href="">个性推荐</a>
          <a href="">歌单</a>
          <a href="">主播电台</a>
          <a href="">排行榜</a>
      </div>
      <main>
          <section class="content">
            <div class="main_nav">
                <dl>
                    <dt class=" icon-music"></dt> <dd>文字信息</dd>
                </dl>
                <dl> 
                    <dt class=" icon-music"></dt> <dd>文字信息</dd>
                </dl>
                <dl> 
                    <dt class=" icon-music"></dt> <dd>文字信息</dd>
                </dl>
            </div>

          </section>
      </main>
      <footer></footer>
  </div>
</template>

<script>
export default {
  name: 'neteasecloud',
  components: {},
  data() {
    return {
        input:'请输入搜索内容'

    }
  },
computed: {},
watch: {},
created() {},mounted() {},methods: {}
}
</script>

<style  scoped>
.root{
    /* height: 100%; */
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.header{
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(180, 120, 120);
}
.header>i:first-child{
    padding-left: 30px;
}
.header>i:last-child{
    padding-right:30px;
}

form{
    flex:1;
    align-self: center;
    display: flex;
   align-items: center;
   border-radius: 5px;
}
.header form input{
    flex:1;
    padding-left: 30px;
    
}
.header form i{
    /* padding-left: 60px; */
    /* display: flex; */
    align-items: center;
    position: relative;
    left:30px;
    color:dimgray

}
.nav{
    height: 40px;
    background-color: rgb(113, 166, 235);
    display: flex;
    justify-content: space-between;
}
a{
    /* flex:1; */
    text-decoration:none;
    padding-bottom: 16px;
    border-bottom: 3px solid;
    padding: 0 12px;
}
main{
    flex:1;

    background-color: rgb(168, 231, 86);
    overflow: auto;
}
.content{
    height:100%;
}
.main_nav{
    display: flex;
    height:7vh;
    justify-content: center;
  
}
.main_nav {
    display: flex;

}
dl{
    width:33.3%;

    display: flex;

    justify-content: center;
    flex-direction: column;
    align-items: center;
}
dt{
    width:50px;
    height:50px;
    background-color: rgb(216, 118, 118);
    border:1px solid;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>