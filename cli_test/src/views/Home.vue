<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!-- intellisense for named style module doesn't work: typing [$a.] is't show the popup despite on $style is. But [$style] works only for single style module -->
    <div :class="$a.blue">Test splitted css</div>
    <div>{{ $a }}</div>
    <br />
    <div :class="$b.blueSass">Test splitted scss</div>
    <div>{{ $b }}</div>
  </div>
</template>

<style module="$a" src="./myStyle.module.css">
/*
  .test-class doesn't join with css - it's replaced by css;
  you can import css to module only via [src] attr
 */
.test-class-css {
  color: white;
}
</style>

<style module="$b" lang="scss">
/*
  you can import scss and extend style in single module;
  if you can just one <style module> you can use it without names - in this case VSCode intellisense works fine
*/
@import "./myStyle.module.scss";

.test-class-scss {
  color: white;
}
</style>
