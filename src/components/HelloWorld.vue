<template>
  <div>
    <div class="header">
      <div class="header-left">
        <span>Note</span>  
      </div>
      <div class="header-right">
        <span>mulu</span>  
      </div>
      
    </div>
    <div class="dropdown-content">
      <div class="dropdown-content-item">JavaScript</div>
      <div class="dropdown-content-item">CSS</div>
      <div class="dropdown-content-item">Html</div>
      <div class="dropdown-content-item">Vue.js</div>
      <div class="dropdown-content-item">Others</div>
      <div class="dropdown-content-item">GitHub</div>
      <input class="dropdown-content-input" placeholder="请输入需要搜索的内容">
    </div>
    <div class="block">
      <el-carousel height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>


    <div class="card">
      <div class="card-title1">
        aa
      </div>
      <div class="card-title2">
        aa
      </div>
      <div class="card-title3">
        aa
      </div>
    </div>
    <div class="card">

    </div>
    <div class="card">

    </div>
    <div class="card">

    </div>
    <div class="card">

    </div>

  </div>
</template>
  

<script>
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @mixin main-color{
    background-color: #0a64a4;
  }

  .header{
    height: 3.5rem;
    width: 100%;
    display: flex;
    position: fixed;
    font-size: 1.5rem;
    flex-direction: row;
    justify-content: space-between;
    @include main-color;
    color: #fff;
    &-left {
      padding-left: 1.5rem;
      padding-top: 1rem;
      &:hover{
        color: #65a5d2;
      }
    }
    &-right {
      padding-right: 1.5rem;
      padding-top: 1rem;
      &:hover{
        color: #65a5d2;
      }
    }
  }
  .dropdown-content{
    width: 100%;
    display: none;
    position: fixed;
    min-height: 0rem;
    flex-direction: column;
    @include main-color;
    color: #fff;
    overflow: hidden;
    // animation: content-animation-close .8s;
    &-item {
      padding-left: 1.5rem;
      padding-top: 1rem;
      height: 1.8rem;
      text-align: left;      
    }
    &-input{
      border: .1rem;
      border-radius: .2rem;
      font-size: 1rem;
      padding: 0 .5rem;
      height: 2rem;
      margin: 1rem 1.5rem;         
    }
  }

  @keyframes content-animation-open {
    from{max-height: 0rem;}
    to{max-height: 15rem;}
  }
  @keyframes content-animation-close {
    from{max-height: 10rem;}
    to{max-height: 0rem;}
  }
  .carousel{
    margin-top: 5rem !important; 
  }
  .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 150px;
      margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
    }
    
    .el-carousel__item:nth-child(2n+1) {
    }
  .card{
    border-bottom: 1px solid #eeeeee;
    height: 10rem;
    flex: 1;
    display: flex;
    flex-direction: row;
    width: 90%;
    margin: 0 5%;
    // @include main-color;
    background-color: #ffffff;
    &-title1{
      flex: 1;
      height: 2rem;
      font-size: 2rem;
    }
    &-title2{
      flex: 1;
      height: 2rem;
      font-size: 1.5rem;
    }
    &-title3{
      flex: 1;
      height: 2rem;
      font-size: 1rem;
    }
  }

</style>
