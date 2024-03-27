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

                if (badge.type.includes(type)) {
                    this.value = badge.value
                    return true
                }
            }
        },
    },
    computed: {
        generateCalc() {
            this.generateBadges('discount')
            if (this.value == "Sostenibilità") {
                return this.value = 0
            } else {
                return this.value = this.value / 100
            }
        }
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
                <div class="sales inline-block-container" v-if="this.generateBadges('discount')">
                    -{{ this.value }}%
                </div>
                <div class="sostenibility inline-block-container" v-if="this.generateBadges('tag')">
                    {{ this.value }}
                </div>

            </div>
            <!-- /image with badges -->

            <!-- card body -->
            <div class="card-body">
                <h6 class="card-subtitle mb-2 text-muted ">{{ product.brand }}</h6>
                <h5 class="card-title">{{ product.gener }}</h5>
                <div class="price">
                    <div class="price">
                        <div class="price-at-the-moment">
                            {{ (product.price - ((product.price * generateCalc))).toFixed(2) }} &euro;
                        </div>
                        <div class="full-price" v-if="generateCalc != 0">
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