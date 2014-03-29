var controllerIS = (function() {
	
	// ---------------------------------------
	
	var ImageSlider = {
		
		init: function(holder) {
			this.images = [];
			this.holder = holder;
			this.hold = document.getElementById("" + this.holder);
			this.count = 0;
		},
		
		addImage: function(title, url1, url2) {
			
			var img = Object.create(Image);
			img.init(title, url1, url2);
			this.images.push(img);
			
		},
		
		render: function() {
			
			this.clear();
			var self = this;
			
			this.hold.addEventListener('click', function(ev) {
					self.count++;
					var focus = self.hold.querySelector('.sliderImg:nth-of-type(6)');
					
					if (ev.target == focus) {
						
						if (self.count%2 != 0) {
							focus.src = self.images[5].urlImg;
						} else {
							focus.src = self.images[5].urlThumb;
						}
					}
					
					
					
				}, false
			)
			
			var divEl = document.createElement('div');
			divEl.className = "sliderImgGallery";
			
			var i;
			var result = '<button class="sliderButton" onclick="sldr.rotateLeft()">previous</button>';
			
			
			for (i = 0; i < this.images.length; i+= 1) {
				
				result += this.images[i].elementHTML
				
			}
			
			result += '<button class="sliderButton" onclick="sldr.rotateRight()">next</button>';
			divEl.innerHTML = result;
			
			this.hold.appendChild(divEl);
						
		},
		
		clear: function() {
			while (this.hold.firstChild) {
				this.hold.removeChild(this.hold.firstChild);
			}
			
		},
		
		rotateLeft: function() {
			this.images.push(this.images.shift());
			this.render();
		},
		
		rotateRight: function() {
			this.images.unshift(this.images.pop());
			this.render();
		}
		
		
	}
	
	// -----------------------------------------
	
	
	var Image = {
		
		init: function(title, url1, url2) {
			
			this.title = title;
			this.urlThumb = url1;
			this.urlImg = url2;
			
			this.elementHTML = '<img class="sliderImg" src="'
				+ this.urlThumb + '"alt="no image available"' + 'title="' +  this.title
				+ '"/>'
			
		}
		
		

	}
	
	// ---------------------------------
	
	
	function createImageSlider(holder) {
		var sldr = Object.create(ImageSlider);
		sldr.init(holder);
		return sldr;
	}
	
	
	
	
	
	return {
		
		createImageSlider: createImageSlider
	
	}
	
	
	
	
	
})();