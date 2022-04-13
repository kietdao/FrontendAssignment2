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

function convertToStringFiltersAnimal(animals) {
    return animals.filter(animal => animal.name.includes('t')).map(animal => {
        return `name: ${animal.name} - size: ${animal.size} - weight: ${animal.weight}kg`
    })
}

console.log(convertToStringFiltersAnimal(animals))