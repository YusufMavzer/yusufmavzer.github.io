<template>
  <div>
    <h1>{{ text }}</h1>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
export default Vue.extend({
  data() {
    return {
      text: "Hello World!",
      
    }
  }
});
</script>