const asgardianBrothers = [
    {
      firstName: "Thor",
      familyName: "Odinsson"
    },
    {
      firstName: "Loki",
      familyName: "Laufeysson-Odinsson"
    }
  ]
  
  function intro(person, line) {
    return `${person.firstName} ${person.familyName} says: ${line}`
  }
  
  const phrase = "I like this brown drink very much, bring me another!"
//   console.log(intro(asgardianBrothers[0], phrase))


// Using call and apply instead to specifie the context of our function
function introWithContext(line){
    return `${this.firstName} ${this.familyName} says: ${line}`
  }

  console.log(introWithContext.call(asgardianBrothers[0], phrase))
  console.log(introWithContext.apply(asgardianBrothers[0], [phrase]))
  
