import React from 'react'

class SearcBar extends React.Component {
     state={term:''}
    
   preventRefresh=event=>{
       event.preventDefault()
        this.props.onSubmit(this.state.term)
   }
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit ={this.preventRefresh}>
                <div className="field">
                <label>Image Search</label> 
                    <input type="text" 
                    value={this.state.term} 
                    onChange={(event)=>{this.setState({term:event.target.value})}}></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearcBar
