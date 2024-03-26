<script>

export default {
    name: 'ProductCard',
    value: '',
    props: {
        product: Object,
    },
    components: {
    },
    data() {
        return {
            img: '',
            display: true,
        }
    },
    methods: {
        /**
         * function change image during event @mouseenter on the img
         */
        changeImg() {
            this.img = this.product.images.front
            this.product.images.front = this.product.images.back
        },
        /**
         * function return previous image during event @mouseleave of the img
         */
        returnImg() {
            this.product.images.front = this.img
        },
        /**
         * function change color heart for value of product.isInFavorite durin event @click of the heart
         */
        favorite() {
            if (this.product.isInFavorite === false) {
                this.product.isInFavorite = true
            } else {
                this.product.isInFavorite = false
            }
        },
        /**
         * function generate badge
         * @param {string} type value of product.badges.type
         * @returns value of product.badges.value
         */
        generateBadges(type) {
            for (let i = 0; i < this.product.badges.length; i++) {
                const badge = this.product.badges[i];
                // console.log(badge)
                if (badge.type === type) {
                    // console.log(badge.value)

                    return this.value = badge.value
                }else{
                    
                }
            }
        },
        /**
         * function generate CALC discount/100
         * @param {number} value return of the function generateBadges('discount')
         * @returns number 
         */
        generateCalcDiscount(value) {
            if (value == 1) {
                return value = 0
            } else {
                return value = value / 100
            }
        },
    },
    mounted() {
    }
}
</script>

<template>
    <!--product -->
    <div class="product col">

        <div class="card rounded-2" @click="$emit('show-product', product)">

            <!-- image with badges -->
            <img :src="'/images/' + product.images.front" class="card-img-top" :alt="'image of dress ' + product.brand"
                @mouseenter="changeImg(this.index)" @mouseleave="returnImg(this.index)">
            <div class="heart" :class="{ 'heart-red': product.isInFavorite === true }" @click="favorite()"> &#9829;
            </div>
            <div class="badges">
                <div class="sales inline-block-container" v-if="this.generateBadges('discount') !== undefined">
                    -{{ value }}%
                </div>
                <div class="sostenibility inline-block-container" v-if="this.generateBadges('tag') !== undefined">
                    {{ value }}
                </div>

            </div>
            <!-- /image with badges -->

            <!-- card body -->
            <div class="card-body">
                <h6 class="card-subtitle mb-2 text-muted ">{{ product.brand }}</h6>
                <h5 class="card-title">{{ product.gener }}</h5>
                <div class="price">
                    <div class="price">
                        <div class="price-at-the-moment"
                            v-if="this.generateBadges('discount') == undefined ? this.value = 1 : this.generateBadges('discount')">
                            {{ (product.price - ((product.price * generateCalcDiscount(value)))).toFixed(2) }} &euro;
                        </div>
                        <div class="full-price" v-if="this.generateBadges('discount') !== undefined">
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