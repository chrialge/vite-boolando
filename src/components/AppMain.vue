<script>
export default {
    name: 'AppMain',
    data() {
        return {
            img: '',
            products: [
                {

                    gener: "RELAXED FIT TEE UNISEX",
                    brand: "Levi's",
                    badges:
                    {
                        discount: '50%',
                        sostenibility: true
                    },
                    price:
                    {
                        priceDiscount: 14.99,
                        fullPrice: 29.99
                    },
                    images:
                    {
                        front: '1.webp',
                        back: '1b.webp',
                    },
                },
                {

                    gener: "ROSES TEE",
                    brand: "Guess",
                    badges:
                    {
                        discount: '30%',
                        sostenibility: false
                    },
                    price:
                    {
                        priceDiscount: 20.99,
                        fullPrice: 29.99
                    },
                    images:
                    {
                        front: '2.webp',
                        back: '2b.webp',
                    },
                },
                {

                    gener: "VOGLIA DI COLORI PASTELLO",
                    brand: "Come Zucchero Filato",
                    badges:
                    {
                        discount: '30%',
                        sostenibility: false
                    },
                    price:
                    {
                        priceDiscount: 129.99,
                        fullPrice: 184.99
                    },
                    images:
                    {
                        front: '3.webp',
                        back: '3b.webp',
                    },
                },
                {

                    gener: "TEE UNISEX",
                    brand: "Levi's",
                    badges:
                    {
                        discount: '50%',
                        sostenibility: true
                    },
                    price:
                    {
                        priceDiscount: 14.99,
                        fullPrice: 29.99
                    },
                    images:
                    {
                        front: '4.webp',
                        back: '4b.webp',
                    },
                },
                {

                    gener: "STRIPE BODICE",
                    brand: "Maya Deluxe",
                    badges:
                    {
                        discount: false,
                        sostenibility: false
                    },
                    price:
                    {
                        priceDiscount: 99.99,
                        fullPrice: false
                    },
                    images:
                    {
                        front: '5.webp',
                        back: '5b.webp',
                    },
                },
                {

                    gener: "ROSES TEE",
                    brand: "Guess",
                    badges:
                    {
                        discount: false,
                        sostenibility: true
                    },
                    price:
                    {
                        priceDiscount: 29.99,
                        fullPrice: false
                    },
                    images:
                    {
                        front: '6.webp',
                        back: '6b.webp',
                    },
                },

            ]
        }
    },
    methods: {
        changeImg(index) {
            console.log(this.products[index])
            this.img = this.products[index].images.front
            this.products[index].images.front = this.products[index].images.back
        },
        returnImg(index) {
            this.products[index].images.front = this.img
        }
    },
    mounted(index) {
        console.log(this.products)
    }

}
</script>
<template>
    <!-- site main -->
    <main id="site-main">

        <div class="container">
            <div class="row">

                <!--product -->
                <div class="product col-4" v-for="(product, index) in products">
                    <div class="card" >
                        <!-- image with badges -->
                        <img :src="'/images/' + product.images.front" class="card-img-top" alt="..."
                            @mouseenter="changeImg(index)" @mouseleave="returnImg(index)">
                        <div class="heart"> &#9829;</div>
                        <div class="badges">
                            <div class="sales inline-block-container"
                                :class="{ 'display-none': product.badges.discount == false }">{{ product.badges.discount }}
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
                                    <div class="price-at-the-moment">{{ product.price.priceDiscount }} &euro;</div>
                                    <div class="full-price"
                                        :class="{ 'display-none': product.price.fullPrice == false }">
                                        <s>{{ product.price.fullPrice }} &euro;</s>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /card body -->
                    </div>
                </div>
                <!-- /product -->
            </div>


        </div>


    </main>
    <!-- /#site-main -->
</template>
<style></style>