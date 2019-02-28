import React from 'react';
import './ContentImageBlock.scss';

export class ContentImageBlock extends React.Component {
    render(){
        
        return(
            <div className="container content-image-block">
                <div className="row justify-content-center">
                    <div className="col-md-6 gallery-grid">                       
                        <div className="gallery-item item-1"></div>
                    
                        <div className="gallery-item item-2"></div>
                    
                        <div className="gallery-item item-3"></div>                        
                    </div>
                    <div className="col-md-6 content-column">
                        <div>
                            <h2 className="title">ANSWER YOUR BODY'S NEEDS</h2>
                        </div>     
                        <p className="main-copy"> 
                          The way ingredients are sourced affects the way we nourish our bodies. Author Mark Schatzer believes our body naturally devolops an appetite for the foods and nutrients it needs to be healthy, but that artificial flavourings are getting in the way. This can be reversed by focusing on high-quality ingredients and being mindful as your appetite guides you to consume according to your body's needs.  
                        </p>                   
                        <h4 className="sub-title">BE MINDFUL</h4>
                        <p className="sub-copy">
                            Sourcing local or organic food is a good way to start being more mindful about what you're cooking and eating.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}