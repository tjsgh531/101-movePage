import{
    MovePage
}from './movePage.js';

class Main{
    constructor(){
        this.bubbles = [];
        this.randTime = Math.random() * 2;
        this.maxNum = 5;

        window.addEventListener('resize', this.resize.bind(this));

        this.createBubble();
        this.resize();
        this.update();

        this.checkValue();
    }

    update(){
       
        for(let i = 0 ;  i< this.bubbles.length; i++){
            const item = this.bubbles[i];
            item.update();

            if(!item.isDisplayed){
                this.bubbles.splice(i,1);
            }
        }
        requestAnimationFrame(this.update.bind(this));
    }

    resize(){
        for(let i = 0 ;  i< this.bubbles.length; i++){
            this.bubbles[i].resize();
        }
    }

    createBubble(){
        setInterval(() => {
            if(this.bubbles.length < this.maxNum){
                /* 고유의 스피드 값을 가져야 하는데  */
                const movePageItem = new MovePage();
                this.bubbles.push(movePageItem);   

                this.randTime = Math.random() * 2;    
            }
            else{
                setTimeout(() => {
                    /*pause */
                }, 1000);
            }
        }, this.randTime *1000);
    }

    checkValue(){
        setInterval(() => {
            for(let i = 0 ; i < this.bubbles.length; i++){
                console.log(`${i} 스피드 ${this.bubbles[i].speed}`);
            }
        },3000);
    }
}

window.onload = () => {
    new Main();
};