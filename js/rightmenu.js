(function(doc, win) {

	var rightMenu = function(conf,callback) {
        rightMenu.prototype.init(conf,callback);
    }

    rightMenu.prototype = {
    	
    	rightMenu : null,
    	windowWidth : 0,

    	init : function(conf,callback) {

    		var that  = this;
    		var cback = callback || function() {};

			dbody           = doc.getElementsByTagName('body')[0];
			dbody.innerHTML += this._createMenu(conf);
			this.rightMenu  = doc.getElementById('rightMenu');
			windowWidth     = document.body.clientWidth;

    		doc.oncontextmenu = function(e) {

				var e = e || win.event;

				if(e.ctrlKey) {
					that.rightMenu.style.display = 'none';
					return true;
				} else {

					var position = that._getXY(e);
					

					that.rightMenu.style.left    = position.x + 'px';
					that.rightMenu.style.top     = position.y + 'px';
					that.rightMenu.style.display = 'inline-block';
					that.rightMenu.style.visibility = 'hidden';
					var width = that.rightMenu.style.width || that.rightMenu.clientWidth || that.rightMenu.offsetWidth || that.rightMenu.scrollWidth;
					if(position.x + width >= windowWidth)
						that.rightMenu.style.left = position.x - width + 'px';
					that.rightMenu.style.visibility = 'visible';
					return false;
				}
			}
			doc.onclick = function() {
				that.rightMenu.style.display = 'none';
			}

			cback();
    	},

    	_createMenu : function(conf) {

    		var className = conf.class || '';
			var items     = conf.items;

    		menu = '<div id="rightMenu" class="' + className + '"><ul>';
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
    	},

    	_getXY : function(e) {
			var toTop = doc.documentElement.scrollTop || doc.body.scrollTop;
			var toLeft =  doc.documentElement.scrollLeft || doc.body.scrollLeft;

			return {x: e.clientX + toLeft, y: e.clientY + toTop}; 
		}
    	
    }

	win.rightMenu = rightMenu;	

})(document, window)