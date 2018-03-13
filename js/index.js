$(function(){
	$(".admin").on("click",function(e){
		var $tar=$(e.target);
		if($tar.is("h4")){
			var span=$tar.children().first();
			var otherBrothers=$tar.parent().siblings().children(".ulul");
			if(span.html()=="+"){
				span.html("-");
				$tar.next("ul").show();
				otherBrothers.hide();;
				otherBrothers.prev().children(["span"]).html("+")
			}else{
				span.html("+");
				$tar.next("ul").hide();
			}
		}
	})
})