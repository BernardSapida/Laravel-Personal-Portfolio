<template>
    <section>
        <Navigation />
        <Myself />
        <Footer />
    </section>
</template>

<script>
    import Navigation from "../Components/Global/Navigation";
    import Myself from "../Components/Experience/Myself";
    import Footer from "../Components/Global/Footer";

    export default {
        components: {
            Navigation,
            Myself,
            Footer
        },  
    }
</script>

<style lang="scss" scoped>
</style>