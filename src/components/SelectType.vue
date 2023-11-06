<template>
    <div class="position-fixed w-100 bg-white start-0 p-0 rounded" style="bottom: -400%; z-index: 100;">
        <div class="d-flex justify-content-between py-4 text-center">
            <div class="w-25" @click="CloseThis">Cancel</div>
            <div class="w-50">Select Order Type</div>
            <div class="w-25 text-primary" @click="CloseThis">Confirm</div>
        </div>
        <div class="date-selector position-relative bg-muted">
            <div class="overlay-bottom position-absolute"></div>
            <div class="overlay-top position-absolute"></div>
            <div class="knob position-absolute"></div>
            <div class="year" id="year1" style="height: 40vh; width: 100%; overflow-y: scroll; scroll-snap-type: y mandatory;">
                <div v-for="(option,key) in OrderOptions" :key="key" class="text-center py-4" style="  scroll-snap-align: start;">
                    {{ option }}
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import orderType from "@/data/orderType";

export default defineComponent({
    emits: ['close-select'],
    setup(props, {emit}) {
        const OrderOptions = orderType;
        const CloseThis = () => {
            emit('close-select');
        }
        
        return {
            CloseThis,
            OrderOptions,
        }
    }
})
</script>
<style>
.overlay-top {
    bottom:0%;
    width: 100%;
    height: 15vh;
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,1) 49%, rgba(255,255,255,0.0032387955182072714) 100%);

}

.overlay-bottom {
    top:0%; 
    width: 100%;
    height: 5vh;
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,1) 49%, rgba(255,255,255,0.0032387955182072714) 100%);
}

.knob {
    top:0%; width: 100%; height: 15vh; background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,1) 49%, rgba(255,255,255,0.0032387955182072714) 100%);
}
</style>