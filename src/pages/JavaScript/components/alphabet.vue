<template>
  <div>
    <ul class="list" >
      <li class="item"
        v-for="(item, key) of city"
        :key="key"
        @click="handleLetter"
      >{{key}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    city: Object
  },
  methods: {
    handleLetter (e) {
      this.$emit('change', e.target.innerText)
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/style/mixin";
  .list{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 5rem;
    right: .5rem;
    bottom: 0;
    width: 1rem;
    .item{
      line-height: 1.5rem;
      text-align: center;
      font-size: 80%;
      &:hover{
        @include hover-color;
      }
    }
  }
</style>
