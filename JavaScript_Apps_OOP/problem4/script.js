var sitesBarController = (function() {
	
	// ----------------------------------------------------
	
	
	
	var FavSiteBar = Class.create({
		
		init: function(holder) {
			
			this.holder = holder;
			this.urlList = [];
			this.folderList = [];
			this.holderElem = document.getElementById(holder);
			
		},
		
		addURL: function(title, url) {
			this.urlList.push(new Url(title, url));
		},
		
		addFolder: function(folder) {
			this.folderList.push(folder);
		},
		
		render: function() {
			
			this.clear();
			
			var tmp = '<div id="favoriteSitesBar">';
			
			if (this.urlList.length != 0) {
				
				tmp += '<div class="images">';
					
				for (var i = 0; i < this.urlList.length; i++) {
					tmp += this.urlList[i].elementHTML;
				}
				
				tmp += '</div>';
			}
			
			
			if (this.folderList.length != 0) {
				
				tmp += '<div class="folderContainer">';
				
				for (var j = 0; j < this.folderList.length; j++) {
					
					this.folderList[j].render();
					tmp += this.folderList[j].elementHTML;
					
				}
				
				tmp += '</div>';
				
			}
			
			this.holderElem.innerHTML = tmp;
			
		},
		
		clear: function() {
			while (this.holderElem.firstChild) {
				this.holderElem.removeChild(this.holderElem.firstChild);
			}
			
		}
	
	})
	
	
	
	
	// -------------------------------------------------
	
	
	var Folder = Class.create({
		
		init: function(title) {
			this.title = title;
			this.urlList = [];
			this.elementHTML = '<div class="folderContainer"><img src="folder-icon.png" width="25" height="25" alt="folder"/><h3>'
				+ this.title + '</h3><ul>';
		},
		
		addURL: function(title, url) {
			this.urlList.push(new Url(title, url));
		},
		
		render: function() {
			
			var tmp = "";
			
			for (var i = 0; i < this.urlList.length; i++) {
				
				tmp = '<li class="folderItem">'
					+ this.urlList[i].elementHTML
					+ '</li>';
				
				this.elementHTML += tmp;
				
			}
			
			this.elementHTML += '</ul></div>';
		}
		
		
		
	})
	
	
	
	// -------------------------------------------------
	
	
	var Url = Class.create({
		
		init: function(title, url) {
			this.title = title;
			this.url = url;
			this.elementHTML = '<a href="' + this.url + '" target="_blank">' 
				+ this.title + '</a>';
		}
		
	})
	
	
	
	// -------------------------------------------------
	
	
	function createFSBar(holder) {
		var fsbar = new FavSiteBar(holder);
		return fsbar;
	}
	
	function createFolder(title) {
		var flder = new Folder(title);
		return flder;
	}
	
	function createUrl(title, url) {
		var url = new Url(title, url);
		return url;
	}
	
	
	
	
	return {
		createFSBar: createFSBar,
		createFolder: createFolder,
		createUrl: createUrl
		
	}
	
	
	
}());
