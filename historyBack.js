export class HistoryBack{
    constructor(){
        this.isDisplayed = true;
        this.resize();

        this.element = document.createElement('div');
        this.element.style.backgroundColor ='rgba(127, 255, 148, 0.7)';
        this.element.textContent = '뒤로가기';
        document.body.appendChild(this.element);
        this.element.addEventListener('click',()=> {
            window.alert('뒤로간다!');
            history.back();
        });

        this.radius = 80;
        this.speed = Math.random().toFixed(2) * 4 + 1;
        this.elementX = Math.floor(Math.random() * (this.stageWidth - this.radius*2) + this.radius);
        this.elementY = this.stageHeight;

        this.element.style.width = `${this.radius * 2}px`;
        this.element.style.height = `${this.radius * 2}px`;
    }

    update(){
        this.elementY -= this.speed; 
        if(this.elementY < -this.radius *2){
            this.element.parentNode.removeChild(this.element);
            this.isDisplayed = false;
        }

        this.element.style.left = `${this.elementX}px`;
        this.element.style.top = `${this.elementY}px`;
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
    }

}