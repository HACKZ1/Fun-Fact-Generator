import React from 'react'

class Display extends React.Component {
    constructor() {
        super()
        this.state = {
            "fact": "You havent generated a fact :("
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        let URL = "https://uselessfacts.jsph.pl/random.json?language=en"
        fetch(URL)
            .then(response => {
                return response.json()
            })
            .then(data => {
                let fact = data.text
                this.setState({
                    "fact": fact
                })
            })
    }
    render() {
        return (
            <div className="text-center">
                <button onClick={this.handleClick} className="btn btn-danger outlin-danger text-center text-white m-4">Click Me</button>
                <h3 className="text-center mt-2">{this.state.fact}</h3>
            </div>
        )
    }
}

export default Display