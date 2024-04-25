<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0">
      <img
        style="width: 100px"
        src="https://element-plus.gitee.io/images/element-plus-logo.svg"
        alt="Element logo"
      />
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">这个没啥用</el-menu-item>
    <el-sub-menu index="2">
      <template #title>这个还是没啥用</template>
      <el-menu-item index="2-1">说了没用还点</el-menu-item>
      <el-menu-item index="2-2">说了没用还点</el-menu-item>
      <el-menu-item index="2-3">说了没用还点</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script>
export default {
  name: 'Header',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>
