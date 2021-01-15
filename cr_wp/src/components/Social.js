import React from 'react';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

const Social = () =>{
	return(
		<div className="card">
			<div className="card-header">
				Redes sociales
			</div>
			<div className="card-body">							
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<div>
							<GitHubIcon
							/>
						</div>
						<a
							className="list-group-item-action"							
							href="https://github.com/HimikoKuronaga"
						> 
							Github
						</a>	
					</li>	
					<li className="list-group-item">
						<div> 
							<LinkedInIcon 
							/> 
						</div>
						<a	
							className="list-group-item-action mt-auto mb-auto"							
							href="http://www.linkedin.com/in/hugo-hern%C3%A1ndez-3308591a4"
						> Linkedlin	
						</a>	
					</li>
					
					<li className="list-group-item">
						<div>
							<FacebookIcon 
							/>	
						</div>
						<a 
							className="list-group-item-action"							
							href="http://www.facebook.com/himiko.kuroonaga"
						>
							Facebook
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Social;
