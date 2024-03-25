<script>
import LogoApp from './LogoApp.vue';
export default {
    name: 'AppHeader',
    components: {
        LogoApp
    },
    data() {
        return {
            genders:
            [
                'Uomini',
                'Donne',
                'Bambini',
            ],
            classWidgets:
            [
                'fa-regular fa-user',
                'fa-regular fa-heart',
                'fa-solid fa-bag-shopping'
            ]
        }
    },
    mounted(){

    }
}
</script>
<template>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <div class="container-md">
            <a class="navbar-brand d-lg-none" href="#">
                <LogoApp />
            </a>
            <button class="navbar-toggler border-white" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon text-white"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item" v-for="gender in genders">
                        <a class="nav-link text-white" aria-current="page" href="#">
                            {{ gender }}
                        </a>
                    </li>
                </ul>
            </div>
            <a class="navbar-brand  d-none d-lg-block" href="#">
                <LogoApp />
            </a>
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="classWidget in classWidgets">
                        <a class="nav-link text-white fs-5" aria-current="page" href="#">
                            <i :class="classWidget"></i>
                            <span class="d-lg-none ms-2 fs-6">Sign up</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>
<style></style>