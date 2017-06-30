$(function(){
	$(window).scroll(function () {

		let offSet = $(document).scrollTop();   //获取整个页面的偏移量

		//var width2 = $(window).width(); //在置顶之前要锁定宽度，否则宽度会变成局部宽
		//本次指定为1600px 暂不动态获得

		let  topHeight = 115;   // 设置置顶模块以上 盒子的高度（如果是要超过A那么加上A的高度）

		if (offSet >= topHeight) {  // 如果偏移量大于等于 顶部的高度

			$("#fix").css({position: "fixed", top: 0,width:'100%'}); //盒子固定定位在顶部（top后面的值自己确定要多少）
			$(".list-head-show").show();
			//$('#fix').style.width=width2+'px';
		} else {

			$("#fix").css({position: "static"});  //如果偏移量少于顶部高度，则清除定位
			$(".list-head-show").hide();
		}

	});


	$(".list-icons-box").click(function(){
		if ($(this).parents("li").next().is(":hidden")) {
			$(this).find("span").removeClass("toggle-open").addClass("toggle-close");
			$(this).parents("li").next().show();           
		}else{
			$(this).find("span").removeClass("toggle-close").addClass("toggle-open");
			$(this).parents("li").next().hide();
		}
	});
});	

