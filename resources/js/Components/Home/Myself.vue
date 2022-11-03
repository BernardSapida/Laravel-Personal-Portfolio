<template>
    <section class="container p-3 my-5">
        <article class="About-Me" data-aos="fade-right" data-aos-easing="ease-in-out">
            <h1>
                <span @mouseover.stop="hoverMe($event)">A</span><span @mouseover.stop="hoverMe($event)">b</span><span @mouseover.stop="hoverMe($event)">o</span><span @mouseover.stop="hoverMe($event)">u</span><span @mouseover.stop="hoverMe($event)">t</span>&nbsp;<span @mouseover.stop="hoverMe($event)">M</span><span @mouseover.stop="hoverMe($event)">e</span>
            </h1>
            <p>Since I was 15 years old, I’ve been passionate about creating websites and learning different spectrums of web technologies. I am taking a Bachelor of Science in Computer Science at Cavite State University Indang Campus.</p>
            <p>For years I’ve been given many opportunities to work in developing a spectrum of web technologies, and it allows me to gather an enormous portion of skills and experience. As a freelance, working for clients and individuals around the world improves my communication skills, acquire new knowledge from people I meet, and discoveries from extraordinary and ambitious people.</p>
            <p>I currently work remotely with a selected freelance client base being open for new opportunities.</p>
        </article>
        <article class="graph" data-aos="fade-left" data-aos-easing="ease-in-out">
            <canvas id="polarArea"></canvas>
        </article>
    </section>
</template>

<script>
import Chart from 'chart.js/auto'

export default {
    mounted() {
        const ctx = document.getElementById('polarArea');
        const myChart = new Chart(ctx, {
            type: 'polarArea',
            data: {
                labels: [
                    'HTML',
                    'CSS',
                    'JS',
                    'VUE',
                    'PHP',
                    'Laravel',
                    'GraphQL'
                ],
                datasets: [{
                    label: 'Skills and Experience',
                    data: [90, 70, 60, 60, 50, 40, 30],
                    backgroundColor: [
                        'Orange',
                        'Cyan',
                        'Yellow',
                        'Green',
                        'Violet',
                        'Red',
                        'Pink'
                    ]
                }]
            },
            options: {
                plugins: {
                    enabled: false,
                    legend: false
                },
                elements: {
                    stepped: false
                }
            }
        });
        myChart;
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
        padding: 50px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        flex-wrap: wrap;

        & article {
            &.About-Me {
                margin: auto;
                max-width: 750px;
                width: 100%;
                color: hsl(0, 0%, 100%);
                
                & h1 {
                    margin-bottom: 20px;
                    font-size: 5rem;
                    color: hsl(180, 100%, 43%);
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
            }

            &.graph {
                margin: auto;
                max-width: 500px;
                width: 100%;
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
        section.container article.About-Me h1 {
            font-size: 5rem;
        }
    }
    
    @media screen and (max-width: 992px){
        section.container article.About-Me h1 {
            font-size: 4rem;
        }
    }

    @media screen and (max-width: 396px){
        section.container article.About-Me h1 {
            font-size: 3rem;
        }
    }

    @media screen and (max-width: 313px){
        section.container article.About-Me {
            & h1 {
                font-size: 2.5rem;
            }

            & p {
                font-size: 14px;
            }
        }
    }
</style>