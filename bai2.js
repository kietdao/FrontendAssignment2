const animals = [
    {
      name: "cat",
      size: "small",
      weight: 5
    },
    {
      name: "dog",
      size: "medium",
      weight: 10
    },
    {
      name: "elephant",
      size: "big",
      weight: 5000
    }
]

function findAnimalHaveWeightLargerThan50(animals) {
    return animals.filter(animal => animal.weight > 50)
}

console.log(findAnimalHaveWeightLargerThan50(animals))