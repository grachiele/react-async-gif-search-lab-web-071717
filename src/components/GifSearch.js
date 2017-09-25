import React from 'react'

class GifSearch extends React.Component {
  constructor(){
    super()
  }

  render() {
    return(
      <div>
        <form onSubmit={this.props.handleSubmit.bind(this)}>
          <input type="text" onChange={this.props.handleSearchTerm.bind(this)}></input>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default GifSearch
