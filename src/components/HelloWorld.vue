<template>
  <div class="body">
    <div class="header">
      <div class="header-left">
        <span>Note</span>
      </div>
      <div class="header-right">
        <i class="iconfont iconfont-size-2">&#xe601;</i>
      </div>  
    </div>

    <div class="search">
      <div class="search-input">
        <i class="iconfont iconfont-size-1-2 search-input-icon">&#xe632;</i>
      </div>   
    </div>
    
    <div class="dropdown-content"> 
      <router-link :to="'home'">
        <div class="dropdown-content-item">JavaScript<i class="iconfont iconfont-size-1">&#xe64e;</i></div>
      </router-link>
      <div class="dropdown-content-item">CSS<i class="iconfont iconfont-size-1">&#xe64e;</i></div>
      <div class="dropdown-content-item">Html<i class="iconfont iconfont-size-1">&#xe64e;</i></div>
      <div class="dropdown-content-item">Vue.js<i class="iconfont iconfont-size-1">&#xe64e;</i></div>
      <div class="dropdown-content-item">Others<i class="iconfont iconfont-size-1">&#xe64e;</i></div>
      <div class="dropdown-content-item">GitHub<i class="iconfont iconfont-size-1">&#xe64e;</i></div>
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
  @mixin bg-color{
    background-color: #ffffff;
  }
  
  body{
    width: 100%;
  }

  @mixin border-style{
    border-bottom: 1px solid #eeeeee;
  }

  @mixin hover-color{
    color: #2ebaae;
  }

  @mixin header-font-color{
    color: #222;
  }
  @mixin content-font-color{
    color: #555;
  }
  
  .iconfont-size-1{
    font-size: 1rem;
  }

  .iconfont-size-1-2{
    font-size: 1.5rem;
  }

  .iconfont-size-2{
    font-size: 2rem;
  }

  .search{
    margin: 1.5rem 1.5rem .5rem 1.5rem;
    display: flex;
    height: 3rem;
    &-input{
      flex: 1;
      height: 2rem;
      display: flex;
      flex-direction: row-reverse;
      padding-left: .5rem;
      border: 1px solid #eeeeee;
      border-radius: .2rem;
      font-size: .9rem;   
      &-icon{
        padding: .25rem .25rem;
        width: 2rem;
        &:hover{
          @include hover-color;
        }
      }
    }  
  }
  .header{
    height: 3rem;
    width: 100%;
    display: flex;
    // position: fixed;
    font-size: 1.4rem;
    flex-direction: row;
    justify-content: space-between;
    @include border-style;
    @include bg-color;
    @include header-font-color;
    &-left {
      padding: .8rem 1.5rem;
      &:hover{
        @include hover-color;
      }
    }
    &-right {
      padding: .5rem 1.5rem;
      border-left: 1px solid #eeeeee;
      &:hover{
        @include hover-color;
      }
    }
  }
  .dropdown-content{
    width: 100%;
    display: flex;
    // position: fixed;
    min-height: 0rem;
    flex-direction: column;
    font-size: .9rem;
    @include bg-color;
    @include content-font-color;
    &-item {
      margin: 0 1.5rem;
      padding: .6rem .5rem;
      display: flex;
      justify-content: space-between;
      @include border-style;
      text-align: left;  
      &:hover{
        @include hover-color;
      }  
    }
    &-input{
      border: .1rem;
      border-radius: .2rem;
      font-size: .9rem;
      padding: 0 .5rem;
      height: 2rem;
      margin: 2rem 1.5rem 1rem 1.5rem;
      border: 1px solid #eeeeee;     
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
    // @include bg-color;
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
