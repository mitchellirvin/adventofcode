var currentFish = [5,1,1,3,1,1,5,1,2,1,5,2,5,1,1,1,4,1,1,5,1,1,4,1,1,1,3,5,1,1,1,1,1,1,1,1,1,4,4,4,1,1,1,1,1,4,1,1,1,1,1,5,1,1,1,4,1,1,1,1,1,3,1,1,4,1,4,1,1,2,3,1,1,1,1,4,1,2,2,1,1,1,1,1,1,3,1,1,1,1,1,2,1,1,1,1,1,1,1,4,4,1,4,2,1,1,1,1,1,4,3,1,1,1,1,2,1,1,1,2,1,1,3,1,1,1,2,1,1,1,3,1,3,1,1,1,1,1,1,1,1,1,3,1,1,1,1,3,1,1,1,1,1,1,2,1,1,2,3,1,2,1,1,4,1,1,5,3,1,1,1,2,4,1,1,2,4,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,4,3,1,2,1,2,1,5,1,2,1,1,5,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,1,1,1,1,1,3,1,1,5,1,1,1,1,5,1,4,1,1,1,4,1,3,4,1,4,1,1,1,1,1,1,1,1,1,3,5,1,3,1,1,1,1,4,1,5,3,1,1,1,1,1,5,1,1,1,2,2]

function countFish(fish) {
  var map = toFishMap(fish)

  for (var day = 0; day < 256; day++) {
    var prev = map.get(8)
    var next = 0
    for (var age = 8; age >= 0; age--) {
      if (age == 0) {
        // reset existing fishy spawn timers
        map.set(6, map.get(6) + prev)
        // spawn new fishies
        map.set(8, prev)
      } else {
        next = map.get(age - 1)
        map.set(age - 1, prev)
        prev = next
      }
    }
  }

  var sum = 0
  for (var [key, value] of map.entries()) {
    sum += value
  }

  return sum
}

function toFishMap(fishes) {
  var map = new Map()
  map.set(0, 0)
  map.set(1, 0)
  map.set(2, 0)
  map.set(3, 0)
  map.set(4, 0)
  map.set(5, 0)
  map.set(6, 0)
  map.set(7, 0)
  map.set(8, 0)

  for (var fish of fishes) {
    map.set(fish, map.get(fish) + 1)
  }

  return map
}

console.log(countFish(currentFish))
