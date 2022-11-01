<template>
    <section class="container p-3 my-5">
        <article class="About-Me">
            <h1>About Me</h1>
            <p>Since I was 15 years old, I’ve been passionate about creating websites and learning different spectrums of web technologies. I am taking a Bachelor of Science in Computer Science at Cavite State University Indang Campus.</p>
            <p>For years I’ve been given many opportunities to work in developing a spectrum of web technologies, and it allows me to gather an enormous portion of skills and experience. As a freelance, working for clients and individuals around the world improves my communication skills, acquire new knowledge from people I meet, and discoveries from extraordinary and ambitious people.</p>
            <p>I currently work remotely with a selected freelance client base being open for new opportunities.</p>
        </article>
        <article class="graph">
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
  }
}
</script>

<style lang="scss" scoped>
    section.container {
        padding: 50px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        flex-wrap: wrap;

        & article {
            &.About-Me {
                max-width: 600px;
                width: 100%;
                color: hsl(0, 0%, 100%);
                
                & h1 {
                    margin-bottom: 20px;
                    font-size: 5rem;
                    color: hsl(180, 100%, 43%);
                    font-weight: bolder;
                }
            }

            &.graph {
                max-width: 400px;
                width: 100%;
            }
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