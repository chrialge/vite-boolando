<script>
import ProductCard from './ProductCard.vue';
import ModularProductCard from './ModularProductCard.vue';

import { state } from '../state.js'
export default {
    name: 'AppMain',
    data() {
        return {
            img: '',
            state,
            displayModal: true,
            productModal: false,
            functionBadge: '',
            functionCalc: '',

        }
    },
    components: {
        ProductCard,
        ModularProductCard
    },
    methods: {
        showProdcut(product, functionBadge, functionCalc) {
            console.log('ciao show-prodcut da PRodcutCard ' + product);
            console.log(functionCalc)
            this.productModal = product;
            if(this.displayModal == true){
              this.displayModal = false;  
            }else{
                this.displayModal =true
            }
            this.functionBadge = functionBadge;
        }
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

                <ProductCard :key="product.id" :product="product" v-for="product in state.products"
                    @show-product="showProdcut(product, functionBadge, Number(functionCalc))" />

            </div>


        </div>


    </main>

    <div v-if="productModal">
        <ModularProductCard :display="this.displayModal" :product="productModal" :functionBadge="functionBadge" :functionCalc="functionCalc" @show-product="showProdcut(product, functionBadge)"/>
    </div>
    <!-- /#site-main -->
</template>
<style></style>