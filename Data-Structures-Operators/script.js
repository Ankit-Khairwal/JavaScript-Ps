// // // 'use strict';

// // // const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// // // const openingHours = {
// // //   [weekdays[3]]: {
// // //     open: 12,
// // //     close: 22,
// // //   },
// // //   [weekdays[4]]: {
// // //     open: 11,
// // //     close: 23,
// // //   },
// // //   [weekdays[5]]: {
// // //     open: 0, // Open 24 hours
// // //     close: 24,
// // //   },
// // // };

// // // const restaurant = {
// // //   name: 'Classico Italiano',
// // //   location: 'Via Angelo Tavanti 23, Firenze, Italy',
// // //   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
// // //   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
// // //   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

// // //   // ES6 enhanced object literals
// // //   openingHours,

// // //   order(starterIndex, mainIndex) {
// // //     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// // //   },

// // //   orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
// // //     console.log(
// // //       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
// // //     );
// // //   },

// // //   orderPasta(ing1, ing2, ing3) {
// // //     console.log(
// // //       `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
// // //     );
// // //   },

// // //   orderPizza(mainIngredient, ...otherIngredients) {
// // //     console.log(mainIngredient);
// // //     console.log(otherIngredients);
// // //   },
// // // };

// // // /*
// // // // String Methods Practice

// // // const flights =
// // //   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // // // 🔴 Delayed Departure from FAO to TXL (11h25)
// // // //              Arrival from BRU to FAO (11h45)
// // // //   🔴 Delayed Arrival from HEL to FAO (12h05)
// // // //            Departure from FAO to LIS (12h30)

// // // const getCode = str => str.slice(0, 3).toUpperCase();

// // // for (const flight of flights.split('+')) {
// // //   const [type, from, to, time] = flight.split(';');
// // //   const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
// // //     '_',
// // //     ' '
// // //   )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
// // //   console.log(output);
// // // }
// // // challenge 1
// // // /*
// // // document.body.append(document.createElement('textarea'));
// // // document.body.append(document.createElement('button'));

// // // document.querySelector('button').addEventListener('click', function () {
// // //   const text = document.querySelector('textarea').value;
// // //   const rows = text.split('\n');

// // //   for (const [i, row] of rows.entries()) {
// // //     const [first, second] = row.toLowerCase().trim().split('_');

// // //     const output = `${first}${second.replace(
// // //       second[0],
// // //       second[0].toUpperCase()
// // //     )}`;
// // //     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
// // //   }
// // // });
// // // */

// // // /*
// // // // Working With Strings - Part 3

// // // // Split and join
// // // console.log('a+very+nice+string'.split('+'));
// // // console.log('Jonas Schmedtmann'.split(' '));

// // // const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

// // // const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// // // console.log(newName);

// // // const capitalizeName = function (name) {
// // //   const names = name.split(' ');
// // //   const namesUpper = [];

// // //   for (const n of names) {
// // //     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
// // //     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
// // //   }
// // //   console.log(namesUpper.join(' '));
// // // };

// // // capitalizeName('jessica ann smith davis');
// // // capitalizeName('jonas schmedtmann');
// // // */

// // // // Padding
// // // const message = 'Go to gate 23!';
// // // console.log(message.padStart(20, '+').padEnd(30, '+'));
// // // console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

// // // const maskCreditCard = function (number) {
// // //   const str = number + '';
// // //   const last = str.slice(-4);
// // //   return last.padStart(str.length, '*');
// // // };

// // // console.log(maskCreditCard(64637836));
// // // console.log(maskCreditCard(43378463864647384));
// // // console.log(maskCreditCard('334859493847755774747'));

// // // // Repeat
// // // const message2 = 'Bad waether... All Departues Delayed... ';
// // // console.log(message2.repeat(5));

// // // const planesInLine = function (n) {
// // //   console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
// // // };
// // // planesInLine(5);
// // // planesInLine(3);
// // // planesInLine(12);


// // // ///////////////////////////////////////
// // // // Working With Strings - Part 2

// // // const airline = 'TAP Air Portugal';

// // // console.log(airline.toLowerCase());
// // // console.log(airline.toUpperCase());

// // // // Fix capitalization in name
// // // const passenger = 'jOnAS'; // Jonas
// // // const passengerLower = passenger.toLowerCase();
// // // const passengerCorrect =
// // //   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// // // console.log(passengerCorrect);

// // // // Comparing emails
// // // const email = 'hello@jonas.io';
// // // const loginEmail = '  Hello@Jonas.Io \n';

