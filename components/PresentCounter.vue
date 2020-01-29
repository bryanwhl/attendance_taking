<template>
<div id="boxcontainer">
  <div class="box is-overlay has-background-success has-text-white" id="counterbox">
    <p>Present:</p>
  </div>
</div>
</template>

<script>
export default {};
</script>

<style>
#counterbox {
  height: 2rem;
  width: 7rem;
  padding: 0.3rem 0.4rem;
  margin-left: auto;
}
#boxcontainer {
    position: fixed;
    display: flex;
    bottom: 0;
    right: 5%;
    height: 10vh;
    width: 10vw;
    z-index: 3000;
}
</style>