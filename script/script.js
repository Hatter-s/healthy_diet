import datafamily from "./data.js";

let data = datafamily[0];
const family = ['dad', 'mom', 'me', 'sis']
//take new Date();
const dayInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const time = {
    date : new Date().getDate(),
    month : new Date().getMonth() + 1,
    year : new Date().getFullYear(),
    day : dayInWeek[new Date().getDay()]
}
document.getElementById("time").innerHTML = `Hôm nay là: ${time.day}, ${time.date}/${time.month}/${time.year}`;


for (let i of family) {
    const status = document.querySelector(`.status .${i}`);
    const consume = document.querySelector(`.consume .${i}`);
    const gramEat = data.gramEat(i)
    console.log(consume.children);
    const statusChild = status.children;
    const consumeChild = consume.children;
    // add to status table 
    for (let j = 2; j < 6; j++) {
        const className = statusChild[j].className
        if (statusChild[j].className === 'TDEE') {
            statusChild[j].innerHTML = data[i].TDEE().toFixed(2);
        }
        else if (statusChild[j].className === 'BMI') {
            statusChild[j].innerHTML = data.BMI(i)
        }
        else if (statusChild[j].className === 'goal') {
            switch (data[i][statusChild[j].className]) {
                case -0.15:
                    statusChild[j].innerHTML = 'giảm cân';
                    break;
                case 0:
                    statusChild[j].innerHTML = 'duy trì';
                    break;
                case 0.15:
                    statusChild[j].innerHTML = 'tăng cân';
                    break;
            }
        }
        else {
        statusChild[j].innerHTML = data[i][statusChild[j].className];
        }
    }
    // add to consume table
    for (let j = 2; j < 5; j++) {
        switch (consumeChild[j].className) {
            case 'protein':
                consumeChild[j].innerHTML = gramEat.gramProtein;
                break;
            case 'carb':
                consumeChild[j].innerHTML = gramEat.gramCarb;
                break;
            case 'fat':
                consumeChild[j].innerHTML = gramEat.gramFat;
        }
    }

}