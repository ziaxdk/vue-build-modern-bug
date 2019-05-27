<template>
  <div>Message: {{ msg }}</div>
</template>

<script>
import { url } from '@/utils.js'

export default {
  data: () => ({
    msg: null
  }),
  name: 'app',
  mounted () {
    this.msg = url('input')
  }
}
</script>

<style>
</style>
