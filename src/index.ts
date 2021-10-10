import { NumberCollection } from "./NumberCollection"
import { CharacterCollection } from "./CharacterCollection"
import { LinkedList } from "./LinkedList"

const numberCollection = new NumberCollection([4, -3, 110, 2])
numberCollection.sort()
console.log(numberCollection.data)

const characterCollection = new CharacterCollection('ZxYmba')
characterCollection.sort()
console.log(characterCollection.data)

const linkedList = new LinkedList()
linkedList.add(100)
linkedList.add(-11)
linkedList.add(-3)
linkedList.add(7)

linkedList.sort()
linkedList.print()
