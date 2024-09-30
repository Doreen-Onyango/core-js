person.country = 'FR'
let clone1 = Object.assign({}, person)
clone1.age =78
let clone2 = JSON.parse(JSON.stringify(person))
clone2.age =78
let samePerson = {...person}
samePerson.age += 1
Object.freeze(clone1)
Object.freeze(clone2)
