<script setup>
import * as THREE from 'three'
import { onMounted, ref } from 'vue'

onMounted(() => {
  showCube()
})

const container = ref()
const showCube = () => {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setAnimationLoop(animate)
  renderer.setSize(container.value.clientWidth, container.value.clientHeight)
  container.value.appendChild(renderer.domElement)

  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 }) // FF0000
  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  camera.position.z = 5

  function animate() {
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    renderer.render(scene, camera)
  }
}
</script>

<template>
  <div id="info">Demo1 旋转立方体</div>

  <div class="demo-container">
    <div ref="container" id="container"></div>
  </div>
</template>

<style scoped lang="scss">
body {
  margin: 0;
  padding: 0;
}

#info {
  position: absolute;
  top: 10px;
  width: 100%;
  text-align: center;
  z-index: 100;
  display: block;
  color: azure;
}

#container {
  width: 100vw;
  height: 85vh;
}
</style>
