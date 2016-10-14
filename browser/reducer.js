'use strict'

import { findPuppies } from './action-creators';
import { ALL_PUPPIES } from './action-creators';



export default function reducer(state={allPuppies: []}, action) {
  console.log("reducer will recieve", action)
  switch (action.type) {
    case ALL_PUPPIES:
      const newState = Object.assign({}, state, { allPuppies: action.allPuppies });
      console.log("This is new state", newState)
      return newState;
    default: return state;
  }

}



