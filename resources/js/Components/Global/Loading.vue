<template>
    <section>
        <div class="container px-3 text-center">
            <img class="mb-2" src="images/logo/BS-Logo.png" alt="Bernard Sapida Logo" width="40" height="40">
            <p>Bernard is preparing</p>
            <div class="loading mx-auto"></div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                hasOpenLoading: false,
                type: 'circles'
            }
        }
    }
</script>

<style lang="scss" scoped>
    section {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        background: hsl(0, 0%, 7%);
        display: grid;
        place-items: center;
        z-index: 10;

        & div.container {
            & p {
                color: hsl(0, 0%, 100%);
                font-size: 14px;
            }
            & div.loading {
                position: relative;
                max-width: 400px;
                width: 100%;
                height: 2px;
                background-color: hsl(0, 0%, 5%);

                &:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 50%;
                    height: 100%;
                    background-image: linear-gradient(to right, hsl(197, 100%, 50%), hsl(342, 100%, 50%));;
                    animation: load-progress 2500ms forwards;
                }
            }
        }
    }

    @keyframes load-progress {
        0% {
            width: 0%;
        }
        100% {
            width: 100%;
        }
    }
</style>