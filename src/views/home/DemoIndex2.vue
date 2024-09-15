<script setup>
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import { OrbitControls } from 'three/addons/controls/OrbitControls'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader'
import { onMounted, ref } from 'vue'

onMounted(() => {
  init()
  animate()
})

const container = ref()
let camera, scene, renderer
const init = () => {
  camera = new THREE.PerspectiveCamera(
    90,
    container.value.clientWidth / container.value.clientHeight,
    0.1,
    10000
  )
  renderer = new THREE.WebGLRenderer({ antialias: true })

  camera.position.set(50, 200, 500)

  scene = new THREE.Scene()

  renderer.setClearColor(new THREE.Color(0xf7f2f1))
  renderer.setSize(container.value.clientWidth, container.value.clientHeight)
  renderer.shadowMap.enabled = true

  container.value.appendChild(renderer.domElement)

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.target = new THREE.Vector3(0, 0, 0)

  loadLight()
  load3D()
}

// 载入 3D 模型
const load3D = () => {
  const loader = new GLTFLoader()
  const dracoLoader = new DRACOLoader()
  dracoLoader.setDecoderPath('https://threejs.org/examples/jsm/libs/draco/')
  dracoLoader.preload()
  loader.setDRACOLoader(dracoLoader)

  loader.load(
    'https://threejs.org/examples/models/gltf/LittlestTokyo.glb',
    (gltf) => {
      scene.add(gltf.scene)
      renderer.render(scene, camera)
    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
      console.error(error)
    }
  )
}

// 环境光
const loadLight = () => {
  const ambient = new THREE.AmbientLight(0xffffff)
  scene.add(ambient)
  const pointLight = new THREE.PointLight(0xffffff, 0.5)
  pointLight.position.set(100, 200, 500)
  pointLight.color.setHSL(255, 255, 255)
  scene.add(pointLight)
}

const animate = () => {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}
</script>

<template>
  <div id="info">Demo2 载入3D模型<br />模型加载较慢，请稍候</div>

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
  color: black;
}

#container {
  width: 100vw;
  height: 85vh;
}
</style>
