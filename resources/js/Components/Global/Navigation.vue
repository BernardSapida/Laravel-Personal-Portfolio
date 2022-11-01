<template>
    <header class="container">
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
                <div class="container-name">
                    <router-link :class="[{'active': $route.name == 'homepage'}, 'nav-link', 'm-0']" :to="{ name: 'homepage' }"><strong class="navbar-brand">Bernard Sapida</strong></router-link>
                    <p class="name-label m-0">Frontend Developer</p>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link :class="[{'active': $route.name == 'homepage'}, 'nav-link']" :to="{ name: 'homepage' }">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :class="[{'active': $route.name == 'projectPage'}, 'nav-link']" :to="{ name: 'projectPage' }">Projects</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :class="[{'active': $route.name == 'experiencePage'}, 'nav-link']" :to="{ name: 'experiencePage' }">Experience</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :class="[{'active': $route.name == 'contactPage'}, 'nav-link']" :to="{ name: 'contactPage' }">Contact</router-link>
                        </li>
                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link text-white" href="https://github.com/BernardSapida" target="_blank">
                                <icon icon="fa-brands fa-github" />
                                <span class="d-md-inline d-lg-none">Github</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="https://www.linkedin.com/in/bernardsapida/" target="_blank">
                                <icon icon="fa-brands fa-linkedin" />
                                <span class="d-md-inline d-lg-none">Linkedin</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="https://www.instagram.com/wuzzupzo/" target="_blank">
                                <icon icon="fa-brands fa-instagram" />
                                <span class="d-md-inline d-lg-none">Instagram</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="https://www.facebook.com/wuzzupZo/" target="_blank">
                                <icon icon="fa-brands fa-facebook" />
                                <span class="d-md-inline d-lg-none">Facebook</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        props: {
            activeLink: String
        },
    }
</script>

<style lang="scss" scoped>
    header.container {
        padding: 20px 0;
        & nav.navbar {
            & div.container-fluid {
                & div.container-name {
                    p.name-label {
                        color: hsl(0, 0%, 44%);
                        font-size: 14px;
                    }
                }
            }
        }
    }
</style>