const Z = [0, 1.2, 1.375, 1.55, 1.725, 1.9]

const familyDataAdding = (day, dadKg, momKg, meKg, sisKg) => {
    let year = Number(day.slice(4));
    const Z = [0, 1.2, 1.375, 1.55, 1.725, 1.9];
    const diet = {
        higherCarb: {
            carb: 0.5,
            protein: 0.3,
            fat: 0.2
        },
        moderateCarb: {
            carb: 0.5,
            protein: 0.3,
            fat: 0.2,
        },
        lowerCarb: {
            carb: 0.2,
            protein: 0.5,
            fat: 0.3
        }
    }
    const goal = {
        weightGain: 0.15,
        weightLoss: -0.15,
        normal : 0
    }
    return {
        day,
        dad: {
            gender: 'male',
            weight: dadKg,
            height: 174,
            age: year - 1977,
            BMR() {
                return 10 * this.weight + 6.25 * this.height - 5 * this.age + 5;
            },
            goal: goal.normal,
            TDEE() {
                return this.BMR() * Z[2] + this.goal * this.BMR();
            },
            diet: diet.moderateCarb,
        },
        mom: {
            gender: 'female',
            weight: momKg,
            height: 150,
            age: year - 1977,
            BMR() {
                return 10 * this.weight + 6.25 * this.height - 5 * this.age - 161;
            },
            goal: goal.weightLoss,
            TDEE() { 
                return this.BMR() * Z[1] + this.goal * this.BMR();
            },
            diet: diet.lowerCarb,
        },
        me: {
            gender: 'male',
            weight: meKg,
            height: 175,
            age: year - 2000,
            BMR() {
                return 10 * this.weight + 6.25 * this.height - 5 * this.age + 5;
            },
            goal: goal.normal,
            TDEE() {
                return this.BMR() * Z[2] + this.goal * this.BMR();
            },
            diet: diet.moderateCarb
        },
        sis: {
            gender: 'female',
            weight: sisKg,
            height: 166,
            age: year - 2006,
            BMR() {
                return 10 * this.weight + 6.25 * this.height - 5 * this.age - 161;
            },
            goal: goal.weightLoss,
            TDEE() { 
                return this.BMR() * Z[1] + this.goal * this.BMR();
            },
            diet: diet.lowerCarb
        },
        gramEat(prop) {
            let calories = this[prop].TDEE();
            return {
                // 1g carb = 1g protein = 4 calories
                // 1g fat = 9 calories
                gramProtein: Math.round(calories * this[prop].diet.protein / 4),
                gramCarb: Math.round(calories * this[prop].diet.carb / 4),
                gramFat: Math.round(calories * this[prop].diet.fat / 9)
            }
        },
        BMI(prop) {
            let BMInumber = (this[prop].weight / ((this[prop].height / 100) ** 2)).toFixed(2);
            if (BMInumber < 18.5) { return 'thin'}
            else if (BMInumber < 23) {return 'normal'}
            else if (BMInumber < 25) {return 'fat'}
            else if (BMInumber < 30) {return 'fat level I'}
            else if (BMInumber < 40) {return 'fat level II'}
            else { return 'fat level III'}

        }
    }
}
const datafamily = [];
// 8/9/2021 
datafamily[0] = familyDataAdding('8/9/2021', 69, 53, 70.2, 63);

export default datafamily;