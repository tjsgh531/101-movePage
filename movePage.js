export class MovePage{
    constructor(){
        this.isDisplayed = true;
        this.resize();

        this.element = document.createElement('div');
        this.element.style.backgroundColor ='rgba(175, 235, 255, 0.7)';
        this.element.textContent = '페이지 이동';
        document.body.appendChild(this.element);
        this.element.addEventListener('click',()=> {
            const ans = window.confirm('다른페이지로 이동하실 건가요?');
            if(ans){
                location.href = './otherPage.html'
            }
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