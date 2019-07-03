import React, {Component} from 'react'
import {Button} from 'antd'
import './antd.css'

class StatePropTest2 extends Component {

    constructor() {
        super()
        this.state = {
            message1: 'Assalaam u alaikum',
            message2: ' wa rahmatullahe wa barakatuhu',
            message3: 'May Allah SWT shower you with His infinite bounties'
        }
    }

    greetingMessage = () => {
        console.log(this.state.message1 + this.state.message2)
    }

    blessingMessage = (message) => {
        console.log(message)
    }

    render() {

        return(
            <div>
                <Button type="primary" icon="search" onClick={this.greetingMessage}>
                    Search
                </Button>
                <AnotherClass msg={this.state.message3} msgMethod={this.blessingMessage}/>
            </div>
        );
    }
}

class AnotherClass extends Component {

    render() {
        return(
            <div>
                <Button type="primary" icon="alert" onClick={() => this.props.msgMethod(this.props.msg)}>
                    Alert
                </Button>
            </div>
        );
    }
}
export default StatePropTest2