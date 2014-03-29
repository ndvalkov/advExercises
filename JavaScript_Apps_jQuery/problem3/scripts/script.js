var tableController = (function($) {
	
	var DBase = [
		{firstName: "Niki", lastName: "Valkov", grade: 2},
		{firstName: "Pencho", lastName: "Dimitrov", grade: 4},
		{firstName: "Dimitar", lastName: "Petrov", grade: 4},
		{firstName: "Ivan", lastName: "Simeonov", grade: 5},
		{firstName: "Petar", lastName: "Kolev", grade: 6}
	]
	
	function getTable(container) {
		
		var content = "<table>"
		var i;
		
		for(i=0; i<DBase.length; i+=1){
			
			content += '<tr><td>' + DBase[i].firstName + '</td>'
				+ '<td>' + DBase[i].lastName + '</td>'
				+ '<td>' + DBase[i].grade + '</td></tr>'
			
		}
		
		content += "</table>"

		$('#' + container).append(content);
		$("td").css("border", "1px solid #df38ee");
		$("td").css("border-right", "none");
		$("td").css("border-bottom", "none");
		$("td").css("padding", "5px");
		
		
	}
	
	
	
	
	return {
		getTable: getTable
	}
	
})(jQuery);