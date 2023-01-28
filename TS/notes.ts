
type Armour = {
  armor: string
  helmet: string
  ring1: string
  ring2: string
  boots: string
  gloves: string
}
type TypeArmory = keyof Armour

interface GenericTest<T> {
  defense: number
  equipment: T
}

type GenericTestWithItem = GenericTest<TypeArmory>
type GenericTestWithArray = GenericTest<Array<number>>

const item: GenericTestWithItem = { defense:123, equipment:"armor" }
