const dataURL = "https://api.myjson.com/bins/jcmhn";
const vars = ["var1", "var2", "var3", "var4", "var5", "var6", "speach"]


function getValues() {
	let val = {};

	vars.forEach(function(input){
		val[input] = $("input[name=" + input + "]")[0].value
	});

	return val;
}

function actButton() {
	$.getJSON(dataURL, handleData);
	$('form').hide(); 

}

function handleData(data) {
	let fairytale = "";

	let values = getValues();

	data["text"].forEach(function(item) {
		for (key in values) {
			item = item.replace("{" + key + "}", values[key]);
		}

		fairytale += item + '<br>'
	});

	$("div#result").html(fairytale);
		
	}

function init() {
	$("#button-fetch").click(actButton);

}

$(document).ready(init);
