import React from 'react'

import ele1top from '../static/ele1top.jpg'
import ele1con from '../static/ele1con.jpg'
import bottom from '../static/bottom.jpg'

var Home=React.createClass({
	render(){
		return(
			<div id="elm1">
				<div className='top'>
					<img src={ele1top}/>
				</div>
				<div className='con'>
					<img src={ele1con}/>
				</div>
				<div className='bottom'>
					<img src={bottom}/>
				</div>
			</div>
		)
	}
})

export default Home;
