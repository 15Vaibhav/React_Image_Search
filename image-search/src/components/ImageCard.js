import React from 'react'

 class ImageCard extends React.Component {
     constructor(props){
         super(props);
         this.imageRef = React.createRef();
         this.state={
           span:"hii"
          }
     }
  
     componentDidMount=()=>{
         console.log(this.imageRef.current.clientHeight)
        //  this.imageRef.current.addEventListener('load',this.setSpans);
         const height = this.imageRef.current.clientHeight
         const spans = Math.ceil(height/10) 
         this.setState({span:spans})
     }
     setSpans=()=>{
        console.log(this.imageRef.current.clientHeight)
       
    }

  render() {
    return (
      <div style={{gridRowEnd:`span ${this.state.span}`}}>
        <img ref ={this.imageRef} alt={this.props.id} src={this.props.image.urls.regular} ></img>
      </div>
    )
  }
}

export default ImageCard
   