import React, {useState} from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css'

function TinderCards() {
	const [dogs, setDogs] = useState([
		{
				name: "blaf",
				img: "https://i.pinimg.com/originals/17/26/05/172605b91e28d39de018c27eeb1c5324.jpg"
		},
		{
				name: "piet",
				img: "https://i.pinimg.com/originals/f3/fd/68/f3fd688c316b15fec06e7b5ba689bbcb.jpg"
		},
		{
			name: "bill",
			img: "	https://i.insider.com/5aa94e7342e1cc03fc5c520b?width=800&format=jpeg"
	}
	]);

    return (
			<div>
				<div className="tindercards__container">
					{dogs.map(dog => (
						<TinderCard
							key={dog.name}
							className="swipe"
							preventSwipe={['up', 'down']}
						>
							<div
								style={{ backgroundImage: `url(${dog.img})`}}
								className="card"
							>
								<h3>{dog.name}</h3>
							</div>
						</TinderCard>
					))}
				</div>
			</div>
    )
}

export default TinderCards;
