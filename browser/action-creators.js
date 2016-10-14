export const ALL_PUPPIES = "ALL_PUPPIES";

export const findPuppies = allPuppies => {
  console.log("inside action creator", allPuppies)
  return {
  type: ALL_PUPPIES,
  allPuppies
  }
}

export const loadPuppies = function () {
  return function (dispatch) {
    fetch('/api/puppies')
    .then(function (res) {
      return res.json();
    })
    .then(function (puppies) {
      dispatch(findPuppies(puppies));
    })
    .catch(function (err) {
      console.error(err)
    });
  };
};

function dispatch (actionOrThunk) {
  const type = typeof actionOrThunk;
  if (type === 'function') {
    let thunk = actionOrThunk;
    thunk(dispatch);
  } else {
    let action = actionOrThunk;
    callReducer(action);
  }
}
