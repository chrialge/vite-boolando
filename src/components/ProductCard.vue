<script>
export default {
    name: 'ProductCard',
    value:'',
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
        favorite() {
            if (this.product.isInFavorite === false) {
                this.product.isInFavorite = true
            } else {
                this.product.isInFavorite = false
            }
        },
        generateDiscount(type) {
            for (let i = 0; i < this.product.badges.length; i++) {
                const badge = this.product.badges[i];
                // console.log(badge)
                if (badge.type === type) {
                    // console.log(badge.value)
                    
                    return this.value = badge.value
                }
            }
        },
        generateCalcDiscount(value){
            console.log(1-(value/100))
            if(value == undefined){
                console.log('ciao')
            }
        }
    },
    mounted() {
        // console.log(this.generateDiscount('discount') === undefined)
    }

}
</script>

<template>
    <!--product -->
    <div class="product col">
        <div class="card">
            <!-- image with badges -->
            <img :src="'/images/' + product.images.front" class="card-img-top" :alt="'image of dress ' + product.brand"
                @mouseenter="changeImg(this.index)" @mouseleave="returnImg(this.index)">
            <div class="heart" :class="{ 'heart-red': product.isInFavorite === true }" @click="favorite()"> &#9829;</div>
            <div class="badges">
                <div class="sales inline-block-container" 
                    v-if="this.generateDiscount('discount') !== undefined">
                    -{{ value}}%
                </div>
                <div class="sostenibility inline-block-container" 
                    v-if="this.generateDiscount('tag') !== undefined">
                    {{value}}
                </div>

            </div>
            <!-- /image with badges -->

            <!-- card body -->
            <div class="card-body">
                <h6 class="card-subtitle mb-2 text-muted ">{{ product.brand }}</h6>
                <h5 class="card-title">{{ product.gener }}</h5>
                <div class="price">
                    <div class="price">
                        <div class="price-at-the-moment" v-if="this.generateDiscount('discount') == undefined ? this.value = 0 : this.generateDiscount('discount')">
                            {{ (product.price - ((product.price * generateCalcDiscount(value)) / 100) ).toFixed(2) }} &euro;
                        </div>
                        <div class="full-price" v-if="this.generateDiscount('discount') !== undefined">
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