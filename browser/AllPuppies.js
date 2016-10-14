import React from 'react';


export default class AllPuppies extends React.Component {
  componentDidMount () {
    // console.log('were here')
    // this.props.onLoadPuppies();
  }

  render () {
    return (
      <div>
        <ul className="list-unstyled">

        { this.props.allPuppies.map(function(puppy){
          return <li key={puppy.id}> {puppy.name} </li>
          })


        }

        </ul>
      </div>
    )
  }
}
