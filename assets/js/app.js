const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            //facciamo il array per le img
            images: [
                { src: "./assets/img/01.webp" },
                { src: "./assets/img/02.webp" },
                { src: "./assets/img/03.webp" },
                { src: "./assets/img/04.webp" },
                { src: "./assets/img/05.webp" }
            ],
            // partiamo nel array con la posizione 0
            activeImg: 0,
            imgPlay: null,
        };
    },
    //selezioniamo i btn tramite i methods 
    methods: {
        upBtn() {
            this.activeImg = (this.activeImg + 1) % this.images.length;

        },
        downBtn() {
            this.activeImg = (this.activeImg - 1 + this.images.length) % this.images.length;

        },
        showImage(i) {
            this.activeImg = i
        },
      
        startPlay() {
            imgPlay = setInterval(this.upBtn, 3000);
            console.log('start');
           
        },
        stopPlay() {
            clearInterval(imgPlay);
            console.log('stop');
        
        },

        mounted() {
            this.startPlay();
        }

    }
});

app.mount('#app');

