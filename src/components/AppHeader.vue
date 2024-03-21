<script>

export default {
    name: 'AppHeader',
    data() {
        return {

        }
    }
}
</script>
<template>
    <header id="site-header">
        <div class="container">
            <div class="row flex-nowrap justify-content-betwee align-items-center">

                <!-- gender -->
                <div class="col">
                    <ul class="sidebar list-unstyled d-flex">
                        <li><a class="text-decoration-none text-white" href="#">Donna</a></li>
                        <li><a class="text-decoration-none text-white" href="#">Uomo</a></li>
                        <li><a class="text-decoration-none text-white" href="#">Bambini</a></li>
                    </ul>
                </div>
                <!-- /gender -->

                <!-- logo -->
                <div class="logo col">
                    <img src="/images/boolean-logo.png" alt="">
                </div>
                <!-- /logo -->

                <!-- widget shop-user-like-->
                <div class="widget col">
                    <a href="#"><i class="fa-regular fa-user"></i></a>
                    <a href="#"><i class="fa-regular fa-heart"></i></a>
                    <a href="#"><i class="fa-solid fa-bag-shopping"></i></a>
                </div>
                <!-- /widget shop-user-like -->
                
            </div>





        </div>
    </header>
</template>
<style></style>