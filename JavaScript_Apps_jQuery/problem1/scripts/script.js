var sliderController = (function($) {
	
	// ----------------------------------------------------
	
	var Slider = {
		init: function(container) {
			
			
			this.container = container;
			this.slideList = [];
			this.containerElem = $("#" + this.container);
			this.interval = 1;
			
		},
		
		addSlide: function(elementContainer) {
			var sld = Object.create(Slide);
			sld.init(elementContainer);
			this.slideList.push(sld);
			
		},
		
		render: function() {
			
			this.containerElem.off('click');
			var self = this;
			
			
			
			
			this.containerElem.on('click', function(ev) {
					
					
					if (ev.target.id == 'buttonLeft') {
						
						self.rotateLeft();
						
					}
					
					if (ev.target.id == 'buttonRight') {
						
						self.rotateRight();
						
					}
					
					
				}
			)
			
			var tmpHTML = '<button id="buttonLeft">left</button><ul id="slider">';
			
			for (var i = 0; i < this.slideList.length; i++) {
				tmpHTML += '<li class="sliderElements">' + this.slideList[i].elem[0].outerHTML + '</li>';
			}
			
			tmpHTML += '</ul><button id="buttonRight">right</button>'
			
			this.containerElem.html(tmpHTML);
			$("#" + this.container + " .sliderElements").hide();
			$("#" + this.container + " .sliderElements")[0].style.display = "";
			
			
			if (self.interval != 1) {
				
				
				return;
				
			} else {
				
				this.interval = 2;
				setInterval(function() {
						
						self.rotateRight();
						
					}, 5000
				)
			}
			
			
			
		},
		
		rotateLeft: function() {
			this.slideList.push(this.slideList.shift());
			this.render();
		},
		
		rotateRight: function() {
			this.slideList.unshift(this.slideList.pop());
			this.render();
		}
		
		
		
		
	}
	
		
	// ----------------------------------------------------
	
	var Slide = {
		init: function(elementContaner) {
			this.elementContaner = elementContaner;
			this.elem = $("#" + elementContaner);
		}
		
	}
	
	
	
	
	
	// ----------------------------------------------------
	
	function getSlider(container) {
		var sld = Object.create(Slider);
		sld.init(container);
		return sld;
	}
	
	
	return {
		getSlider: getSlider
	}
	
})(jQuery);