<script>
export default {
    name: 'ModularProductCard',
    props:{
        product: Object,
        functionBadge: Number,
        functionCalc: Number,
        value: Number,
    },
    data(){
        return {
            display: true,
        }
    },mounted(){

    }

}
</script>
<template>
    <div class="modal_card" :class="{ 'display': this.display == false, 'disp': this.display == true }">
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
                <button @click="showProduct(display)">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>

        </div>
    </div>
</template>



<style lang="scss"></style>