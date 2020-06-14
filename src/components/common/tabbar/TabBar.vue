<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>
<script>

export default {
    name:"TabBar",
    
}
</script>
<style>
 #tab-bar{
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right:0;
    bottom: 0;

    box-shadow: 0 -2px 3px rgba(100,100,100,.09);
  }
</style>