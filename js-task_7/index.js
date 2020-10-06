const c = 4.19; // теплоемкость воды

let Teapot = function(name) {
    this.name=name;
    this.power=0;
    this.volume=0;
    this.turn = false;

    this.get = function() {
        this.power = +prompt("Введите мощность, Вт");
        this.volume = +prompt("Введите объем чайника, мл");        
    }

    function calcTime(power, v) {
        return Math.round((v*c)/power);  
    }
    function checkVolume(min, max) {
        return (min>=max) ? false : true;
    }
    this.start = function() {      
        let waterVolume = +prompt("Какой объем воды заливаете в чайник? мл");  
        if (checkVolume(waterVolume, this.volume)) {
            alert("Чайник закипит через "+calcTime(this.power, waterVolume) +' минуты');
            this.turn=true;
        } else {
            alert("Объем чайника меньше заливаемого объема воды");
        }
    }
    function showInfo() {
        let txt="Чайник "+this.name+"<br>"; //не работает вот такой вызов
    }
    this.show = function() {
        console.log(showInfo());
        document.write("Чайник "+this.name+"<br>");
        document.write("Мощность "+this.power+"<br>");
        document.write("Объем "+this.volume+"<br>");
        document.write("Статус "+((this.turn)? 'включен':'выключен')+"<br>");
    }

}

let teapot1 = new Teapot('Centek');
teapot1.get();
teapot1.start();
teapot1.show();

