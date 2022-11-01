<template>
    <section>
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
</style>