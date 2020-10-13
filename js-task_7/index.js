const JamTypes = [
    {name: 'яблочное', fruits: 0.3, sugar: 0.1, timeShort: 14, timeLong: 4},
    {name: 'вишневое', fruits: 0.5, sugar: 0.1, timeShort: 15, timeLong: 4},
    {name: 'сливовое', fruits: 0.5, sugar: 0.1, timeShort: 15, timeLong: 4},
    {name: 'клубничное', fruits: 0.5, sugar: 0.1, timeShort: 15, timeLong: 4},
    {name: 'черничное', fruits: 0.5, sugar: 0.1, timeShort: 15, timeLong: 4},
]

let Jam = function() {
    let sum_fr;
    this.currentJam = ''

    this.get = function() {
        this.jamType = prompt('Какое варенье выхотите сварить? (яблочное, вишневое, сливовое, клубничное, черничное').toLowerCase();
        this.time = confirm('Готовы ли вы потратить на приготовление более 10 часов? (да/нет)');
        this.portion = +prompt ('Сколько порций вы хотите приготовить? (1 порция = 0,5 л)');
        this.recept();
    };

    this.recept = function() {

        let fruits, sugar;
        JamTypes.forEach(item => {
            if(this.jamType === item.name ) {
                this.time ? alert(`На приготовление у вас уйдет ${item.timeLong} часов`) : alert(`На приготовление у вас уйдет ${item.timeShort} часов`)

                fruits = item.fruits
                sugar = item.sugar
                this.currentJam = item
            }
        })
        let filterArr = JamTypes.filter(item => item.name === this.jamType)

        if(filterArr.length !== 1) {
            let repeat = confirm('Вы неверно ввели значение. Ввести значение повторно?');
            if (!repeat) {
                this.get();
            } else {
                this.portion = 0;
            }
        }

        this.sum_sug = this.portion * sugar;
        this.sum_fr = this.portion * fruits;
        this.show();
    };

    this.show = function() {
        console.log(this.currentJam)
        alert('Для приготовления варенья вам понадобится: ' + this.sum_fr.toFixed(2) + ' кг ' + this.currentJam.name + ' ' + this.sum_sug.toFixed(2) + ' кг сахара.' )
    };
};

let jam = new Jam();
jam.get();
