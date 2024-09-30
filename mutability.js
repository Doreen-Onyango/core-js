const clone1 = Object.assign({}, person)
Object.freeze(clone1)
console.log(clone1)
const clone2 = JSON.parse(JSON.stringify(person))
Object.freeze(clone2)
person.age += 1
person.country = 'FR'
const samePerson = person
console.log(samePerson)

