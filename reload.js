export class ReLoad{
    constructor(){
        this.isDisplayed = true;
        this.resize();

        this.element = document.createElement('div');
        this.element.textContent = '페이지 새로고침';
        this.element.style.backgroundColor='rgba(229, 168, 245, 0.7)';
        document.body.appendChild(this.element);
        this.element.addEventListener('click',()=> {
            const tempAns = window.prompt('새로고침 하실거면 Y를 입력해 주세요');
            if(tempAns !== null){
                const ans = tempAns.toUpperCase();
                if(ans == 'Y'){
                    location.reload();
                }
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
        if(this.elementY < -this.radius*2){
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