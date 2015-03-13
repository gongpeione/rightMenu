# rightMenu.js

## Introduction

rightMenu is a simple javascript plugin that you can easily create custom menu when you click the right mouse button in your broswer.

## Instructions

First,add js file and css file in your HTML file. like this:
```html
<!doctype html>
<html lang="zh_CN">
<head>
   <meta charset="UTF-8">
   <title>Right Mouse Click Menu</title>
   <link rel="stylesheet" href="css/rightmenu.css">
</head>
<body>

   <script src="js/rightmenu.js"></script>
</body>
</html>
```

Second,write some code like this：
```javascript
<script>
    //class: menu's class name -> <div id="rightMenu" class="right">...Menu...</div>
		rightMenu({class: 'right', items: 
			{
			  //Menu title : Link -> <li><a href="http://www.baidu.com">Baidu</a></li>
				'Baidu':'http://www.baidu.com',
				//Menu title : Javascript code -> <li><a href="javascript:alert('aaa')">Javascript</a></li>
				'Javascript': "javascript:alert('aaa')",
				//cut-off rule -> <li class="line"></li>
				'line':'',
				//Menu title with extra class name : '' -> <li class="disabled"><a href="javascript:void(0)">Google</a></li>
				'Google#!disabled': '',
				//Menu title with extra class name : '' -> <li class="mysite"><a href="http://www.geeku.net">Geeku</a></li>
				'Geeku#!mysite': 'http://www.geeku.net'
			}
		}, function() { // After you click the button
			console.log('Successful');
		});
</script>
```

Enjoy.


#### Changelog

- 2015/3/14 Create rightMenu.js


## License

MIT licensed

Copyright (C) 2015 Shu, http://geeku.net
