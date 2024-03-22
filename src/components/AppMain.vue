<script>
import ProductCard from './ProductCard.vue'
import {products} from '../products'
export default {
    name: 'AppMain',
    data() {
        return {
            img: '',
           products
        }
    },
    components:{
        ProductCard
    },
    mounted() {
        console.log(this.products)
    }

}
</script>
<template>
    <!-- site main -->
    <main id="site-main">

        <div class="container">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">

                <ProductCard :key="product.id" :product="product" :index="index" v-for="(product, index) in products"/>
               
            </div>


        </div>


    </main>
    <!-- /#site-main -->
</template>
<style></style>