// store.js
import { reactive } from 'vue';
import axios from 'axios';

export const state = reactive({
    message: 'ciao',
    products: [],
    base_product_api_url: 'http://localhost:3000/products',

    /**
     * function get objetcs from the json server
     * @param {string} url of the json server
     */
    getProducts(url) {
        axios.get(url)
            .then(response => {
                // console.log(response.data)
                this.products = response.data
                // console.log(this.products)
            })
    }

})