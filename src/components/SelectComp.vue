<template>
    <div
        class="overlay start-0 top-0 position-fixed bg-dark w-100"
        :class="{ 'visible-overlay':visible }"
        style="z-index:100; height: 100vh;"></div>
    <SelectType :class="{ 'visible-container':visible }" @close-select="closeNow"></SelectType>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import SelectType from './SelectType.vue';

export default defineComponent({
    components: {
        SelectType
    },
    props: {
        visible: {
            type: Boolean,
            default() {
                return false;
            }
        },
    },
    emits: ['close-this'],
    setup(props,{emit}) {
        const closeNow = () => {
            emit('close-this');
        };

        return {
            closeNow
        }
    }
})
</script>
<style>
.overlay {
    opacity: 0;
    display: none;
}
.visible-overlay {
    opacity: .6;
    transition: opacity 3s;
    display: block;
}
.visible-container {
    transform: translate(0, 10vh);
    transition: all .5s;
    bottom:0% !important;
}
</style>