<template>
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
          v-for="item of hot"
          :key="item.id"
        >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div
        class="area"
        v-for="(item, aa) of cities"
        :key="aa"
        :ref="aa"
      >
        <div class="title border-topbottom">{{aa}}</div>
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
</template>

<script>

import Bscroll from 'better-scroll'
export default {
  // name: 'City',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  data: function () {
    return { a: 1 }
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        console.log(this.$parent)
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style scoped lang="scss">
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
</style>
