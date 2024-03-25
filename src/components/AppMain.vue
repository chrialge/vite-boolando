<script>
import ProductCard from './ProductCard.vue';
import { state } from '../state.js'
export default {
    name: 'AppMain',
    data() {
        return {
            img: '',
            state
        }
    },
    components: {
        ProductCard
    },
    mounted() {
        
        this.state.getProducts(this.state.base_product_api_url)
        // console.log(this.state.products)
    }
}
</script>
<template>
    <!-- site main -->
    <main id="site-main">

        <div class="container">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">

                <ProductCard :key="product.id" :product="product" v-for="product in state.products" />

            </div>


        </div>


    </main>
    <!-- /#site-main -->
</template>
<style></style>