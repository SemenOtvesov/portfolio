"use strict"

const ratings = document.querySelectorAll('.rating');

if(ratings.length > 0){
	initRatings();
}

//основная функция
function initRatings(){
	let ratingActive, ratingValue;
	//бегаем по всем рейтингам на странице
	for(let index = 0; index < ratings.length; index++){
		const rating = ratings[index];
		initRating(rating);
	}

	//инициализируем конкретный рейтинг
	function initRating(rating){
		initRatingVars(rating);

		setRatingActiveWidth();

		if(rating.classList.contains('rating__set')){
			setRating(rating);
		}
	}

	//инициализация переменных
	function initRatingVars(rating){
		ratingActive = rating.querySelector('.rating__active')
		ratingValue = rating.querySelector('.rating__value')
	}


	//изменяем ширину активных звёзд
	function setRatingActiveWidth(index = ratingValue.innerHTML){
		const ratingActiveWidth = index / 0.05;
		ratingActive.style.width = `${ratingActiveWidth}%`;
	}

	//возможность указать оценку
	function setRating(rating) {
		const ratingItems = rating.querySelectorAll('.rating__item');

		for(let index = 0; index < ratingItems.length; index++){
			const ratingItem  = ratingItems[index];
			
			ratingItem.addEventListener('mouseenter', function(e){
				//обьявление переменных
				initRatingVars(rating);
				//обновление активных звёзд
				setRatingActiveWidth(ratingItem.value);
			});
			ratingItem.addEventListener('mouseleave', function(e){
				//обновление активных звёзд
				setRatingActiveWidth();
			});

			ratingItem.addEventListener('click', function(e){
				//обновление переменных
				initRatingVars(rating);
				if(rating.dataset.ajax){
					//отправить на сервер
					setRatingValue(ratingItem.value, rating);}
				else{
					ratingValue.innerHTML = index + 1;
					setRatingActiveWidth();
				}
			});
		}
	}
}