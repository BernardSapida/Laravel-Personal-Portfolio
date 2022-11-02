<template>
    <section>
        <div class="square-1"></div>
        <div class="square-2"></div>
        <Navigation />
        <Loading v-if="isLoading" />
        <Portfolio />
        <Footer />
    </section>
</template>

<script>
    import Navigation from "../Components/Global/Navigation";
    import Loading from "../Components/Global/Loading";
    import Portfolio from "../Components/Projects/Portfolio";
    import Footer from "../Components/Global/Footer";

    export default {
        components: {
            Navigation,
            Loading,
            Portfolio,
            Footer
        },
        mounted() {
            setTimeout(() => {
                this.isLoading = false;
            }, 3200);
        },
        data() {
            return {
                isLoading: true,
            }
        }
    }
</script>

<style lang="scss" scoped>
    section {
        overflow-x: hidden;

        & div.square-1 {
            position: fixed;
            top: -50px;
            right: -20px;
            height: 200px;
            width: 200px;
            border: 2px solid hsla(0, 0%, 100%, 0.05);
            transform: rotate(25deg);
            border-radius: 10px;
            z-index: -1;
        }

        & div.square-2 {
            position: fixed;
            bottom: 0;
            left: -20px;
            height: 200px;
            width: 200px;
            border: 2px solid hsla(0, 0%, 100%, 0.05);
            transform: rotate(45deg);
            border-radius: 10px;
            z-index: -1;
        }
    }
</style>