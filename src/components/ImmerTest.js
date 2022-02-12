import React from 'react'
import { produce } from 'immer';

function ImmerTest() {

  const obj1 = {
    objectProps: 'string',
    object1: {
      object2: {
        a: 5
      }
    }
  }

  const obj2 = {
    ...obj1,
    object1: {
      ...obj1.object1,
      object2: {
        ...obj1.object2,
        a: 6
      }
    }
  }

  const obj3 = produce(obj1, draft => {
    //mutate the draft
    draft.object1.object2.a = 10;
    draft.object1.object2.text = 'hello';

  })
  return (
    <div>Immer</div>
  )
}

export default ImmerTest;