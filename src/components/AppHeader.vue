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
                <div class="col">
                    <!-- gender -->
                    <ul class="sidebar list-unstyled d-flex">
                        <li><a class="text-decoration-none text-white" href="#">Donna</a></li>
                        <li><a class="text-decoration-none text-white" href="#">Uomo</a></li>
                        <li><a class="text-decoration-none text-white" href="#">Bambini</a></li>
                    </ul>
                    <!-- /gender -->
                </div>
                <div class="logo col">
                    <!-- logo -->
                    <img src="/images/boolean-logo.png" alt="">
                    <!-- /logo -->
                </div>

                <div class="widget col">
                    <!-- widget shop-user-like-->
                    <a href="#"><i class="fa-regular fa-user"></i></a>
                    <a href="#"><i class="fa-regular fa-heart"></i></a>
                    <a href="#"><i class="fa-solid fa-bag-shopping"></i></a>
                    
                    <!-- /widget shop-user-like -->
                </div>
            </div>





        </div>
    </header>
</template>
<style></style>