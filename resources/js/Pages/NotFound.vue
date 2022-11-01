<template>
    <section>
        <Navigation />
        <Landing />
        <Portfolio />
        <Myself />
        <Contact />
        <Footer />
    </section>
</template>

<script>
    import Navigation from "../Components/Global/Navigation";
    import Landing from "../Components/Home/Landing";
    import Portfolio from "../Components/Home/Portfolio";
    import Myself from "../Components/Home/Myself";
    import Contact from "../Components/Home/Contact";
    import Footer from "../Components/Global/Footer";

    export default {
        components: {
            Navigation,
            Landing,
            Portfolio,
            Myself,
            Contact,
            Footer
        },  
    }
</script>

<style lang="scss" scoped>
</style>