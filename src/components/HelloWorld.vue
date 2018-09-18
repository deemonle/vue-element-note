<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>

  <el-menu default-active="2" mode="horizontal">
    <el-row>
      <el-col :xs="12" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple">
          a'aaa
        </div>  
        </el-col>
      <el-col :xs="0" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :xs="0" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
      <el-col :xs="12" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
    <el-menu-item index="1">处理中心</el-menu-item>
    <el-menu-item index="2">处理中心</el-menu-item>
    <el-submenu index="3">
      
    </el-submenu>
    
  </el-menu>
  </el-container>
</template>
  

<script>
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
