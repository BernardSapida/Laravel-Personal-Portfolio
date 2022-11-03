<template>
    <section class="container p-3 my-5">
        <article data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-delay="2500">
            <p class="title mb-5">
                <span class="animation" @mouseover.stop="hoverMe($event)">P</span><span class="animation" @mouseover.stop="hoverMe($event)">r</span><span class="animation" @mouseover.stop="hoverMe($event)">o</span><span class="animation" @mouseover.stop="hoverMe($event)">j</span><span class="animation" @mouseover.stop="hoverMe($event)">e</span><span class="animation" @mouseover.stop="hoverMe($event)">c</span><span class="animation" @mouseover.stop="hoverMe($event)">t</span><span class="animation" @mouseover.stop="hoverMe($event)">s</span>
            </p>
        </article>
        <article class="projects-figure">
            <figure data-aos="flip-up" data-aos-easing="ease-in-out">
                <img src="images/Projects/Burgerhub.png" alt="Burgerhub">
                <div class="image-cover" @click="redirectTo('https://burgerhub.x10.mx/')">
                    <div class="circle">
                        <p>Visit Project</p>
                    </div>
                </div>
            </figure>
            <figure data-aos="flip-down" data-aos-easing="ease-in-out">
                <img src="images/Projects/NumberBaseConverter.png" alt="Number Base Converted">
                <div class="image-cover" @click="redirectTo('https://number-base-converter.vercel.app/')">
                    <div class="circle">
                        <p>Visit Project</p>
                    </div>
                </div>
            </figure>
            <figure data-aos="flip-up" data-aos-easing="ease-in-out">
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
        mounted() {
            let spans = document.querySelectorAll(".animation");
            let spansLength = spans.length;

            setTimeout(() => {
                let time = setInterval(() => {
                    if(spansLength != 0) {
                        spans[spans.length - spansLength].classList.add("rubber");
                        spansLength -= 1;
                    } else {
                        setTimeout(() => {
                            spans.forEach(span => {
                                span.classList.remove("rubber")
                            });
                            clearInterval(time);
                        }, 700);
                    }
                }, 150);
            }, 3000); 
        },
        methods: {
            redirectTo(link) {
                window.open(link, '_blank');
            },
            hoverMe(e) {
                if(e.target.className.split(" ")[e.target.className.split(" ").length - 1] != "rubber") {
                    e.target.classList.add("rubber");

                    setTimeout(() => {
                        e.target.classList.remove("rubber");
                    }, 750);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    section.container {
        margin-top: 20px !important;
        margin-bottom: 80px !important;

        & article {
            & p.title {
                font-size: 5rem;
                font-weight: bolder;
                color: hsl(180, 100%, 43%);
                font-family: 'Varela Round', sans-serif;

                & span {
                    &.rubber {
                        display: inline-block;
                        animation: rubber 700ms alternate ease-out;                     
                    }
                    &.name {
                        color: hsl(180, 100%, 43%);
                    }
                }
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

    @keyframes rubber {
        0%{
            transform: scaleX(1);
            color: hsl(197, 100%, 50%);
        }
        40%{
            transform: scaleX(1.12) scaleY(0.75);
        }
        55%{
            transform: scaleX(0.85) scaleY(1);
            color: hsl(342, 100%, 50%);
        }
        65%{
            transform: scaleX(1.09) scaleY(0.85);
        }
        75%{
            transform: scaleX(0.9)  scaleY(1);
        }
        90%{
            transform: scaleX(1.05) scaleY(0.95);
        }
        100%{
            transform: scaleX(1) scaleY(1);
            color: hsl(0, 0%, 100%);
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