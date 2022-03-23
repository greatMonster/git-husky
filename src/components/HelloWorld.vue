<template>
    <div class="child-1">
        <p>props: {{pChild1}}111</p>
        <p>$attrs: {{$attrs}}</p>
        <child2 v-bind="$attrs"></child2>
    </div>
</template>
<script>
  import Child2 from './HelloWorld2.vue';
  export default {
      props: ['pChild1'],
      components: { Child2 },
      inheritAttrs: false,
      mounted() {
          this.$emit('test1'); // 触发APP.vue中的test1方法
          console.log(this.$children, 666)
      }
  };
</script>