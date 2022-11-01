<template>
    <section>
        <Navigation />
        <Contact />
    </section>
</template>

<script>
    import Navigation from "../Components/Global/Navigation";
    import Contact from "../Components/Contact/Contact";

    export default {
        components: {
            Navigation,
            Contact
        },  
    }
</script>

<style lang="scss" scoped>
</style>