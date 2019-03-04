import React from 'react'
const images = [
    {
        photo: "../assets/gallery-1.jpg",
        alt: "Cruise tanker"
    },{
        photo: "../assets/gallery-2.jpg",
        alt: "Cheese board"
    },
    {
        photo: "../assets/gallery-3.jpg",
        alt: "Wine"
    }
]
export default class GalleryItem extends React.Component{
    constructor() {
        super(...arguments);
    }
    
    render(){

        return(
            <img src={this.props.src} className={this.props.className} onClick={() => this.openModel()}></img>
        )
    }
}