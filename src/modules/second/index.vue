<template>
  <div>
    <h1>实时播报</h1>
    <button @click="handleChange">handleChange</button>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: 1
    }
  },
  methods: {
    handleChange() {
      this.$router.push(`/secondPage/params/${this.page++}`);
    }
  }
}
</script>