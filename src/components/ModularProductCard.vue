<script>
export default {
    name: 'ModularProductCard',
    props: {
        product: Object,
        display: Boolean,
    },
    data() {
        return {
            valueDiscount: '',
        }
    },
    methods: {
        productprice() {
            for (let i = 0; i < this.product.badges.length; i++) {
                const discount = this.product.badges[i];
                if (discount.type.includes('discount')) {
                    this.valueDiscount = discount.value / 100
                    return true
                }
            }

        }
    },
    mounted() {
    }

}
</script>
<template>
    <div class="modal_card"
        :class="{ 'visibility-modular': this.display == false, 'visibility-hidden': display == true }">
        <div class="modal_container">
            <div class="left">
                <img :src="'/images/' + product.images.front" class="card-img-top"
                    :alt="'image of dress ' + product.brand">
            </div>
            <div class="right">
                <h6><b>Brand:</b> {{ product.brand }}</h6>
                <h6><b>Type:</b> {{ product.gener }}</h6>
                <h6><b>Price Full:</b> {{ product.price }} &euro;</h6>
                <h6 v-if="productprice() == true">
                    <b>Price with Discount:</b>
                    {{ (product.price - ((product.price * Number(valueDiscount)))).toFixed(2) }} &euro;
                </h6>
                <button @click="$emit('show-product', product)">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>

        </div>
    </div>
</template>



<style lang="scss"></style>