import{
    MovePage
}from './movePage.js';

import{
    ReLoad
}from './reload.js';

import{
    HistoryBack
}from './historyBack.js';

import{
    HistoryForward
}from './historyForward.js';

import{
    NewPage
}from './newPage.js';

class Main{
    constructor(){
        this.bubbles = [];
        this.maxNum = 50;

        window.addEventListener('resize', this.resize.bind(this));

        this.createBubble();
        this.resize();
        this.update();
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
        let item;
        let creatNum;
        this.randTime = Math.random().toFixed(2);
        setInterval(() => {
            creatNum = Math.round(Math.random()*4);
            if(this.bubbles.length < this.maxNum){
                switch(creatNum){
                    case 0 :
                        item = new MovePage();
                        this.bubbles.push(item); 
                        break;
                    case 1:
                        item = new ReLoad();
                        this.bubbles.push(item); 
                        break;
                    case 2:
                        item = new HistoryBack();
                        this.bubbles.push(item); 
                        break;
                    case 3:
                        item = new HistoryForward();
                        this.bubbles.push(item); 
                        break;
                    case 4:
                        item = new NewPage();
                        this.bubbles.push(item); 
                        break;
                }
                /* 고유의 스피드 값을 가져야 하는데  */ 
                this.randTime = Math.random().toFixed(2) * 0.2;    
            }
            else{
                console.log('실행됨??')
                setTimeout(() => {
                    /*pause */
                }, 1000);
            }
        }, this.randTime *1000);
    }
}

window.onload = () => {
    new Main();
};