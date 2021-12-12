import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ info, title }) => {
	const [isToggled, setIsToggled] = useState(false);

	return (
		<div className='question'>
			<header>
				<h4>{title}</h4>
				{isToggled ? (
					<span className='btn'>
						<AiOutlineMinus onClick={() => setIsToggled(!isToggled)} />
					</span>
				) : (
					<span className='btn'>
						<AiOutlinePlus onClick={() => setIsToggled(!isToggled)} />
					</span>
				)}
			</header>
			{isToggled && <p>{info}</p>}
		</div>
	);
};

export default Question;
