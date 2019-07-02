
const movePlayer = function(distance, direction) {

  return new Promise((resolve, reject) => { //closure = returns a fn
      console.log(`moved ${distance} meter to the ${direction}`);

      true ? resolve() : reject();
  })
};


movePlayer(100, 'left')
    .then(() => movePlayer(200, 'forward'))
    .then(() => movePlayer(300, 'right'))
    .catch((error) => console.log(error.message));