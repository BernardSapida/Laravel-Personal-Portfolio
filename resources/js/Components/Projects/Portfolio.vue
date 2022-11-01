<template>
    <section class="container p-3 my-5">
        <article>
            <p class="title mb-5">Projects</p>
        </article>
        <article class="projects-figure">
            <figure>
                <img src="images/Projects/Burgerhub.png" alt="Burgerhub">
                <div class="image-cover" @click="redirectTo('https://burgerhub.x10.mx/')">
                    <div class="circle">
                        <p>Visit Project</p>
                    </div>
                </div>
            </figure>
            <figure>
                <img src="images/Projects/NumberBaseConverter.png" alt="Number Base Converted">
                <div class="image-cover" @click="redirectTo('https://number-base-converter.vercel.app/')">
                    <div class="circle">
                        <p>Visit Project</p>
                    </div>
                </div>
            </figure>
            <figure>
                <img src="images/Projects/Mukbang101.png" alt="Mukbang101">
                <div class="image-cover" @click="redirectTo('https://mukbang101.x10.mx/')">
                    <div class="circle">
                        <p>Visit Project</p>
                    </div>
                </div>
            </figure>
        </article>
    </section>
</template>

<script>
    export default {
        methods: {
            redirectTo(link) {
                console.log(link)
                window.open(link, '_blank');
            }
        }
    }
</script>

<style lang="scss" scoped>
    section.container {
        margin-bottom: 150px !important;

        & article {
            & p.title {
                font-size: 5rem;
                font-weight: bolder;
                color: hsl(180, 100%, 43%);
            }

            &.projects-figure {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 10px;

                & figure {
                    position: relative;
                    width: 300px;
                    overflow: hidden;
                    cursor: pointer;

                    & img {
                        width: 100%;
                        transition: ease-in-out 350ms all;
                    }

                    & div.image-cover {
                        display: grid;
                        place-items: center;
                        position: absolute;
                        top: 0;
                        left: 0;
                        height: 100%;
                        width: 100%;
                        opacity: 0;
                        background: rgba(255, 255, 255, 0.8);
                        transition: ease-in-out 350ms all;

                        & div.circle {
                            padding: 20px;
                            display: grid;
                            place-items: center;
                            height: 100px;
                            width: 100px;
                            border-radius: 50%;
                            background-color: hsl(180, 100%, 43%);

                            & p {
                                margin: 0;
                                text-align: center;
                                color: hsl(0, 0%, 0%);
                                font-weight: light;
                                font-size: 14px;
                            }
                        }
                    }

                    &:hover > img, &:hover > div.image-cover {
                        opacity: 1;
                        transform: scale(1.2);
                    }
                }
            }
        }
    }

    @media screen and (max-width: 1200px){
        section.container article p.title {
            font-size: 5rem;
        }
    }
    
    @media screen and (max-width: 992px){
        section.container article p.title {
            font-size: 4rem;
        }
    }

    @media screen and (max-width: 396px){
        section.container article p.title {
            font-size: 3rem;
        }
    }

    @media screen and (max-width: 313px){
        section.container article {
            & p.title {
                font-size: 2.5rem;
            }
        }
    }
</style>