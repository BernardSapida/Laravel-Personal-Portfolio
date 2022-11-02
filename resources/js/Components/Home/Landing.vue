<template>
    <section class="container my-5">
        <article data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-delay="2500">
            <h1>
                <span @mouseover.stop="hoverMe($event)">H</span><span @mouseover.stop="hoverMe($event)">i</span><span @mouseover.stop="hoverMe($event)">,</span><br>
                <span @mouseover.stop="hoverMe($event)">I</span><span @mouseover.stop="hoverMe($event)">'</span><span @mouseover.stop="hoverMe($event)">m</span>&nbsp;<span @mouseover.stop="hoverMe($event)" class="name">B</span><span @mouseover.stop="hoverMe($event)" class="name">e</span><span @mouseover.stop="hoverMe($event)" class="name">r</span><span @mouseover.stop="hoverMe($event)" class="name">n</span><span @mouseover.stop="hoverMe($event)" class="name">a</span><span @mouseover.stop="hoverMe($event)" class="name">r</span><span @mouseover.stop="hoverMe($event)" class="name">d</span>,
            </h1>
            <p class="role">
                <span @mouseover.stop="hoverMe($event)">F</span><span @mouseover.stop="hoverMe($event)">R</span><span @mouseover.stop="hoverMe($event)">O</span><span @mouseover.stop="hoverMe($event)">N</span><span @mouseover.stop="hoverMe($event)">T</span><span @mouseover.stop="hoverMe($event)">E</span><span @mouseover.stop="hoverMe($event)">N</span><span @mouseover.stop="hoverMe($event)">D</span>&nbsp;<span @mouseover.stop="hoverMe($event)">D</span><span @mouseover.stop="hoverMe($event)">E</span><span @mouseover.stop="hoverMe($event)">V</span><span @mouseover.stop="hoverMe($event)">E</span><span @mouseover.stop="hoverMe($event)">L</span><span @mouseover.stop="hoverMe($event)">O</span><span @mouseover.stop="hoverMe($event)">P</span><span @mouseover.stop="hoverMe($event)">E</span><span @mouseover.stop="hoverMe($event)">R</span>
            </p>
            <p class="introduction">A 19-year-old <span>Frontend Developer</span> base<br> in Imus, Cavite Philippines.</p>
        </article>
        <figure data-aos="zoom-out-left" data-aos-easing="ease-in-out" data-aos-delay="2500"></figure>
    </section>
</template>

<script>
    export default {
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
            border-radius: 50%;
            background-color: hsl(180, 100%, 43%);
            background-image: url("./images/Me/BernardSapida.jpg");
            background-size: cover;
            background-position: center;
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