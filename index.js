function getAllCSS() {
    var sheets = document.styleSheets, ret = [];
    for (var i in sheets) {
        var rules = sheets[i].rules || sheets[i].cssRules;
        for (var r in rules) {
            ret.push(rules[r]);
        }
    }
    return ret.map( rule => {
		return rule.cssText;
	}).join('\r\n');
};
function clearAllCSS(){
	var all = document.querySelectorAll('style,link[type="stylesheet"]');
	[].slice.call( all ).map( sheets => {
		sheets.parentNode.removeChild( sheets );
	});
};
var allCSS = getAllCSS();
clearAllCSS();
var style = document.createElement('style');
style.id = 'all-css';
style.textContent = allCSS;
document.body.appendChild( style );
//console.log('allCSS:', allCSS );
