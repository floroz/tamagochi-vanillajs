export function getNextHungryTime(clock) {
  return Math.floor(Math.random() * 3) + 5 + clock;
}

export function getNextDieTime(clock) {
  return Math.floor(Math.random() * 2) + 3 + clock;
}

export function getNextPoopTime(clock) {
  return Math.floor(Math.random() * 3) + 4 + clock;
}
