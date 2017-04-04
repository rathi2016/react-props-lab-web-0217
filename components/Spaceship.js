 import React from 'react'

 export default class Spaceship extends React.Component {
   render(){
     return(
       <div>
       <h1>{this.props.name}</h1>
       <h2>{this.props.speed}</h2>
       <p>{this.props.hasRockets}</p>
       <p>{this.props.colors.join(',')}</p>
       </div>
     );
   }
 }

 Spaceship.defaultProps = {
   hasRockets: false,
   colors: ['black', 'red'],
 };
