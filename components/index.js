import React from "react";
import img from "../static/ele3.jpg"
var Index=React.createClass({
    render(){
        return(
            <div>                
                <img className="ddf_img" src={img} />
            </div>
        )
    }
})

export default Index;