class Questions {
    constructor(rendaAtiva,rendaPassiva,rendaExtra,rendaVitalicia,button){
       this.rendaAtiva = document.querySelector(rendaAtiva);
       this.rendaPassiva = document.querySelector(rendaPassiva);
       this.rendaExtra = document.querySelector(rendaExtra);
       this.rendaVitalicia = document.querySelector(rendaVitalicia);
       this.button = document.querySelector(button);
       this.activeClass = "activeQuestions";
        
       const num = 0;
       
       this.caixaDeperguntas = this.caixaDeperguntas.bind(this);
       
       var perguntas = [this.rendaAtiva, this.rendaPassiva, this.rendaExtra, this.rendaVitalicia];
    }

    

    caixaDeperguntas() {
        console.log("funcionou");
        this.perguntas[num].classList.toggle(this.activeClass);
        num++;
    }
    addClickEvent(){
        this.button.addEventListener("click", () => this.caixaDeperguntas())
    }
    init() {
        if(this.button){
            this.addClickEvent();
        }
        return this;
    }
}
const questions = new Questions(
    '#pergunta1',
    '#pergunta2',
    '#pergunta3',
    '#pergunta4',
    '.button'
);
questions.init();