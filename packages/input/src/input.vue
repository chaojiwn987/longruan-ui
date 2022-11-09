<template>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
  </template>

  <script>
    export default {
		name:"LRInput",
      data() {
        return {
          input:""
        }
      }
    }
  </script>