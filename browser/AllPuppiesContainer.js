import AllPuppies from './AllPuppies.js';
import { connect } from 'react-redux';
import { findPuppies } from './action-creators';
import { loadPuppies } from './action-creators';

const allPuppies = [
  { id: 1, name: 'Cody' },
  { id: 2, name: 'Ben' },
  { id: 3, name: 'Bubba' }
];

// const mapStateToProps = ({allPuppies}) => ({allPuppies});


const mapStateToProps = function(state) {
  return {
    allPuppies: state.allPuppies
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   loadAllPuppies: function(puppies) {
//     return dispatch(findPuppies(puppies))
//   }
// })

// const mapDispatchToProps = function (dispatch) {
//   return {
//     onLoadPuppies: function () {
//       dispatch(loadPuppies(allPuppies));
//     }
//   };
// };



export default connect(
  mapStateToProps,

)(AllPuppies);
