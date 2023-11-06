<template>
    <section class="px-3 my-2 py-2 bg-white text-start">
        <SelectComp :visible="typeOption" @close-this="typeOption=false"></SelectComp>
        <div class="d-flex option-one py-2 align-items-center justify-content-between" @click="typeOption=true">
            <div class="text-secondary">Order Type</div>
            <div class="text-end">LIMIT <span class="ml-4">&#62;</span></div>
        </div>
        <div class="d-flex option-one py-2 align-items-center justify-content-between w-100">
            <div class="text-secondary w-50">Price</div>
            <div class="input-group input-group-sm  w-50">
                <span class="input-group-text" @click="decreaseValue('price')">&#8211;</span>
                <input type="text" class="form-control text-center" aria-label="Amount (to the nearest dollar)" v-model="inpPriceFormat">
                <span class="input-group-text" @click="increaseValue('price')">+</span>
            </div>
        </div>
        <div class="d-flex option-one py-2 align-items-center justify-content-between">
            <div class="text-secondary">Qty</div>
            <div class="input-group input-group-sm  w-50">
                <span class="input-group-text" @click="decreaseValue('qty')">&#8211;</span>
                <input type="text" class="form-control text-center" aria-label="qty" v-model="inpQty">
                <span class="input-group-text" @click="increaseValue('qty')">+</span>
            </div>
        </div>
    </section>
</template>
<script lang="ts">
import SelectComp from './SelectComp.vue';
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
    components: {
        SelectComp
    },
    setup() {
        const inpPrice = ref(1);
        const inpQty = ref(1);
        const typeOption = ref(false);

        const inpPriceFormat = computed(() => {
            return Number(inpPrice.value)+'.00';
        });

        const increaseValue = (type:any) => {
            if(type === "price"){
                inpPrice.value++;
            } else {
                inpQty.value++;
            }
        };

        const decreaseValue = (type:any) => {
            if(type === "price"){
                if (inpPrice.value > 1) {
                    inpPrice.value--;
                }
            } else {
                if (inpQty.value > 1) {
                    inpQty.value--;
                }
            }
        };

        return {
            inpPrice,
            inpPriceFormat,
            inpQty,
            typeOption,
            increaseValue,
            decreaseValue
        }
    }
});
</script>