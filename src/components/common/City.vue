<template>
  <div>
    <div class="area">
    <div class="search">
      <input class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
    </div>
    <div class="list" ref="wrapper">
      <div>
        <div class="area">
          <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">beijing</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div
            class="button-wrapper"
            v-for="item of hotCities"
            :key="item.id">
              <div class="button">{{item.name}}</div>
            </div>
          </div>
        </div>
        <div
        class="area"
        v-for="(item, key) of cities"
        :key = "key"
        >
          <div class="title border-topbottom">{{key}}</div>
          <div class="item-list">
            <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            >
              {{innerItem.name}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <ul class="lista">
      <li>a</li>
      <li>a</li>
      <li>a</li>
      <li>a</li>
      <li>a</li>
      <li>a</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import Bscroll from 'better-scroll'
export default {
  // name: 'City',
  data () {
    return {
      cities: {},
      hotCities: []
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handleHetCityInfo)
    },
    handleHetCityInfo (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
    this.getCityInfo()
  }
}
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
      padding-right: .5rem;
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

  .list{
    overflow: hidden;
    position: absolute;
    top: 5rem;
    left: 0;
    right: 0;
    bottom: 0;
    font-size: .9rem;
    .title{
      line-height: 1rem;
      text-align: left;
      background: #eee;
      padding: .5rem 1rem;;
      color: #666;
    }
    .button-list{
      overflow: hidden;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      padding: .5rem 1rem .5rem .5rem;
      .button-wrapper{
        flex-basis: 32%;
        .button{
          margin: .4rem;
          padding: .4rem 0;
          text-align: center;
          border: .1rem solid #ccc;
          border-radius: .2rem;
        }
      }
    }
    .item-list{
      .item{
        text-align: left;
        line-height: 2rem;
        padding-left: 1rem;
      }
    }
  }
  .lista{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 5rem;
    right: .5rem;
    bottom: 0;
    width: 1rem;
    .itema{
      line-height: .4rem;
      text-align: center;
    }
  }
</style>
