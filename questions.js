class questions {
    constructor() {
        this.title = createElement('h1');
        this.name = createInput('Name');
        this.question1 = createElement('p');
        this.input = createInput('Answer..');
        this.button = createButton('Submit');
        // this.font = createElement('font')
    }
    hide() {
        this.question1.hide();
        this.input.hide();
        this.button.hide();
        this.name.hide();
    }
    display() {
        
        this.question1.html("What is the name of this project's creator?<br>a. Aditya<br>b. Anonymous<br> c. Nathan<br> d. None of these");
        this.question1.position(innerWidth / 2-150, innerHeight / 2-50);
        this.input.position(innerWidth / 2-150, innerHeight / 2 + 70);
        this.name.position(innerWidth-150, 100);
        this.button.position(innerWidth / 2-150, innerHeight / 2 + 100);
        this.button.mousePressed(() => {
            // this.question1.hide();
            // this.input.hide();
            // this.button.hide();
            contentestCount = contentestCount + 1;
            Contestantcount.update(this.name.value(), this.input.value());
        });
    }

}