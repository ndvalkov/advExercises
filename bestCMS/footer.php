
	</div>
	
	<footer id="siteFooter">
		<ul style="float:right;margin-right:70px; margin-top:70px;">
			<li>
				<span style="color:yellow; text-decoration:underline;">BEST Partners</span>
			</li>
			
		</ul>
	</footer>
	
	
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script src="<?php echo get_template_directory_uri();?>/scripts/jquery-ui-1.10.4.custom.min.js"></script>
	<script src="<?php echo get_template_directory_uri();?>/scripts/min-slider.js"></script>

	
	
	<!-- Slider script---------------------------------- -->
	<script>
		$(function() {
			$('.banner').unslider({
				speed: 1500,
				delay: 10000,
				fluid: true
				
			}).css("opacity", "1");
			
		});
	
	</script>

	<!-- Accordion script---------------------------------- -->
	
	
	<script>
		$(function() {
		$( "#accordion" ).accordion({
		event: "click hoverintent"
		});
		});
		/*
		* hoverIntent | Copyright 2011 Brian Cherne
		* http://cherne.net/brian/resources/jquery.hoverIntent.html
		* modified by the jQuery UI team
		*/
		$.event.special.hoverintent = {
		setup: function() {
		$( this ).bind( "mouseover", jQuery.event.special.hoverintent.handler );
		
		<!-- admin fix for home menu(niki) -->
		
		$("div#home").css("display", "none");
		
		<!-- admin fix for home menu(niki) -->
		
		},
		teardown: function() {
		$( this ).unbind( "mouseover", jQuery.event.special.hoverintent.handler );
		},
		handler: function( event ) {
		var currentX, currentY, timeout,
		args = arguments,
		target = $( event.target ),
		previousX = event.pageX,
		previousY = event.pageY;
		function track( event ) {
		currentX = event.pageX;
		currentY = event.pageY;
		};
		function clear() {
		target
		.unbind( "mousemove", track )
		.unbind( "mouseout", clear );
		clearTimeout( timeout );
		}
		function handler() {
		var prop,
		orig = event;
		if ( ( Math.abs( previousX - currentX ) +
		Math.abs( previousY - currentY ) ) < 7 ) {
		clear();
		event = $.Event( "hoverintent" );
		for ( prop in orig ) {
		if ( !( prop in event ) ) {
		event[ prop ] = orig[ prop ];
		}
		}
		// Prevent accessing the original event since the new event
		// is fired asynchronously and the old event is no longer
		// usable (#6028)
		delete event.originalEvent;
		target.trigger( event );
		} else {
		previousX = currentX;
		previousY = currentY;
		timeout = setTimeout( handler, 30 );
		}
		}
		timeout = setTimeout( handler, 30 );
		target.bind({
		mousemove: track,
		mouseout: clear
		});
		}
		};
	
	</script>
	
	<script type="text/javascript">
		$(document).ready(function(){var acc = document.querySelector("#accordion");
		acc.style.opacity = '1';})
	</script>
	
	
	<?php wp_footer();?>
</body>
</html>
