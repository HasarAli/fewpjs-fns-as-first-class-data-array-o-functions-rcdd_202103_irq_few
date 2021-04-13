function nameDog(dogName, dogBreed) {
  return `${dogName} the ${dogBreed}`;
}

function doWithDog(activity, name) {
  const sentence = `${activity} ${name}`;
  console.log(sentence);
  return sentence;
}

function wakeDog(dogName, dogBreed) {
  const str = `Wake ${nameDog(dogName, dogBreed)}`;
  console.log(str);
  return str;
}