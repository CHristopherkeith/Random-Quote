$(document).ready(function(){
	var weiboLogo='<i class="fa fa-quote-left fa-fw"></i>';
	function makeTextMiddle(){
		var contentHeight=$(".content").height();
		$(".content").height(contentHeight);
		$(".content").addClass("center-vertically");
	}

	function getSelectTxt(){
		var randomIndex=Math.floor(Math.random()*quoteContent.length);
		return quoteContent[randomIndex];
	}

	function changeQuote(outTime,inTime){
		var txtObj=getSelectTxt();
		var txtContent = txtObj.content;
		var txtSongName= txtObj.songName;
		
		$(".content").fadeOut(outTime,function(){
			$(".content").html("");
			$(".content").removeAttr("style");
			$(".content").css("display","none");
			$(".content").removeClass("center-vertically");
			$(".content").html(weiboLogo+" "+txtContent+".");
			$(".content").fadeIn(inTime);
			makeTextMiddle();
			
		});

		$(".reference").fadeOut(outTime,function(){
			$(".reference").html("");
			$(".reference").css("display","none");
			$(".reference").html("--"+txtSongName);
			$(".reference").fadeIn(inTime);
		});
		
	}

	function weiboShare(){

		var txt = $(".content").text(), title =$("title").text();
		if (txt) {
			window.open('http://v.t.sina.com.cn/share/share.php?title=' + txt + ' →来自页面 ' + title + '&url=' + window.location.href);	
		}
	};

	function init(){
		changeQuote(0,5000);
		$(".change").on("click",function(){changeQuote(1000,1000)
		});
		$(".weibo").on("click",weiboShare);
	}
	
	init();
	
})