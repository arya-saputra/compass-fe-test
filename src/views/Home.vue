<template>
  <div class="home">
    <SectionOne></SectionOne>
    <SectionTwo></SectionTwo>
    <SectionThree></SectionThree>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SectionOne from '@/components/SectionOne.vue'; // @ is an alias to /src
import SectionTwo from '@/components/SectionTwo.vue';
import SectionThree from '@/components/SectionThree.vue';

export default defineComponent({
  name: 'Home',
  components: {
    SectionOne,
    SectionTwo,
    SectionThree
},
});
</script>
