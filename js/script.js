$(document).ready(function () {

	//페이지 로딩 시 제일 상단으로 스크롤 이동
	$("body, html").stop().animate({ "scrollTop": 0 }, 1500, "swing");

	//스크롤
	$(window).on("scroll", function () {

		//변수 scroll에 현재 화면을 스크롤한 거리의 수치를 저장
		var scroll = $(this).scrollTop();

		//박스의 현재 z축 위치 값에서 현재 스크롤한 거리만큼을 더한 뒤 다시 대입
		for (var i = 0; i < 6; i++) {
			$(".boxwrap > section").eq(i).css({ "transform": "translateZ(" + (-5000 * i + scroll) + "px)" });

			if (scroll > i * 5000 - 2500 && scroll < (i + 1) * 5000 - 2500) {
				$(".scrollnav > li").removeClass("on");
				$(".scrollnav > li").eq(i).addClass("on");
				$(".boxwrap > section").removeClass("on");
				$(".boxwrap > section").eq(i).addClass("on");
			};
		};
	});

	//메뉴
	$(".scrollnav > li > button").on("click", function (e) {
		e.preventDefault();
		var a = $(this).parent("li").index();
		$("body, html").stop().animate({ "scrollTop": 5000 * a }, 1500, "swing");
	});

	//인포 메뉴
	$(".info").on("click", function () {
		$(".infotxt").css({ display: "block" });
		$(".info_wrap").animate({ marginTop: 0 }, 500);
		$(".info").hide();
		$(".close").show();
	});

	$(".close").on("click", function () {
		$(".close").hide();
		$(".info").show();
		$(".info_wrap").animate({ marginTop: -180 }, 500, function () {
			$(".infotxt").css({ display: "none" });
		});

	});

	//상단 별 움직임
	$(".star img").on("mouseover", function () {
		$(this).animate({ "top": -10 }, 100);
	});
	$(".star img").on("mouseout", function () {
		$(this).animate({ "top": 0 }, 100);
	});

	//scene3 이미지 슬라이드
	$(".scene3").slidesjs({
		width: 500, 					//이미지 너비값 설정
		height: 657, 					//이미지 높이값 설정
		navigation: { 				//좌우버튼 설정
			active: false				//사용하면 true. 사용 안하면 false
		},
		pagination: {					//페이저버튼 설정
			active: false				//사용하면 true. 사용 안하면 false
		},
		play: {							//재생버튼 설정
			active: false,				//사용하면 true. 사용 안하면 false
			effect: "fade",				//자동재생버튼을 눌렀을때 일어날 효과 지정 "slide" or "fade".
			interval: 4000,			//자동재생 시 이미지 사이 간격 설정
			auto: true,				//자동재생 true. 정지 false
			swap: true,				//play,stop 버튼 교차로 true, 두개 동시에 false
		},
		effect: {
			slide: { speed: 200 },
			fade: { speed: 2000, crossfade: true }	//crossfade: 두개의 이미지가 교차하면서 false 하나 사라지고 나서 하나 생김. false 사용시 play의 inverval은 speed의 2배로 지정.
		}
	});
});










