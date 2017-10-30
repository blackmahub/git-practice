module.exports = {
	generateHtmlPage: generateHtmlPage	
};

var meInHtml = '';

function generateHtmlPage (jsnObj) {
	generateTableForObject(jsnObj);
	return meInHtml;
}

function checkValue (value) {
	if (typeof value  === 'object') {
		if (value.length) {
			generateTableForArray(value);			
		} else {
			generateTableForObject(value);
		}
	} else {
		meInHtml += value.toString();		
	}
}

function generateTableForObject (jsObj) {
	meInHtml += '<table><tbody>';

	for (var key in jsObj) {
		meInHtml += ('<tr><td style="border: thin dotted">' + key + '</td><td style="border: thin dotted">');
		checkValue(jsObj[key]);
		meInHtml += '</td></tr>';		
	}

	meInHtml += '</tbody></table>';	
}

function generateTableForArray (jsArr) {
	if (typeof jsArr[0] !== 'object') {			
		meInHtml += jsArr.join(', ');
		return;			
	}
	
	var i, key;

	meInHtml += '<table><tbody>';
	
	meInHtml += '<tr>';

	for (key in jsArr[0]) {
		meInHtml += ('<td style="border: thin dotted">' + key + '</td>');
	}

	meInHtml += '</tr>';
	
	for (i = 0; i < jsArr.length; i++) {
		meInHtml += '<tr>';

		for (key in jsArr[i]) {
			meInHtml += '<td style="border: thin dotted">';
			checkValue(jsArr[i][key]);
			meInHtml += '</td>';
		}

		meInHtml += '</tr>';
	}	

	meInHtml += '</tbody></table>';	
}