// // // // const lowerEmail = loginEmail.toLowerCase();
// // // // const trimmedEmail = lowerEmail.trim();
// // // const normalizedEmail = loginEmail.toLowerCase().trim();
// // // console.log(normalizedEmail);
// // // console.log(email === normalizedEmail);

// // // // replacing
// // // const priceGB = '288,97£';
// // // const priceUS = priceGB.replace('£', '$').replace(',', '.');
// // // console.log(priceUS);

// // // const announcement =
// // //   'All passengers come to boarding door 23. Boarding door 23!';

// // // console.log(announcement.replace('door', 'gate'));
// // // console.log(announcement.replaceAll('door', 'gate'));

// // // // Alternative solution to replaceAll with regular expression
// // // console.log(announcement.replace(/door/g, 'gate'));

// // // // Booleans
// // // const plane = 'Airbus A320neo';
// // // console.log(plane.includes('A320'));
// // // console.log(plane.includes('Boeing'));
// // // console.log(plane.startsWith('Airb'));

// // // if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
// // //   console.log('Part of the NEW ARirbus family');
// // // }

// // // // Practice exercise
// // // const checkBaggage = function (items) {
// // //   const baggage = items.toLowerCase();

// // //   if (baggage.includes('knife') || baggage.includes('gun')) {
// // //     console.log('You are NOT allowed on board');
// // //   } else {
// // //     console.log('Welcome aboard!');
// // //   }
// // // };

// // // checkBaggage('I have a laptop, some Food and a pocket Knife');
// // // checkBaggage('Socks and camera');
// // // checkBaggage('Got some snacks and a gun for protection');

// // // // Working With Strings - Part 1
// // // const airline = 'TAP Air Portugal';
// // // const plane = 'A320';

// // // console.log(plane[0]);
// // // console.log(plane[1]);
// // // console.log(plane[2]);
// // // console.log('B737'[0]);

// // // console.log(airline.length);
// // // console.log('B737'.length);

// // // console.log(airline.indexOf('r'));
// // // console.log(airline.lastIndexOf('r'));
// // // console.log(airline.indexOf('portugal'));

// // // console.log(airline.slice(4));
// // // console.log(airline.slice(4, 7));

// // // console.log(airline.slice(0, airline.indexOf(' ')));
// // // console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// // // console.log(airline.slice(-2));
// // // console.log(airline.slice(1, -1));

// // // const checkMiddleSeat = function (seat) {
// // //   // B and E are middle seats
// // //   const s = seat.slice(-1);
// // //   if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
// // //   else console.log('You got lucky 😎');
// // // };

// // // checkMiddleSeat('11B');
// // // checkMiddleSeat('23C');
// // // checkMiddleSeat('3E');

// // // console.log(new String('jonas'));
// // // console.log(typeof new String('jonas'));

// // // console.log(typeof new String('jonas').slice(1));


// // const events = [...new Set(gameEvents.values())];
// // console.log(events);

// // // 2.
// // gameEvents.delete(64);

// // // 3.
// // console.log(
// //   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// // );
// // const time = [...gameEvents.keys()].pop();
// // console.log(time);
// // console.log(
// //   `An event happened, on average, every ${time / gameEvents.size} minutes`
// // );

// // // 4.
// // for (const [min, event] of gameEvents) {
// //   const half = min <= 45 ? 'FIRST' : 'SECOND';
// //   console.log(`[${half} HALF] ${min}: ${event}`);
// // }
// // */

// // /*
// // ///////////////////////////////////////
// // // Maps: Iteration
// // const question = new Map([
// //   ['question', 'What is the best programming language in the world?'],
// //   [1, 'C'],
// //   [2, 'Java'],
// //   [3, 'JavaScript'],
// //   ['correct', 3],
// //   [true, 'Correct 🎉'],
// //   [false, 'Try again!'],
// // ]);
// // console.log(question);

// // // Convert object to map
// // console.log(Object.entries(openingHours));
// // const hoursMap = new Map(Object.entries(openingHours));
// // console.log(hoursMap);

// // // Quiz app
// // console.log(question.get('question'));
// // for (const [key, value] of question) {
// //   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// // }
// // // const answer = Number(prompt('Your answer'));
// // const answer = 3;
// // console.log(answer);

// // console.log(question.get(question.get('correct') === answer));

// // // Convert map to array
// // console.log([...question]);
// // // console.log(question.entries());
// // console.log([...question.keys()]);
// // console.log([...question.values()]);


