function name(dogName, dogBreed) {
  return `${dogName} the ${dogBreed}`;
}

function doWithDog(activity, name) {
  const sentence = `${activity} ${name}`;
  console.log(sentence);
  return sentence;
}

function wakeDog(dogName, dogBreed) {
  return doWithDog('Wake', name(dogName, dogBreed));
}

function leashDog(dogName, dogBreed) {
  return doWithDog('Leash', name(dogName, dogBreed));
}

function walkToPark(dogName, dogBreed) {
  return doWithDog('Walk to the park with', name(dogName, dogBreed));
}

function throwFrisbee(dogName, dogBreed) {
  return doWithDog('Throw the frisbee for', name(dogName, dogBreed));
}

function unleashDog(dogName, dogBreed) {
  return doWithDog('Unleash', name(dogName, dogBreed));
}