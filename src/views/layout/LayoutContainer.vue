<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const switchDemo = (id) => {
  router.push(`/demo${id}`)
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <!-- 顶栏 -->
      <el-header class="header">
        <div class="title">Three.js 案例演示</div>
        <el-button @click="switchDemo(1)" style="margin-left: 10px">Demo1</el-button>
        <el-button @click="switchDemo(2)">Demo2</el-button>
      </el-header>

      <el-main class="main"> <router-view /></el-main>

      <el-footer class="footer">
        <div class="footer-context">Author: ZZHow(ZZHow1024)</div>
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
body {
  margin: 0;
  padding: 0;
}

.common-layout {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;

  .header {
    height: 8vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: pink;
    display: flex;
    align-items: center;

    .title {
      margin-left: 30px;
      font-size: 30px;
      align-content: center;
    }
  }

  .main {
    position: fixed;
    top: 8vh;
    left: 0;
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 85vh;
  }

  .footer {
    background: pink;
    width: 100%;
    height: 7vh;
    bottom: 0;
    left: 0;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    .footer-context {
      align-content: center;
    }
  }
}
</style>