// // Maps: Fundamentals
// // const rest = new Map();
// // rest.set('name', 'Classico Italiano');
// // rest.set(1, 'Firenze, Italy');
// // console.log(rest.set(2, 'Lisbon, Portugal'));

// // rest
// //   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
// //   .set('open', 11)
// //   .set('close', 23)
// //   .set(true, 'We are open :D')
// //   .set(false, 'We are closed :(');

// // console.log(rest.get('name'));
// // console.log(rest.get(true));
// // console.log(rest.get(1));

// // const time = 8;
// // console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// // console.log(rest.has('categories'));
// // rest.delete(2);
// // // rest.clear();

// // const arr = [1, 2];
// // rest.set(arr, 'Test');
// // rest.set(document.querySelector('h1'), 'Heading');
// // console.log(rest);
// // console.log(rest.size);

// // console.log(rest.get(arr));

// // // New Operations to Make Sets Useful!

// // const italianFoods = new Set([
// //   'pasta',
// //   'gnocchi',
// //   'tomatoes',
// //   'olive oil',
// //   'garlic',
// //   'basil',
// // ]);

// // const mexicanFoods = new Set([
// //   'tortillas',
// //   'beans',
// //   'rice',
// //   'tomatoes',
// //   'avocado',
// //   'garlic',
// // ]);

// // const commonFoods = italianFoods.intersection(mexicanFoods);
// // console.log('Intersection:', commonFoods);
// // console.log([...commonFoods]);

// // const italianMexicanFusion = italianFoods.union(mexicanFoods);
// // console.log('Union:', italianMexicanFusion);

// // console.log([...new Set([...italianFoods, ...mexicanFoods])]);

// // const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
// // console.log('Difference italian', uniqueItalianFoods);

// // const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
// // console.log('Difference mexican', uniqueMexicanFoods);

// // const uniqueItalianAndMexicanFoods =
// //   italianFoods.symmetricDifference(mexicanFoods);
// // console.log(uniqueItalianAndMexicanFoods);

// // console.log(italianFoods.isDisjointFrom(mexicanFoods));

// /*
// // Sets
// const ordersSet = new Set([
//     'Pasta',
//     'Pizza',
//     'Pizza',
//     'Risotto',
//     'Pasta',
//     'Pizza',
//   ]);
//   console.log(ordersSet);

//   console.log(new Set('Ankit'));

//   console.log(ordersSet.size);
//   console.log(ordersSet.has('Pizza'));
//   console.log(ordersSet.has('Bread'));
//   ordersSet.add('Garlic Bread');
//   ordersSet.add('Garlic Bread');
//   ordersSet.delete('Risotto');
//   // ordersSet.clear();
//   console.log(ordersSet);

//   for (const order of ordersSet) console.log(order);

//   // Example
//   const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
//   const staffUnique = [...new Set(staff)];
//   console.log(staffUnique);

//   console.log(
//     new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
//   );

//   console.log(new Set('Ankit').size);
//   */

// // Coding Challenge #2
// /*
// // 1.
// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${player}`);

// // 2.
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// // 3.
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// // Odd of victory Bayern Munich: 1.33
// // Odd of draw: 3.25
// // Odd of victory Borrussia Dortmund: 6.5

// // BONUS
// // So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// */

// /*
// ///////////////////////////////////////
// // Looping Objects: Object Keys, Values, and Entries

// // Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // Entire object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// // [key, value]
// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }


// ///////////////////////////////////////
// // Optional Chaining
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // console.log(restaurant.openingHours.mon.open);

// // WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// // Arrays
// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// // const users = [];

// console.log(users[0]?.name ?? 'User array empty');

// if (users.length > 0) console.log(users[0].name);
// else console.log('user array empty');
// */

// // The for-of Loop
// // const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // for (const item of menu) console.log(item);

// // for (const [i, el] of menu.entries()) {
// //   console.log(`${i + 1}: ${el}`);
// // }

// // console.log([...menu.entries()]);
// /*
// // 1.
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// // 5.
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // 6.
// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// //}
// ;*/

// // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// // printGoals('Davies', 'Muller');
// // printGoals(...game.scored);

// // 7.
// // team1 < team2 && console.log('Team 1 is more likely to win');
// // team1 > team2 && console.log('Team 2 is more likely to win');

// // Logical Assignment Operators
// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// // OR assignment operator
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// // nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // AND assignment operator
// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);


// ///////////////////////////////////////
// // The Nullish Coalescing Operator
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);


// ///////////////////////////////////////
// // Short Circuiting (&& and ||)

// console.log('---- OR ----');
// // Use ANY data type, return ANY data type, short-circuiting
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);
