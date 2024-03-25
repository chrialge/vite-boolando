<script>
import ProductCard from './ProductCard.vue';
import { store } from '../state.js'
export default {
    name: 'AppMain',
    data() {
        return {
            img: '',
            store
        }
    },
    components: {
        ProductCard
    },
    mounted() {

        this.store.getProducts(this.store.base_product_api_url)
        console.log(this.store)
    }
}
</script>
<template>
    <!-- site main -->
    <main id="site-main">

        <div class="container">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">

                <ProductCard :key="product.id" :product="product" v-for="product in store.products" />

            </div>


        </div>


    </main>
    <!-- /#site-main -->
</template>
<style></style>