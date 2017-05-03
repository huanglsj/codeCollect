$(document).ready(function() {
	$('#section0').find('h1').delay(300).animate({
		top: '0%',
		opacity: '1'
	}, 1500, 'easeOutExpo');
	$('#section0').find('p').delay(800).animate({
		top: '0%',
		opacity: '1'
	}, 2000, 'easeOutExpo');
	$('#fullpage').fullpage({
		slidesColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f2f2f2', '#ccddff', '#fff', '#E01A60'],
		verticalCentered: false,
		'navigation': true,
		'navigationPosition': 'right',
		'navigationTooltips': ['Home', 'About', 'Work', 'Project', 'Skill', 'Friend', 'Family', 'Hobby', 'Game', 'Contact'],
		afterLoad: function(anchorLink, index) {
			if (index == 1) {
				$('#section0').find('h1').delay(200).animate({
					top: '0%',
					opacity: '1'
				}, 1500, 'easeOutExpo');
				$('#section0').find('p').delay(700).animate({
					top: '0%',
					opacity: '1'
				}, 1500, 'easeOutExpo');
				$('#section1').find('.span1').delay(100).animate({
					left: '-150%',
					opacity: '0',
					transform: 'rotate(180deg)'
				}, 500, 'easeOutExpo').removeClass('xuanzhuan1');
				$('#section1').find('.span2').delay(100).animate({
					left: '-150%',
					opacity: '0'
				}, 500, 'easeOutExpo').removeClass('xuanzhuan2');
				$('#section1').find('.span3').delay(100).animate({
					left: '-150%',
					opacity: '0'
				}, 500, 'easeOutExpo').removeClass('xuanzhuan3');
				$('#section1').find('.span1-2').delay(100).animate({
					right: '-200%',
					opacity: '0'
				}, 500, 'easeOutExpo');
				$('#section1').find('.span2-2').delay(100).animate({
					right: '-200%',
					opacity: '0'
				}, 500, 'easeOutExpo');
				$('#section1').find('.span3-2').delay(100).animate({
					right: '-200%',
					opacity: '0'
				}, 500, 'easeOutExpo')
			};
			if (index == 2) {
				$('#section0').find('h1').delay(100).animate({
					top: '-30%',
					opacity: '0'
				}, 1500, 'easeOutExpo');
				$('#section0').find('p').delay(200).animate({
					top: '-30%',
					opacity: '0'
				}, 1500, 'easeOutExpo');
				$('#section1').find('.span1').delay(500).animate({
					left: '0%',
					opacity: '1',
					transform: 'rotate(180deg)'
				}, 500, 'easeOutExpo').addClass('xuanzhuan1');
				$('#section1').find('.span2').delay(1000).animate({
					left: '0%',
					opacity: '1'
				}, 500, 'easeOutExpo').addClass('xuanzhuan2');
				$('#section1').find('.span3').delay(1500).animate({
					left: '0%',
					opacity: '1'
				}, 500, 'easeOutExpo').addClass('xuanzhuan3');
				$('#section1').find('.span1-2').delay(500).animate({
					right: '0%',
					opacity: '1'
				}, 500, 'easeOutExpo');
				$('#section1').find('.span2-2').delay(1000).animate({
					right: '0%',
					opacity: '1'
				}, 500, 'easeOutExpo');
				$('#section1').find('.span3-2').delay(1500).animate({
					right: '0%',
					opacity: '1'
				}, 500, 'easeOutExpo');
				$('#section2').find('.logo').delay(100).animate({
					left: '-50%',
					opacity: '0'
				}, 1500, 'easeOutExpo');
				$('#section2').find('.jiuzhi1').delay(100).animate({
					right: '-50%',
					opacity: '0'
				}, 1500, 'easeOutExpo');
				$('#section2').find('.jiuzhi2').delay(100).animate({
					right: '-50%',
					opacity: '0'
				}, 1500, 'easeOutExpo')
			}
			if (index == 3) {
				$('#section1').find('.span1').delay(100).animate({
					left: '-150%',
					opacity: '0',
					transform: 'rotate(180deg)'
				}, 500, 'easeOutExpo').removeClass('xuanzhuan1');
				$('#section1').find('.span2').delay(100).animate({
					left: '-150%',
					opacity: '0'
				}, 500, 'easeOutExpo').removeClass('xuanzhuan2');
				$('#section1').find('.span3').delay(100).animate({
					left: '-150%',
					opacity: '0'
				}, 500, 'easeOutExpo').removeClass('xuanzhuan3');
				$('#section1').find('.span1-2').delay(100).animate({
					right: '-200%',
					opacity: '0'
				}, 500, 'easeOutExpo');
				$('#section1').find('.span2-2').delay(100).animate({
					right: '-200%',
					opacity: '0'
				}, 500, 'easeOutExpo');
				$('#section1').find('.span3-2').delay(100).animate({
					right: '-200%',
					opacity: '0'
				}, 500, 'easeOutExpo');
				$('#section2').find('.logo').delay(500).animate({
					left: '0%',
					opacity: '1'
				}, 1500, 'easeOutExpo');
				$('#section2').find('.jiuzhi1').delay(500).animate({
					right: '0%',
					opacity: '1'
				}, 1500, 'easeOutExpo');
				$('#section2').find('.jiuzhi2').delay(1000).animate({
					right: '0%',
					opacity: '1'
				}, 1500, 'easeOutExpo');
				$('#section3').find('.zhexienian').delay(100).animate({
					top: '-20%',
					opacity: '0'
				}, 1500, 'easeOutExpo');
				$('#section3').find('.zuopin5').delay(100).animate({
					opacity: '0'
				}, 1500, 'easeOutExpo');
				$('#section3').find('.zuopin4').delay(100).animate({
					top: '0px',
					left: '0px',
					opacity: '0'
				}, 1000, 'easeOutExpo');
				$('#section3').find('.zuopin3').delay(100).animate({
					top: '0px',
					left: '0px',
					opacity: '0'
				}, 1000, 'easeOutExpo');
				$('#section3').find('.zuopin2').delay(100).animate({
					top: '0px',
					left: '0px',
					opacity: '0'
				}, 1200, 'easeOutExpo');
				$('#section3').find('.zuopin1').delay(100).animate({
					top: '0px',
					left: '0px',
					opacity: '0'
				}, 1200, 'easeOutExpo')
			}
			if (index == 4) {
				$('#section2').find('.logo').delay(100).animate({
					left: '-50%',
					opacity: '0'
				}, 1500, 'easeOutExpo');
				$('#section2').find('.jiuzhi1').delay(100).animate({
					right: '-50%',
					opacity: '0'
				}, 1500, 'easeOutExpo');
				$('#section2').find('.jiuzhi2').delay(100).animate({
					right: '-50%',
					opacity: '0'
				}, 1500, 'easeOutExpo');
				$('#section3').find('.zhexienian').delay(200).animate({
					top: '0%',
					opacity: '1'
				}, 1500, 'easeOutExpo');
				$('#section3').find('.zuopin5').delay(500).animate({
					opacity: '1'
				}, 1500, 'easeOutExpo');
				$('#section3').find('.zuopin4').delay(800).animate({
					top: '-50px',
					left: '-200px',
					opacity: '1'
				}, 1000, 'easeOutExpo');
				$('#section3').find('.zuopin3').delay(800).animate({
					top: '-50px',
					left: '200px',
					opacity: '1'
				}, 1000, 'easeOutExpo');
				$('#section3').find('.zuopin2').delay(800).animate({
					top: '-100px',
					left: '-400px',
					opacity: '1'
				}, 1200, 'easeOutExpo');
				$('#section3').find('.zuopin1').delay(800).animate({
					top: '-100px',
					left: '400px',
					opacity: '1'
				}, 1200, 'easeOutExpo');
				$('#section4').find('.gamegirl').delay(100).animate({
					left: '-30%',
					opacity: '0'
				}, 1500, 'easeOutExpo');
				$('#section4').find('.jinengtext').delay(100).animate({
					right: '-60%',
					opacity: '0'
				}, 1000, 'easeOutExpo');
				$('#section4').find('.icon i').delay(100).animate({
					left: '-300px',
					opacity: '0'
				}, 500, 'easeOutExpo').removeClass('xuanzhuan3');
				$('#section4').find('.progressbar').delay(100).animate({
					right: '-50%',
					opacity: '0'
				}, 1000, 'easeOutExpo')
			}
			if (index == 5) {
				$('#section3').find('.zhexienian').delay(100).animate({
					top: '-20%',
					opacity: '0'
				}, 1500, 'easeOutExpo');
				$('#section3').find('.zuopin5').delay(100).animate({
					opacity: '0'
				}, 1500, 'easeOutExpo');
				$('#section3').find('.zuopin4').delay(100).animate({
					top: '0px',
					left: '0px',
					opacity: '0'
				}, 1000, 'easeOutExpo');
				$('#section3').find('.zuopin3').delay(100).animate({
					top: '0px',
					left: '0px',
					opacity: '0'
				}, 1000, 'easeOutExpo');
				$('#section3').find('.zuopin2').delay(100).animate({
					top: '0px',
					left: '0px',
					opacity: '0'
				}, 1200, 'easeOutExpo');
				$('#section3').find('.zuopin1').delay(100).animate({
					top: '0px',
					left: '0px',
					opacity: '0'
				}, 1200, 'easeOutExpo');
				$('#section4').find('.gamegirl').delay(300).animate({
					left: '0%',
					opacity: '1'
				}, 1000, 'easeOutExpo');
				$('#section4').find('.jinengtext').delay(300).animate({
					right: '0%',
					opacity: '1'
				}, 1000, 'easeOutExpo');
				$('#section4').find('.icon i').delay(1000).animate({
					left: '0',
					opacity: '0.7'
				}, 1000, 'easeOutExpo').addClass('xuanzhuan3');
				$('#section4').find('.progressbar').delay(1000).animate({
					right: '0%',
					opacity: '0.7'
				}, 1000, 'easeOutExpo');
				$('.progressbar_value').each(function() {
					var num = $(this).prev('.progressbar_label').html();
					$(this).css({
						"background": '#' + Math.floor(Math.random() * 16777215).toString(16),
						'width': '0%'
					});
					$(this).delay(1800).animate({
						width: num
					}, 1500, 'easeOutExpo')
				});
				$('#section5').find('.pengyouright').delay(100).animate({
					right: '-30%',
					opacity: '0'
				}, 1000, 'easeOutExpo');
				$('#section5').find('.pengyou').delay(100).animate({
					left: '-30%',
					opacity: '0'
				}, 1000, 'easeOutExpo');
				$('#section5').find('.pengyou1').delay(100).animate({
					left: '45%',
					top: '50%',
					opacity: '0'
				}, 1000, 'easeOutExpo');
				$('#section5').find('.pengyou2').delay(100).animate({
					left: '45%',
					top: '50%',
					opacity: '0'
				}, 1000, 'easeOutExpo');
				$('#section5').find('.pengyou3').delay(100).animate({
					left: '45%',
					top: '50%',
					opacity: '0'
				}, 1000, 'easeOutExpo');
				$('#section5').find('.pengyou4').delay(100).animate({
					left: '45%',
					top: '50%',
					opacity: '0'
				}, 1000, 'easeOutExpo');
				$('#section5').find('.pengyou5').delay(100).animate({
					left: '45%',
					top: '50%',
					opacity: '0'
				}, 1000, 'easeOutExpo');
				$('#section5').find('.pengyou6').delay(100).animate({
					left: '45%',
					top: '50%',
					opacity: '0'
				}, 1000, 'easeOutExpo');
				$('#section5').find('.pengyou7').delay(100).animate({
					left: '45%',
					top: '50%',
					opacity: '0'
				}, 1000, 'easeOutExpo');
				$('#section5').find('.pengyou8').delay(100).animate({
					left: '45%',
					top: '50%',
					opacity: '0'
				}, 1000, 'easeOutExpo')
			}
			if (index == 6) {
				$('#section4').find('.gamegirl').delay(100).animate({
					left: '-30%',
					opacity: '0'
				}, 1500, 'easeOutExpo');
				$('#section4').find('.jinengtext').delay(100).animate({
					right: '-60%',
					opacity: '0'
				}, 1000, 'easeOutExpo');
				$('#section4').find('.icon i').delay(100).animate({
					left: '-300px',
					opacity: '0'
				}, 500, 'easeOutExpo').removeClass('xuanzhuan3');
				$('#section4').find('.progressbar').delay(100).animate({
					right: '-50%',
					opacity: '0'
				}, 1000, 'easeOutExpo');
				$('.pytx').hover(function() {
					$(this).css({
						'background-color': '#fff',
						'opacity': '0.8'
					})
				}, function() {
					$(this).css({
						'background-color': '',
						'opacity': '1'
					})
				});
				$('#section5').find('.pengyouright').delay(300).animate({
					right: '0%',
					opacity: '1'
				}, 1000, 'easeOutExpo');
				$('#section5').find('.pengyou').delay(300).animate({
					left: '0%',
					opacity: '1'
				}, 1000, 'easeOutExpo');
				$('#section5').find('.pengyou1').delay(1300).animate({
					left: '22%',
					top: '10%',
					opacity: '1'
				}, 1000, 'easeOutExpo');
				$('#section5').find('.pengyou2').delay(1300).animate({
					left: '15%',
					top: '30%',
					opacity: '1'
				}, 1000, 'easeOutExpo');
				$('#section5').find('.pengyou3').delay(1300).animate({
					left: '20%',
					top: '45%',
					opacity: '1'
				}, 1000, 'easeOutExpo');
				$('#section5').find('.pengyou4').delay(1300).animate({
					left: '35%',
					top: '62%',
					opacity: '1'
				}, 1000, 'easeOutExpo');
				$('#section5').find('.pengyou5').delay(1300).animate({
					left: '60%',
					top: '8%',
					opacity: '1'
				}, 1000, 'easeOutExpo');
				$('#section5').find('.pengyou6').delay(1300).animate({
					left: '70%',
					top: '25%',
					opacity: '1'
				}, 1000, 'easeOutExpo');
				$('#section5').find('.pengyou7').delay(1300).animate({
					left: '60%',
					top: '37%',
					opacity: '1'
				}, 1000, 'easeOutExpo');
				$('#section5').find('.pengyou8').delay(1300).animate({
					left: '64%',
					top: '55%',
					opacity: '1'
				}, 1000, 'easeOutExpo');
				$('#section6').find('.xifu').delay(100).animate({
					top: "10%",
					opacity: '0'
				}, 1000, 'easeOutExpo');
				$('#section6').find('.xiaoming').delay(100).animate({
					right: "0%",
					opacity: '0'
				}, 1000, 'easeOutExpo')
			}
			if (index == 7) {
				$('#section5').find('.pengyouright').delay(100).animate({
					right: '-30%',
					opacity: '0'
				}, 1000, 'easeOutExpo');
				$('#section5').find('.pengyou').delay(100).animate({
					left: '-30%',
					opacity: '0'
				}, 1000, 'easeOutExpo');
				$('#section5').find('.pengyou1').delay(100).animate({
					left: '45%',
					top: '50%',
					opacity: '0'
				}, 1000, 'easeOutExpo');
				$('#section5').find('.pengyou2').delay(100).animate({
					left: '45%',
					top: '50%',
					opacity: '0'
				}, 1000, 'easeOutExpo');
				$('#section5').find('.pengyou3').delay(100).animate({
					left: '45%',
					top: '50%',
					opacity: '0'
				}, 1000, 'easeOutExpo');
				$('#section5').find('.pengyou4').delay(100).animate({
					left: '45%',
					top: '50%',
					opacity: '0'
				}, 1000, 'easeOutExpo');
				$('#section5').find('.pengyou5').delay(100).animate({
					left: '45%',
					top: '50%',
					opacity: '0'
				}, 1000, 'easeOutExpo');
				$('#section5').find('.pengyou6').delay(100).animate({
					left: '45%',
					top: '50%',
					opacity: '0'
				}, 1000, 'easeOutExpo');
				$('#section5').find('.pengyou7').delay(100).animate({
					left: '45%',
					top: '50%',
					opacity: '0'
				}, 1000, 'easeOutExpo');
				$('#section5').find('.pengyou8').delay(100).animate({
					left: '45%',
					top: '50%',
					opacity: '0'
				}, 1000, 'easeOutExpo');
				$('#section6').find('.xifu').delay(300).animate({
					top: "50%",
					opacity: '1'
				}, 1000, 'easeOutExpo');
				$('#section6').find('.xiaoming').delay(1000).animate({
					right: "10%",
					opacity: '1'
				}, 1000, 'easeOutExpo');
				$('#section7').find('.lvxing').delay(1).animate({
					right: '-30%',
					opacity: '0'
				}, 1000, 'easeOutExpo')
			}
			if (index == 8) {
				$('#section6').find('.xifu').delay(100).animate({
					top: "10%",
					opacity: '0'
				}, 1000, 'easeOutExpo');
				$('#section6').find('.xiaoming').delay(100).animate({
					right: "0%",
					opacity: '0'
				}, 1000, 'easeOutExpo');
				$('#section7').find('.lvxing').delay(300).animate({
					right: '0%',
					opacity: '1'
				}, 1000, 'easeOutExpo');
				$('#section8').find('.youxi').delay(1).animate({
					right: '-30%',
					opacity: '0'
				}, 1000, 'easeOutExpo');
				$('#section8').find('.keng').delay(1).animate({
					right: '-30%',
					opacity: '0'
				}, 1500, '')
			};
			if (index == 9) {
				$('#section7').find('.lvxing').delay(1).animate({
					right: '-30%',
					opacity: '0'
				}, 1000, 'easeOutExpo');
				$('#section8').find('.youxi').delay(300).animate({
					right: '0%',
					opacity: '1'
				}, 1000, 'easeOutExpo');
				$('#section8').find('.keng').delay(1000).animate({
					right: '0%',
					opacity: '1'
				}, 1500, '');
				$('#section9').find('.findme').delay(1).animate({
					top: '-10%',
					opacity: '0'
				}, 1000, 'easeOutExpo');
				$('#section9').find('.icon-sina').delay(1).animate({
					left: '-300px',
					opacity: '0'
				}, 1000, 'easeOutExpo').removeClass('xuanzhuan3');
				$('#section9').find('.icon-qq').delay(1).animate({
					left: '-300px',
					opacity: '0'
				}, 1000, 'easeOutExpo').removeClass('xuanzhuan3');
				$('#section9').find('.icon-email').delay(1).animate({
					left: '-300px',
					opacity: '0'
				}, 1000, 'easeOutExpo').removeClass('xuanzhuan3');
				$('#section9').find('.erweima').delay(1).animate({
					opacity: '0'
				}, 1000, 'easeOutExpo')
			};
			if (index == 10) {
				$('#section8').find('.youxi').delay(1).animate({
					right: '-30%',
					opacity: '0'
				}, 1000, 'easeOutExpo');
				$('#section8').find('.keng').delay(1).animate({
					right: '-30%',
					opacity: '0'
				}, 1500, '');
				$('#section9').find('.findme').delay(300).animate({
					top: '0',
					opacity: '1'
				}, 1000, 'easeOutExpo');
				$('#section9').find('.icon-sina').delay(500).animate({
					left: '0',
					opacity: '1'
				}, 1000, 'easeOutExpo').addClass('xuanzhuan3');
				$('#section9').find('.icon-qq').delay(500).animate({
					left: '0',
					opacity: '1'
				}, 1000, 'easeOutExpo').addClass('xuanzhuan3');
				$('#section9').find('.icon-email').delay(500).animate({
					left: '0',
					opacity: '1'
				}, 1000, 'easeOutExpo').addClass('xuanzhuan3');
				$('#section9').find('.erweima').delay(1000).animate({
					opacity: '1'
				}, 2000, 'easeOutExpo')
			}
		}
	})
});