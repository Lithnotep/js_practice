const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

const team = players;

console.log(players, team);

const team2 = players.slice();
const team3 = [].concat(players);
const team4 = [...players];

team4[3] = 'heeee hawww';
console.log(team4);
console.log(team3);
