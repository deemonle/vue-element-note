<template>
  <div>
    <el-menu class="el-menu-demo" mode="horizontal">
      <el-row>
        <el-col :xs="12" :sm="6" :md="4" :lg="3" :xl="1">
          <div class="grid-content bg-purple">
            <el-menu-item index="1">Home</el-menu-item>
          </div>
        </el-col>
        <el-col :xs="0" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :xs="0" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
        <el-col :xs="12" :sm="6" :md="4" :lg="3" :xl="1">
          <div class="grid-content bg-purple-light">
            <el-submenu index="2">
              <template slot="title">Cont</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
          </div>
        </el-col>
      </el-row>

      
      
    </el-menu>
    <el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple hidden-xs-only"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
  </div>
</template>
  

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  body{
    margin: 0;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #99a9bf;
  }
  .bg-purple-light {
    background: #99a9bf;
  }
  .grid-content {
    min-height: 36px;
  }
</style>
