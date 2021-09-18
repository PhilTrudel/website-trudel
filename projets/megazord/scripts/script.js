//Questions Quiz //

let modal = document.querySelector('.modal-body.quiz');
const url = "http://linkinpark-megazord.qc.lu/linkinpark-api";

fetch(`${url}/index.php/wp-json/wp/v2/posts`)
.then(res => res.json())
.then(data => new Quiz(data))

/*fetch("http://linkinpark-megazord.qc.lu/json")
.then(res => res.json())
.then(data => new Quiz(data.questions))*/

class Quiz {
    constructor(tableau) {
        this.index = 0;
        this.score = 0;
        this.questions = tableau;
        this.questions.forEach((question, value) => {
            this.creerHtml(question, value + 1);
        });
        this.setVisible(this.index);
        this.answers();
    }
    creerHtml(Q, value) {
        //div
        console.log(Q.acf);
        this.div = document.createElement("div");
        this.div.classList.add("question");
        modal.appendChild(this.div);

        //strong
        this.strong = document.createElement("strong");
        this.strong.innerText = Q.acf.q;
        this.div.appendChild(this.strong);

        //br
        this.br = document.createElement("br");
        this.div.appendChild(this.br);

        //options
        if ("o1" in Q.acf) {
            let radio = document.createElement("input");
            radio.setAttribute("type", "radio");
            radio.setAttribute("name", "question" + value);
            radio.setAttribute("value", "1");
            this.div.appendChild(radio);

            let label = document.createElement("label");
            label.innerText = Q.acf.o1;
            this.div.appendChild(label);

            this.br = document.createElement("br");
            this.div.appendChild(this.br);
        }

        if ("o2" in Q.acf) {
            let radio = document.createElement("input");
            radio.setAttribute("type", "radio");
            radio.setAttribute("name", "question" + value);
            radio.setAttribute("value", "2");
            this.div.appendChild(radio);

            let label = document.createElement("label");
            label.innerText = Q.acf.o2;
            this.div.appendChild(label);

            this.br = document.createElement("br");
            this.div.appendChild(this.br);
        }

        if ("o3" in Q.acf) {
            let radio = document.createElement("input");
            radio.setAttribute("type", "radio");
            radio.setAttribute("name", "question" + value);
            radio.setAttribute("value", "3");
            this.div.appendChild(radio);

            let label = document.createElement("label");
            label.innerText = Q.acf.o3;
            this.div.appendChild(label);

            this.br = document.createElement("br");
            this.div.appendChild(this.br);
        }

        if ("o4" in Q.acf) {
            let radio = document.createElement("input");
            radio.setAttribute("type", "radio");
            radio.setAttribute("name", "question" + value);
            radio.setAttribute("value", "4");
            this.div.appendChild(radio);

            let label = document.createElement("label");
            label.innerText = Q.acf.o4;
            this.div.appendChild(label);

            this.br = document.createElement("br");
            this.div.appendChild(this.br);
        }
    }
    setVisible(number) {
        let divQ = document.querySelectorAll(".question");
        divQ.forEach((q) => {
            q.classList.remove("is-visible");
            divQ[number].classList.add("is-visible");
        });
    }
    answers() {
        let R = document.querySelectorAll("input[type = 'radio']");
        R.forEach((radio) => {
            radio.addEventListener("change", () => {
                if (radio.checked) {
                    if (radio.value == this.questions[this.index].acf.r) {
                        this.goodAnswer();
                    } else {
                        this.wrongAnswer();
                    }
                    if (this.index <= this.questions.length - 1) {
                        if (this.index == this.questions.length - 1) {
                            this.div.classList.add('last');
                            this.div.innerText = 'Pointage:';
                            this.strong.innerText = this.score + '/' + this.questions.length;
                            this.div.appendChild(this.br);
                            this.div.appendChild(this.strong);
                            return false;
                        }
                        this.index++;
                        this.setVisible(this.index);
                    }
                }
            });
        });
    }
    goodAnswer() {
        this.score++;
        gsap.timeline()
            .fromTo('.logo-true',
                { scaleX: '0', scaleY: '0', opacity: '0', rotation: 1 },
                { scaleX: '1', scaleY: '1', opacity: '1', duration: 0.75, rotation: 360, })
            .fromTo('.logo-true',
                { x: '1' },
                { y: '-50', duration: .25, repeat: 3, yoyo: true })
            .fromTo('.logo-true',
                { scaleX: '1', scaleY: '1', duration: 0.75, rotation: 360, opacity: '1'},
                { scaleX: '0', scaleY: '0', rotation: 1, opacity: '0',},  3);

        gsap.timeline()
            .fromTo('.bg-true',
                { scaleX: '0', scaleY: '0', opacity: '0' },
                { scaleX: '1', scaleY: '1', duration: 0.75, opacity: '1', })
            .fromTo('.bg-true',
                { scaleX: '1', scaleY: '1', opacity: '1' },
                { scaleX: '0', scaleY: '0', duration: 0.75, opacity: '0' }, 3);

        gsap.timeline()
            .fromTo('.checkmark',
                { scaleX: '0', scaleY: '0', opacity: '0' },
                { scaleX: '1', scaleY: '1', duration: 0.75, opacity: '1' })
            .fromTo('.checkmark',
                { scaleX: '1', scaleY: '1', opacity: '1' },
                { scaleX: '0', scaleY: '0', duration: 0.75, opacity: '0' }, 3);

        gsap.timeline()
            .fromTo('.text-true',
                { opacity: '0', rotate: '0', opacity: '0' },
                { opacity: '1', rotate: '360', ease: 'back.out', duration: 0.75, opacity: '1' }, '+=0.90')
            .fromTo('.text-true',
                { scale: '1' },
                { scale: '1.2', duration: 0.3, repeat: 3, yoyo: true })
            .fromTo('.text-true',
                { y: '0', opacity: '1' },
                { y: '20', opacity: '0', duration: 0.3, delay: 1, opacity: '0'});
    }

    wrongAnswer() {
        gsap.timeline()
            .fromTo(".logo",
                { scaleX: "0", scaleY:"0", opacity:0}, 
                { scaleX: "1", scaleY:"1" , duration: 0.5, opacity:1})
            .fromTo(".text-wrong",
                { opacity:0}, 
                { opacity:1, duration: 0.5}, "<")
            .fromTo(".logo.part02",
                { y: "10" }, 
                { y: "-10", duration: .06, repeat:12, yoyo:true})
            .fromTo(".logo.part01",
                { y: "10" }, 
                { y: "-10", duration: .06, repeat:12, yoyo:true}, "<")
            .fromTo(".logo.part02",
                { x: "-10" }, 
                { x: "10", duration: .05, repeat:15, yoyo:true}, "<")
            .fromTo(".logo.part01",
                { x: "-10" }, 
                { x: "10", duration: .05, repeat:15, yoyo:true}, "<")
            .fromTo(".logo.part02",
                { x: "10", y:"-10" }, 
                { x: "0", y: "0", duration: 0.1})
            .fromTo(".logo.part01",
                { x: '10', y:"-10" }, 
                { x: '0', y: "0", duration: 0.1}, "<")
            .fromTo('.logo',
                { x: "0", scaleX: "1", scaleY:"1", duration: 0.5, rotation: 360}, 
                { scaleX: "0", scaleY:"0", rotation: 1}, 3)
            .fromTo('.text-wrong',
                { opacity:1 }, 
                { opacity:0, duration: 0.5}, "<");
        }
}





