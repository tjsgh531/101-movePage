class Main{
    constructor(){
        this.href = document.getElementById('moveOther');
        this.reload = document.getElementById('pageReload');
        this.history = document.getElementById('history');
        this.open = document.getElementById('newPage');
    
        this.init();
    }

    init(){
        this.href.addEventListener('click',this.moveOther);
    }

    moveOther(){
        console.log('실행 되는 겨?');
        const ans= window.confirm("다른페이지로 이동합니다.");
    
        if(ans){
            location.href = './otherPage.html';
        }
    }
}

window.onload = () => {
    new main();
};