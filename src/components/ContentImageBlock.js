import React from 'react';
import './ContentImageBlock.scss';
import Trigger from './Modal';
import GalleryItem from './GalleryItem';

export class ContentImageBlock extends React.Component {
     constructor(props) {
            super(props);
            this.state = {show: false}
            this.handleClick = this.handleClick.bind(this);
        }
        handleClick(event) {
            const element = event.target;
            
            console.log(element);
        }
        openModel(){
            this.setState({
                 show: true
            })
        }
    render(){
       
        return(
            
            <div className="container content-image-block">
                <div className="row justify-content-center">
                    <div className="col-md-8 gallery-grid">                       
                        <div onClick={() => this.openModel()} className={this.props.className}></div>
                    
                        <div onClick={() => this.openModel()}  className="gallery-item item-2"></div>
                    
                        <div onClick={() => this.openModel()}  className="gallery-item item-3"></div>                        
                    </div>
                    <div className="col-md-4 content-column">
                        <div>
                            <h2 className="title">ANSWER YOUR BODY'S NEEDS</h2>
                        </div>     
                        <p className="main-copy"> 
                          The way ingredients are sourced affects the way we nourish our bodies. Author Mark Schatzer believes our body naturally devolops an appetite for the foods and nutrients it needs to be healthy, but that artificial flavourings are getting in the way. This can be reversed by focusing on high-quality ingredients and being mindful as your appetite guides you to consume according to your body's needs.  
                        </p>                   
                        <h6 className="sub-title">BE MINDFUL</h6>
                        <p className="sub-copy">
                            Sourcing local or organic food is a good way to start being more mindful about what you're cooking and eating.
                        </p>
                    </div>
                </div>
                 <Trigger modal={this.state.show}/>
            </div>

            
        )
    }
}