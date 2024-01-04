function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 22,
            blocks: 15,
            slamDunks: 10,
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
      },
    };
  }
  console.log(gameObject());

//   //calling the gameObject function inside of our `homeTeamName` function and operate on the object
//   function homeTeamName() {
//     let object = gameObject()
//     return object['home']['teamName']
//   }
  
//   console.log(homeTeamName())
//   // logs "Brooklyn Nets"

//   //access the properties of the object directly off the function call
//   function homeTeamName(){
//     return gameObject()['home']['teamName']
//   }
  
//   console.log(homeTeamName())
//   // logs "Brooklyn Nets"

//   let x = 99;
// let y = 42;
// debugger;
// console.log("x:", x);

// There are three ways to iterate through objects in JavaScript:

// - Use a key you know and type the key as a string manually `oo['some_key']`
// - Use a key you know and type it after a dot manually `oo.some_key`
// - Notice that you can only access keys via the `.` if they have a name like a
//   legal JavaScript variable (basically it can't have spaces, you'd have to use
//   the string way)

// let oo = { foo: 42, bar: 83, "key w/ spaces": true };
// console.log(oo["foo"]);
// console.log(oo["bar"]);
// console.log(oo["key w/ spaces"]);

// console.log(oo.foo);
// console.log(oo.bar);

// // you can't use the dot to access this key because it has spaces
// // console.log(oo.key w/ spaces)

// //Using a for..in loop to iterate over all of the keys and access their value through brackets
// let ooo = { foo: 42, bar: 83, baz: 79 };
// for (let key in ooo) {
//   let value = ooo[key];
//   console.log("key:", key, "value:", value);
// }
// // Using built-in functions attached to the `Object` class to access keys, values,or entries:
// let oooo = { foo: 42, bar: 83, baz: 79 };
// console.log("   Object.keys(oooo) =>", Object.keys(oooo));
// console.log(" Object.values(oooo) =>", Object.values(oooo));
// console.log("Object.entries(oooo) =>", Object.entries(oooo));


//numPointsScored(playerName
function numPointsScored(playerName) {
    for (const team in gameObject()) {
      if (gameObject()[team].players[playerName]) {
        return gameObject()[team].players[playerName].points;
      }
    }
    return "Player not found";
  }
  
  //shoeSize(playerName)
  function shoeSize(playerName) {
    for (const team in gameObject()) {
      if (gameObject()[team].players[playerName]) {
        return gameObject()[team].players[playerName].shoe;
      }
    }
    return "Player not found";
  }
//teamColors(teamName)
function teamColors(teamName) {
    for (const team in gameObject()) {
      if (gameObject()[team].teamName === teamName) {
        return gameObject()[team].colors;
      }
    }
    return "Team not found";
  }
//teamNames()
function teamNames() {
    const teams = gameObject();
    return [teams.home.teamName, teams.away.teamName];
  }
//playerNumbers(teamName)
function playerNumbers(teamName) {
  for (const team in gameObject()) {
    if (gameObject()[team].teamName === teamName) {
      const players = gameObject()[team].players;
      return Object.values(players).map(player => player.number);
    }
  }
  return "Team not found";
}

//playerStats(playerName)
function playerStats(playerName) {
    for (const team in gameObject()) {
      if (gameObject()[team].players[playerName]) {
        return gameObject()[team].players[playerName];
      }
    }
    return "Player not found";
  }

  //BIG SHOE REBOUNDS 
  function bigShoeRebounds() {
    let largestShoeSize = 0;
    let playerWithLargestShoe = '';
  
    // Loop through the players to find the one with the largest shoe size
    for (const team in gameObject()) {
      const players = gameObject()[team].players;
      for (const player in players) {
        if (players[player].shoe > largestShoeSize) {
          largestShoeSize = players[player].shoe;
          playerWithLargestShoe = player;
        }
      }
    }
  
    // Return the number of rebounds for the player with the largest shoe size
    function bigShoeRebounds() {
        let largestShoeSize = 0;
        let playerWithLargestShoe = '';
      
        // Loop through the players to find the one with the largest shoe size
        for (const team in gameObject()) {
          const players = gameObject()[team].players;
          for (const player in players) {
            if (players[player].shoe > largestShoeSize) {
              largestShoeSize = players[player].shoe;
              playerWithLargestShoe = player;
            }
          }
        }
      
        // Return the number of rebounds for the player with the largest shoe size
        return gameObject().home.players[playerWithLargestShoe].rebounds || gameObject().away.players[playerWithLargestShoe].rebounds;
      }
      //mostPointsScored
      function mostPointsScored() {
        let maxPoints = 0;
        let playerWithMostPoints = '';
      
        for (const team in gameObject()) {
          const players = gameObject()[team].players;
          for (const player in players) {
            if (players[player].points > maxPoints) {
              maxPoints = players[player].points;
              playerWithMostPoints = player;
            }
          }
        }
      
        return playerWithMostPoints;
      }
     // winningTeam
     function winningTeam() {
        let homeTeamPoints = 0;
        let awayTeamPoints = 0;
      
        for (const team in gameObject()) {
          const players = gameObject()[team].players;
          for (const player in players) {
            if (team === 'home') {
              homeTeamPoints += players[player].points;
            } else {
              awayTeamPoints += players[player].points;
            }
          }
        }
      
        return homeTeamPoints > awayTeamPoints ? gameObject().home.teamName : gameObject().away.teamName;
      }
      //playerWithLongestName
      function playerWithLongestName() {
        let longestName = '';
      
        for (const team in gameObject()) {
          const players = gameObject()[team].players;
          for (const player in players) {
            if (player.length > longestName.length) {
              longestName = player;
            }
          }
        }
      
        return longestName;
      }
      //returns true if the player with the longest name had the most steals
      function doesLongNameStealATon() {
        let longestName = '';
        let mostStealsPlayer = '';
        let maxSteals = 0;
      
        for (const team in gameObject()) {
          const players = gameObject()[team].players;
          for (const player in players) {
            if (player.length > longestName.length) {
              longestName = player;
            }
            if (players[player].steals > maxSteals) {
              maxSteals = players[player].steals;
              mostStealsPlayer = player;
            }
          }
        }
      
        return longestName === mostStealsPlayer;
      }
      
  }
  
  

