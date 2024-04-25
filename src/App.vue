<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main> <router-view /></el-main>
      <el-footer><Footer /></el-footer>
    </el-container>
  </div>

</template>

<style></style>
<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Main',
  components: {
    Header,
    Footer
  }
}
</script>