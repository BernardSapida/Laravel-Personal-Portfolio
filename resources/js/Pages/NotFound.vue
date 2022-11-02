<template>
    <section>
        <Navigation/>  
        <article>
            <div>
                <p class="error">404</p>
                <p class="info">Page not found</p>
            </div>
        </article>
    </section>
</template>

<script>
    import Navigation from "../Components/Global/Navigation";
    import Footer from "../Components/Global/Footer";

    export default {
        components: {
            Navigation,
            Footer
        },  
    }
</script>

<style lang="scss" scoped>
    @import url(https://fonts.googleapis.com/css?family=Gilda+Display);

    section {
        article {
            height: 80vh;
            width: 100%;
            position: relative;
            display: grid;
            place-items: center;
            overflow: hidden;

            & div {
                p.error {
                    margin: auto;
                    position: relative;
                    width: max-content;
                    color: hsl(0, 0%, 100%);
                    text-align: center;
                    font-family: 'Gilda Display', serif;
                    font-size: 7rem;
                    font-style: italic;
                    text-align: center;
                    overflow: hidden;
                    line-height: 1;
                    animation: noise 2s linear infinite;
            
                    &:after {
                        content: '404';
                        font-family: 'Gilda Display', serif;
                        font-size: 7rem;
                        font-style: italic;
                        text-align: center;
                        margin: auto;
                        position: absolute;
                        opacity: 0;
                        color: rgb(0, 60, 255);
                        animation: noise-1 .2s linear infinite;
                    }
                    
                    &:before {
                        content: '404';
                        font-family: 'Gilda Display', serif;
                        font-size: 7rem;
                        font-style: italic;
                        text-align: center;
                        margin: auto;
                        position: absolute;
                        opacity: 0;
                        color: rgb(255, 0, 43);
                        animation: noise-2 .2s linear infinite;
                    }
                }

                & p.info {
                    margin: auto;
                    width: 200px;
                    position: relative;
                    text-align: center;
                    font-family: 'Gilda Display', serif;
                    font-size: 18px;
                    font-style: italic;
                    text-align: center;
                    overflow: hidden;
                    animation: noise-3 1s linear infinite;
                }
            }
        } 
    }

    @keyframes noise-1 {
        0%, 20%, 40%, 60%, 70%, 90% {opacity: 0;}
        10% {opacity: .1;}
        50% {opacity: .5; left: -6px;}
        80% {opacity: .3;}
        100% {opacity: .6; left: 2px;}
    }

    @keyframes noise-2 {
        0%, 20%, 40%, 60%, 70%, 90% {opacity: 0;}
        10% {opacity: .1;}
        50% {opacity: .5; left: 6px;}
        80% {opacity: .3;}
        100% {opacity: .6; left: -2px;}
    }

    @keyframes noise {
        0%, 3%, 5%, 42%, 44%, 100% {opacity: 1; transform: scaleY(1);}  
        4.3% {opacity: 1; transform: scaleY(1.7);}
        43% {opacity: 1; transform: scaleX(1.5);}
    }

    @keyframes noise-3 {
        0%,3%,5%,42%,44%,100% {opacity: 1; transform: scaleY(1);}
        4.3% {opacity: 1; transform: scaleY(4);}
        43% {opacity: 1; transform: scaleX(10) rotate(60deg);}
    }
</style>