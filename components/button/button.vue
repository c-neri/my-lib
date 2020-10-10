<template>
  <button 
    class="my-button"
    
    :class=[{rounded:isRounded},{big:isBig}] >
    {{ value }}
  </button>
</template>

<script>
export default {
  name: 'my-button',
  props: {
    value: {
      type: String,
      required: true
    },
    isRounded:{
      type:Boolean
    },
    isBig:{
      type:Boolean
    }
  }
}
</script>

<style scoped>
.my-button{
  border: none;
  padding:8px 15px;
}
.button{
  padding: 10px 20px;
}
.rounded{
  border-radius:20px;
}
.big{
  padding: 15px 30px;
  size: 20px;
}
</style>