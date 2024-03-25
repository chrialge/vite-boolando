<script>
export default {
    name: 'ProductCard',
    props: {
        product: Object,
    },
    data() {
        return {
            img: '',
        }
    },
    methods: {
        changeImg() {
            this.img = this.product.images.front
            this.product.images.front = this.product.images.back
        },
        returnImg() {
            this.product.images.front = this.img
        },
        favorite(){
            if(this.product.isInFavorite === false){
                this.product.isInFavorite = true
            }else{
                this.product.isInFavorite = false 
            }
        }
    },
}
</script>

<template>
    <!--product -->
    <div class="product col">
        <div class="card">
            <!-- image with badges -->
            <img :src="'/images/' + product.images.front" class="card-img-top" :alt="'image of dress ' + product.brand" @mouseenter="changeImg(this.index)"
                @mouseleave="returnImg(this.index)">
            <div class="heart" :class="{'heart-red': product.isInFavorite === true}" @click="favorite()"> &#9829;</div>
            <div class="badges">
                <div class="sales inline-block-container" :class="{ 'display-none': product.badges.discount == false }">
                    {{ product.badges.discount}}%
                </div>
                <div class="sostenibility inline-block-container"
                    :class="{ 'display-none': product.badges.sostenibility == false }">Sostenibilita</div>
            </div>
            <!-- /image with badges -->

            <!-- card body -->
            <div class="card-body">
                <h6 class="card-subtitle mb-2 text-muted ">{{ product.brand }}</h6>
                <h5 class="card-title">{{ product.gener }}</h5>
                <div class="price">
                    <div class="price">
                        <div class="price-at-the-moment">{{(product.price - ((product.price * product.badges.discount)/100)).toFixed(2) }} &euro;</div>
                        <div class="full-price" :class="{ 'display-none': product.badges.discount == false }">
                            <s>{{ product.price }} &euro;</s>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /card body -->
        </div>
    </div>
    <!-- /product -->
</template>



<style lang="scss" scoped></style>