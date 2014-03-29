(function($) {
	
	$.fn.createTreeView = function() {
		
		
		var element = $(this.selector);
		
		$("ul ul", element).css("display","none");
		
		element.on("click", "li", function(ev) {
				
				ev.stopPropagation();
				
				var elem = $(this);
				
				console.log(elem.children("ul"))
				
				if (elem.children("ul") && elem.children("ul").css("display") == "none") {
					elem.children("ul").css("display", "block");
				} else if (elem.children("ul") && elem.children("ul").css("display") == "block") {
					elem.find("ul").css("display", "none");
				} else {
					return;
				}
				
			}
		);
		
		return this;
	}
	
	
})(jQuery);