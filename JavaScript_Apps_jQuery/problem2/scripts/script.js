var insertController = (function($) {
	
	function createUI(container) {
		
		var cnt = $("#" + container);
		var insPosition = "";
		
		cnt.append('<textarea name="inputArea" id="inputArea" cols="30" rows="10" placeholder="type html of element here"></textarea>')
		cnt.append('<p>click on a target to insert element...</p><br/><form><input type="radio" name="target" value="before">before<br><input type="radio" name="target" value="after">after</form>' );
		
		$("input[type='radio']").on('click', function() {
			var value = $(this).val();
			insPosition = value;
			
		});
		
		
		$(document).on("click", function(ev) {
				
				var targ = $(ev.target);
				
				
				if (targ.attr("value") == "before" || targ.attr("value") == "after" || targ.attr("name") == "inputArea") {
					return;
				}
				
				var inpt = $("#" + container + " textarea");
				
				if (insPosition == "before") {
					targ.before(inpt.val());
				} else if(insPosition == "after") {
					targ.after(inpt.val());
				} else {
					return;
				}
				
				
			}
		)
		
		console.log(cnt);
		
		
	}
	
	

	
	
	return {
		createUI: createUI
	}
	
})(jQuery);