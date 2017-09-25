import React from 'react'

class GifList extends React.Component {

  render(){
    const gifs = this.props.data.map((gif) => {
      return(
        <li>{gif.images.downsized.url}</li>
      )
    })
    return(
      <ul>
        {gifs}
      </ul>
    )
  }
}

export default GifList
