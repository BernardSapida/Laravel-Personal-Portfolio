<template>
    <footer class="container">
        <div class="line"></div>
        <div class="my-4 d-flex justify-content-between">
            <p class="text-white"><strong>Bernard Sapida</strong></p>
            <ul>
                <li class="d-inline mx-1">
                    <a class="text-white" href="https://github.com/BernardSapida" target="_blank">
                        <icon icon="fa-brands fa-github" />
                    </a>
                </li>
                <li class="d-inline mx-1">
                    <a class="text-white" href="https://www.linkedin.com/in/bernardsapida/" target="_blank">
                        <icon icon="fa-brands fa-linkedin" />
                    </a>
                </li>
                <li class="d-inline mx-1">
                    <a class="text-white" href="https://www.instagram.com/wuzzupzo/" target="_blank">
                        <icon icon="fa-brands fa-instagram" />
                    </a>
                </li>
                <li class="d-inline mx-1">
                    <a class="text-white" href="https://www.facebook.com/wuzzupZo/" target="_blank">
                        <icon icon="fa-brands fa-facebook" />
                    </a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    footer {
        & div.line {
            height: 2px;
            width: 100%;
            border: none;
            background-color: hsl(0, 0%, 100%);
        }
    }
</style>