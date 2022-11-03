<template>
    <section class="container my-5">
        <article data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-delay="2500">
            <h1>
                <span class="animation" @mouseover.stop="hoverMe($event)">H</span><span class="animation" @mouseover.stop="hoverMe($event)">i</span><span class="animation" @mouseover.stop="hoverMe($event)">,</span><br><span class="animation" @mouseover.stop="hoverMe($event)">I</span><span class="animation" @mouseover.stop="hoverMe($event)">'</span><span class="animation" @mouseover.stop="hoverMe($event)">m</span>&nbsp;<span class="animation name" @mouseover.stop="hoverMe($event)">B</span><span class="animation name" @mouseover.stop="hoverMe($event)">e</span><span class="animation name" @mouseover.stop="hoverMe($event)">r</span><span class="animation name" @mouseover.stop="hoverMe($event)">n</span><span class="animation name" @mouseover.stop="hoverMe($event)">a</span><span class="animation name" @mouseover.stop="hoverMe($event)">r</span><span class="animation name" @mouseover.stop="hoverMe($event)">d</span><span class="animation" @mouseover.stop="hoverMe($event)">,</span>
            </h1>
            <p class="role">
                <span class="animation" @mouseover.stop="hoverMe($event)">F</span><span class="animation" @mouseover.stop="hoverMe($event)">R</span><span class="animation" @mouseover.stop="hoverMe($event)">O</span><span class="animation" @mouseover.stop="hoverMe($event)">N</span><span class="animation" @mouseover.stop="hoverMe($event)">T</span><span class="animation" @mouseover.stop="hoverMe($event)">E</span><span class="animation" @mouseover.stop="hoverMe($event)">N</span><span class="animation" @mouseover.stop="hoverMe($event)">D</span>&nbsp;<span class="animation" @mouseover.stop="hoverMe($event)">D</span><span class="animation" @mouseover.stop="hoverMe($event)">E</span><span class="animation" @mouseover.stop="hoverMe($event)">V</span><span class="animation" @mouseover.stop="hoverMe($event)">E</span><span class="animation" @mouseover.stop="hoverMe($event)">L</span><span class="animation" @mouseover.stop="hoverMe($event)">O</span><span class="animation" @mouseover.stop="hoverMe($event)">P</span><span class="animation" @mouseover.stop="hoverMe($event)">E</span><span class="animation" @mouseover.stop="hoverMe($event)">R</span>
            </p>
            <p class="introduction">A 19-year-old <span>Frontend Developer</span> base<br> in Imus, Cavite Philippines.</p>
        </article>
        <figure data-aos="zoom-out-left" data-aos-easing="ease-in-out" data-aos-delay="2500">
            <img src="images/Me/BernardSapida.png" alt="Bernard Sapida">
        </figure>
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
        max-height: 700px;
        height: 90vh;
        display: flex;
        align-items: center;
        justify-content: space-between;

        & article {
            & h1 {
                color: hsl(0, 0%, 100%);
                font-size: 6rem;
                font-weight: bolder;
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

            & p.role {
                color: hsl(0, 0%, 100%);
                font-size: 3.5rem;
                font-weight: bolder;
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

            & p.introduction {
                color: hsl(0, 0%, 70%);
                font-size: 2em;

                & span {
                    color: hsl(0, 0%, 100%);
                    font-weight: bolder;
                }
            }
        }

        & figure {
            display: block;
            height: 400px;
            width: 400px;
            
            & img {
                width: 100%;
                height: 100%;
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
        section.container {
            & article {
                & h1 {
                    font-size: 5rem;
                }

                & p.role {
                    font-size: 2.5rem;
                }
    
                & p.introduction {
                    font-size: 1.8em;
                }
            }

            & figure {
                height: 350px;
                width: 350px;
            }
        }
    }

    @media screen and (max-width: 992px){
        section.container {
            & article {
                & h1 {
                    font-size: 4rem;
                }

                & p.role {
                    font-size: 1.5rem;
                }
    
                & p.introduction {
                    font-size: 1em;
                }
            }

            & figure {
                height: 300px;
                width: 300px;
            }
        }
    }

    @media screen and (max-width: 768px){
        section.container {
            height: 100%;
            gap: 20px;
            flex-direction: column;

            & figure {
                height: 200px;
                width: 200px;
            }
        }
    }

    @media screen and (max-width: 396px){
        section.container {
            & article {
                & h1 {
                    font-size: 3rem;
                }

                & p.role {
                    font-size: 1.5rem;
                }
    
                & p.introduction {
                    font-size: 1em;
                }
            }

            & figure {
                height: 180px;
                width: 180px;
            }
        }
    }

    @media screen and (max-width: 313px){
        section.container {
            & article {
                & h1 {
                    font-size: 2.5rem;
                }

                & p.role {
                    font-size: 1.2rem;
                }
    
                & p.introduction {
                    font-size: 14px;
                }
            }
        }
    }
</style>