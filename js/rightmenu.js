(function(doc, win) {

	function rightMenu(conf,callback) {

		var cback = callback || function() {}; 

		doc.oncontextmenu = function(e) {

			var e = e || win.event;
			var body   = doc.getElementsByTagName('body')[0];

			if(e.ctrlKey) {
				var remove = doc.getElementById('rightMenu') && body.removeChild(doc.getElementById('rightMenu'));
				return true;
			} else {

				var remove = doc.getElementById('rightMenu') && body.removeChild(doc.getElementById('rightMenu'));

				var right    = null;
				var menu     = _createMenu(conf);
				var position = _getXY(e);

				body.innerHTML      += menu;
				right               = doc.getElementById('rightMenu');
				right.style.left    = position.x + 'px';
				right.style.top     = position.y + 'px';
				right.style.display = 'inline-block';

				cback();
				return false;
			}
		}
		doc.onclick = function() {
			var body  = doc.getElementsByTagName('body')[0];
			var rightMenu = doc.getElementById('rightMenu');
			if(rightMenu) 
					body.removeChild(rightMenu);
		}
	}

	//Get event's position
	function _getXY(e) {
		var toTop = doc.documentElement.scrollTop || doc.body.scrollTop;
		var toLeft =  doc.documentElement.scrollLeft || doc.body.scrollLeft;

		return {x: e.clientX + toLeft, y: e.clientY + toTop}; 
	}

	//Generate menu's HTML
	function _createMenu(conf) {

		var className = conf.class || '';
		var items     = conf.items;
		
		var menu = '<div id="rightMenu" class="' + className + '"><ul>';
		for(var item in items) {

			var link = items[item] || 'javascript:void(0)';

			if(item == 'line')
				menu += '<li class="line"></li>';
			else if(/#!/.test(item))
				menu += '<li class="' + item.split('#!')[1] + '"><a href="' + link + '">' + item.split('#!')[0] + '</a></li>';
			else
				menu += '<li><a href="' + link + '">' + item + '</a></li>';
		}
		menu += '</ul></div>';

		return menu;
	}

	win.rightMenu = rightMenu;

})(document, window)