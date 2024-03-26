<script>
export default {
    name: 'ModularProductCard',
    props:{
        product: Object,
        functionBadge: String,
        functionCalc: Number,
        value: Number,
        display: Boolean,
    },
    data(){
        return {
   
        }
    },mounted(){
        console.log(this.display)
        console.log(this.functionCalc)
    }

}
</script>
<template>
    <div class="modal_card" :class="{ 'visibility-modular': this.display == false, 'disp': display == true }">
        <div class="modal_container">
            <div class="left">
                <img :src="'/images/' + product.images.front" class="card-img-top"
                    :alt="'image of dress ' + product.brand">
            </div>
            <div class="right">
                <h6><b>Brand:</b> {{ product.brand }}</h6>
                <h6><b>Type:</b> {{ product.gener }}</h6>
                <h6><b>Price Full:</b> {{ product.price }} &euro;</h6>
                <h6 v-if="functionBadge != undefined">
                    <b>Price with Discount:</b>
                    {{ (product.price - ((product.price * functionCalc))).toFixed(2) }} &euro;
                </h6>
                <button @click="$emit('show-product', product, functionBadge)">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>

        </div>
    </div>
</template>



<style lang="scss"></style>