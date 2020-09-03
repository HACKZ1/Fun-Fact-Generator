import React from 'react'

class Header extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <div>
                <h1 className="text-center text-primary">Click the button below to generate a random fact</h1>
            </div>
        )
    }
}

export default Header