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