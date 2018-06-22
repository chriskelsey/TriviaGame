var correct = 0;
var incorrect = 0;
var count = 120;
var timer;
var cntdnTimer;
var answers = {
	lamp: 		'luxoJr',
	pixar: 		'cgd',
	division: 	'ilm',
	original: 	'lifeToy',
	boo: 		'nemo',
	shark: 		'bruce',
	sharkName: 	'shark',
	profitable: 'cars',
	review: 	'cars2',
	actor: 		'john'
};

$(document).ready(function(){

	startGame();
	$('.btn-submit').on('click',function(e){
		compareAnswers();
		e.preventDefault();
	});

	function startGame() {
		$('form, .score-row').hide();

		$('.start').on('click', function(){
			$('.start-row').hide();
			$('form').show();
			timer = setTimeout(compareAnswers,count * 1000);
			cntdnTimer = setInterval(countdown, 1000);
		});
	}

	function displayScores(corr,incorr) {
		clearTimeout(timer);
		clearInterval(cntdnTimer);
		$('form').hide();
		$('.score-row').show();
		$('.correct').append(corr);
		$('.incorrect').append(incorr);
		$('.restart').on('click', function() {
			restart();
		})
	}

	function compareAnswers(){
	 	var divs = $('form').children('div');
	 	for (el in answers){
			for (var i = 0; i < divs.length; i++) {
				var inputs = $(divs[i]).find('input');
				if($(divs[i]).attr('id') == el){
					for (var j = 0; j < inputs.length; j++) {
						if($(inputs[j]).is(':checked') && $(inputs[j]).val() === answers[el]){
							correct++;
						}
					}
				}
				
			}
			incorrect = 10 - correct;
		}
		displayScores(correct,incorrect);
	}

	function restart() {
		$('form, .score-row').hide();
		incorrect = 0;
		correct = 0;
		count = 120;
		$('form').show();
		$('form').find('input').prop('checked',false);
		$('.correct').text('Correct Answers: ');
		$('.incorrect').text('Incorrect Answers: ');
		timer = setTimeout(compareAnswers,count * 1000);
		cntdnTimer = setInterval(countdown, 1000);
	}

	function countdown() {
		count--;
		$('h2 span').text(count);
	}

});