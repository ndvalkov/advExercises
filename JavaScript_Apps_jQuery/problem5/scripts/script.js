var gridViewController = (function($) {
	
	// --------------------------------------------------
	
	var self;
	
	function eventHandler(ev) {
		
		var target = $(ev.target);
		console.log(target);
		
		if (target.attr("id") == "addHeader") {
			self.addHeader($("#headerInput").val());
			self.render();
		}
		
		if (target.attr("id") == "addRow") {
			self.addRow($("#rowInput").val());
			self.render();
			
		}
		
		if (target.attr("href") == "#") {
			$(".nestedData").hide();
			
		}
		
		if (target.parent().hasClass("Data")) {
			
			$(".nestedData").show();
		}
		
		
	}
	
	
	// --------------------------------------------------
	
	
	
	var GridView = {
		
		init:function(container) {
			
			this.container = container;
			this.rowList = [];
			this.contElement = $('#' + this.container);
			self = this;
			this.contElement.click(eventHandler);
			
			
		},
		
		addRow: function(rowElements) {
			var row = Object.create(Row);
			row.init(rowElements);
			this.rowList.push(row);
			return row;
		}, 
		
		addHeader: function(headerElements) {
			var hdr = Object.create(Header);
			hdr.init(headerElements);
			this.rowList.unshift(hdr);
			return hdr;
		},
		
		render: function() {
			
			this.contElement.empty();
			
			var indicator = false;
			
			this.contElement.append('<button id="addHeader">add header</button><input id="headerInput" type="text" placeholder="item1, item2, item3..." /><button id="addRow">add row</button><input id="rowInput" type="text" placeholder="item1, item2, item3..."/><br/><table></table>')
			var tbl = $('#' + this.container + ' table');
			
			for (var i = 0; i < this.rowList.length; i++) {
				this.rowList[i].render();
				tbl.append(this.rowList[i].elementHTML);
			}
			
			$('#' + this.container + ' td').css("border", "1px solid #00ff00");
			$("table").css("border-collapse", "collapse");
			$("table").css("margin-top", "10px");
			$('#' + this.container + ' td').css("padding", "5px");
			$('#' + this.container + ' tr:first-of-type').css("background-color", "#12ccff")
			$(".nestedTable + tr").css("background-color", "#ffcc00");
			
					
			$("tr").each(function() {
					
					var el = $(this);
					
					if (el.hasClass("nestedTable")) {
						indicator = true;
						el.addClass("nestedData");
					}
					
					if (el.hasClass("nestedTableEnd")) {
						indicator = false;
						el.addClass("nestedData");
					}
					
					if (indicator == false) {
						el.addClass("Data");
					} else {
						el.addClass("nestedData");
					}
					
				}
			);
			
		
			
		}
		
		
		
		
	}
	
	
	
	// --------------------------------------------------
	
	var Row = GridView.extend({
		
		init: function(rowElements) {
			
			this.elements = rowElements.split(', ');
			this.rowList = [];
			this.elementHTML = "<tr>";
			
			
			for (var i = 0; i < this.elements.length; i++) {
				this.elementHTML += '<td>' + this.elements[i] + '</td>'
			}
			
			this.elementHTML += "</tr>";
			
		},
		
		addRow: function(rowElements) {
			return GridView.addRow.apply(this, arguments);
		},
		
		addHeader: function(headerElements) {
			return GridView.addHeader.apply(this, arguments);
		},
		
		render: function() {
			// --lame fix, recovers original elementHTML--
			this.elementHTML = "<tr>";
			
			
			for (var i = 0; i < this.elements.length; i++) {
				this.elementHTML += '<td>' + this.elements[i] + '</td>'
			}
			
			this.elementHTML += "</tr>";
			// -----end
			
			if (this.rowList.length == 0) {
				return;
			}
			
			this.elementHTML += '<tr class="nestedTable"><td><a href="#">-----</a></td></tr>';
			
			for (var i = 0; i < this.rowList.length; i++) {
				this.elementHTML += this.rowList[i].elementHTML;
			}
			
			this.elementHTML += '<tr class="nestedTableEnd"><td><a href="#">-----</a></td></tr>';
			
		}
	})
	
	// --------------------------------------------------
	
	var Header = Row.extend({
		init: function(rowElements) {
			this.elements = rowElements.split(', ');
			Row.init.apply(this, arguments);
		}
	})
	
	
	// --------------------------------------------------
	
	function createGridView(container) {
		var gv = Object.create(GridView);
		gv.init(container);
		return gv;
		
	}
	
	
	return {
		createGridView: createGridView
	}
	
	
	
})(jQuery);