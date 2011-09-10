function position() {
	var viewportwidth;
	var viewportheight;
 
	// the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
 
	if (typeof window.innerWidth != 'undefined')
	{
		viewportwidth = window.innerWidth,
		viewportheight = window.innerHeight
	}
 
	// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)

	else if (typeof document.documentElement != 'undefined'
		&& typeof document.documentElement.clientWidth !=
		'undefined' && document.documentElement.clientWidth != 0)
	{
		viewportwidth = document.documentElement.clientWidth,
		viewportheight = document.documentElement.clientHeight
	}
 
	// older versions of IE
 
	else
	{
		viewportwidth = document.getElementsByTagName('body')[0].clientWidth,
		viewportheight = document.getElementsByTagName('body')[0].clientHeight
	}
	// 66% of the remaining area left by container should be it's top margin.
	var ht = 0.66*(viewportheight-document.getElementById('container').offsetHeight);
	// 10% of the remaining area left by the container should be it's right margin
	var wh = 0.10*(viewportwidth-document.getElementById('container').offsetWidth);
	document.getElementById('container').setAttribute("style", "margin-top:" + ht.toString() + "px;" + "margin-right:" + wh.toString() + "px");
}

var timeOut = null;
var func = function() { 
	position();
};

window.onresize = function(){
	if(timeOut != null) clearTimeout(timeOut);
	setTimeout(func, 100);
};

