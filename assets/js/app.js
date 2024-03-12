const { createApp } = Vue

createApp({
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
        };
    },
    //selezioniamo i btn tramite i methods 
    methods: {
        upBtn() {
            this.activeImg = (this.activeImg + 1) % this.images.length;

        },
        downBtn() {
            this.activeImg = (this.activeImg - 1 + this.images.length) % this.images.length;

        }

    }

}).mount('#app');


console.log('it works');