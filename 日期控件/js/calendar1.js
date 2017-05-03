	calendar('2017-04-25', '', '', new Date());

	function calendar(min, max, defaultDate, setDate) {

		var currentDate = new Date();
		var currentYear = currentDate.getFullYear();
		var currentMonth = currentDate.getMonth();
		var currentDa = currentDate.getDate();
		var myCurrentDate = new Date(currentYear, currentMonth, currentDa);

		var defaultYear = new Date().getFullYear() + 1;
		var defaultMin = new Date(1900, 0, 1);
		if(!min) {
			min = new Date(1900, 0, 1, 00, 00);
		}
		if(!max) {
			max = new Date(defaultYear, 11, 31, 23, 59);
		}
		if(!defaultDate) {
			defaultDate = new Date();
		}
		if(!setDate) {
			setDate = new Date();
		}

		var options = {
			min: new Date(min),
			max: new Date(max),
			defaultDate: new Date(defaultDate),
			setDate: new Date(setDate)
		};

		// 星期几部分
		var calendar_days = document.getElementsByClassName('calendar_day')[0];
		var days = calendar_days.getElementsByTagName('td');
		var date = options.setDate;

		var y = date.getFullYear();
		var m = date.getMonth();
		var d = date.getDate();

		$("#year").text(y + '年' + (m + 1) + '月');
		$("#hiddenYear").val(y);
		$("#hiddenMonth").val(m);

		// 本月
		// 该月的第一天是星期几
		var firstDay = new Date(y, m, 1).getDay();
		console.log(firstDay + '****');
		// 该月一共多少天
		var lastData = new Date(y, m + 1, 0).getDate();
		console.log(lastData + '+++');
		// 该月的最后一天是星期几
		var lastDay = new Date(y, m + 1, 0).getDay();
		console.log(lastDay + '----');
		var calendar_date = document.getElementsByClassName('calendar_date')[0];
		var tds = calendar_date.getElementsByTagName('td');
		$(tds).text('');
		var ed = firstDay;
		for(var i = firstDay; i < lastData + firstDay; i++) {
			var curFirstDay = (i - (firstDay) + 1);
//			if(new Date(options.min).getTime() > myCurrentDate.getTime()) {
//				if(new Date(options.min).getDate() == curFirstDay) {
//					$(tds[i]).addClass("cur");
//				} else {
//					$(tds[i]).removeClass("cur");
//				}
//			} else {
//				if(new Date(y, m, curFirstDay).getTime() == myCurrentDate.getTime()) {
//					$(tds[i]).addClass("cur");
//				} else {
//					$(tds[i]).removeClass("cur");
//				}
//			}

				if(new Date(y, m, curFirstDay).getTime() == myCurrentDate.getTime()) {
					$(tds[i]).addClass("cur");
				} else {
					$(tds[i]).removeClass("cur");
				}

			if(new Date(y, m, curFirstDay + 1).getTime() < new Date(options.min).getTime()) {
				$(tds[i]).addClass("grey");
			} else {
				$(tds[i]).removeClass("grey");
			}

			tds[i].innerHTML = i - (firstDay) + 1;
		}
	}

	$("#prevMonth").click(function() {
		var year = $("#hiddenYear").val();
		var month = $("#hiddenMonth").val() * 1 - 1;
		var myDate = new Date(year, month, 1);
		calendar('2017-04-24', '', '', myDate);
	});

	$("#nextMonth").click(function() {
		var year = $("#hiddenYear").val();
		var month = $("#hiddenMonth").val() * 1 + 1;
		var myDate = new Date(year, month, 1);
		calendar('2017-04-24', '', '', myDate);
	})