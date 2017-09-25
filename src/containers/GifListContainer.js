import React from 'react'
import GifSearch from "../components/GifSearch"
import GifList from '../components/GifList'

class GifListContainer extends React.Component {

  constructor(){
    super()

    this.state = {
      gifs: [],
      searchTerm: ""
    }
  }

  handleSearchTerm(event){
    const newSearchTerm = event.target.value
    console.log(newSearchTerm)
    this.setState({
      searchTerm: newSearchTerm
    })
  }

  handleSubmit(event){
    event.preventDefault()
    const allGifs = fetch("http://api.giphy.com/v1/gifs/search?q={this.state.searchTerm}&api_key=dc6zaTOxFJmzC")
    .then((response) => response.json())
    .then((something) => {
      console.log(something.data)
      this.setState({
        gifs: something.data
      })
    })
  }

  render() {
    console.log("Rendering....")
    return(
      <div>
        < GifSearch handleSubmit={this.handleSubmit} handleSearchTerm={this.handleSearchTerm}/>
        < GifList data={this.state.gifs} />
      </div>
    )
  }
}

export default GifListContainer
