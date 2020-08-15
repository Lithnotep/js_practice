const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

const team = players;

console.log(players, team);

const team2 = players.slice();
const team3 = [].concat(players);
const team4 = [...players];

team4[3] = 'heeee hawww';
console.log(team4);
console.log(team3);
// mainly going over the basics of objects and what can be manipulated

const person = {
      name: 'Wes Bos',
      age: 80
    };

const cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(cap2);
