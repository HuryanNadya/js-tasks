const c = 4.19; // теплоемкость воды

let Teapot = function(name) {
    this.get = function() {
        this.name = name;
        this.power = +prompt("Введите мощность, Вт");
        this.volume = +prompt("Введите объем чайника, мл"); 
        this.turn = false;
    }

    function calcTime(power, v) {
        return (v*c)/power;  //не уверена в правильности формулы =)
    }
    function checkVolume(min, max) {
        return (min>=max) ? false : true;
    }
    this.start = function() {      
        let waterVolume = +prompt("Какой объем воды заливаете в чайник? мл");  
        if (checkVolume(waterVolume, this.volume)) {
            alert("Чайник закипит через "+calcTime(this.power, waterVolume) +'минуты');
            this.turn=true;
        } else {
            alert("Объем чайника меньше заливаемого объема воды");
        }
    }
    // function showInfo() {
            //как правильно передать данные именно во внутреннюю функцию для отображения информации?
    // }
    this.show = function() {
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

