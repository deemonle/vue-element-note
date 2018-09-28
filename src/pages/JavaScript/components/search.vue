<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音">
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
@import "@/assets/style/mixin";
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
</style>
