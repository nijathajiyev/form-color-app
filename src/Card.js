import {Component} from "react";


export class Card extends Component{
    render() {
        let {width, height,color} = this.props
        return (
            <div style={{width: `${width}px`, height: `${height}px`, backgroundColor:color, marginTop:10}}>

            </div>
        )
    }
}