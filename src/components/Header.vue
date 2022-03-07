<script>
    import Soal1 from './Soal1.vue'
    import Soal2 from './Soal2.vue'
    import Soal3 from './Soal3.vue'
    import NotFound from './NotFound.vue'
    import './../css/custom.css'

    const routes = {
        '/': Soal1,
        '/soal2': Soal2,
        '/soal3': Soal3
    }

    export default {
        data() {
            return {
                currentPath: window.location.hash
            }
        },
        computed: {
            currentView() {
                return routes[this.currentPath.slice(1) || '/'] || NotFound
            }
        },
        mounted() {
            window.addEventListener('hashchange', () => {
                this.currentPath = window.location.hash
            })
        }
    }
</script>


<template>
    <ul class="nav justify-content-center bg-dark">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#/">Soal 1</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#/soal2">Soal 2</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#/soal3">Soal 3</a>
        </li>
    </ul>
    <component :is="currentView" />


</template>