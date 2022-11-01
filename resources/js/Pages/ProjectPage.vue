<template>
    <section>
        <div class="square-1"></div>
        <div class="square-2"></div>
        <Navigation />
        <Portfolio />
        <Footer />
    </section>
</template>

<script>
    import Navigation from "../Components/Global/Navigation";
    import Portfolio from "../Components/Projects/Portfolio";
    import Footer from "../Components/Global/Footer";

    export default {
        components: {
            Navigation,
            Portfolio,
            Footer
        },  
    }
</script>

<style lang="scss" scoped>
    section {
        position: relative;
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