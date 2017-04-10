# RightMenu.js

## Introduction

Help you create a custom context menu in a specific area.

## Demo

https://gongpeione.github.io/rightMenu

## Usage

Add css and js.
```html
<!doctype html>
<html lang="zh_CN">
<head>
   <meta charset="UTF-8">
   <title>Right Mouse Click Menu</title>
   <link rel="stylesheet" href="style.css">
</head>
<body>

   <script src="RightMenu.js"></script>
   <script>
       new RightMenu(config);
   </script>
</body>
</html>
```

Configure
```javascript
{
    class: '.rightMenu',
    items: [
        {
            type: 'link',
            title: 'Google',
            content: 'https://www.google.com',
            target: '_blank'
        },
        {
            type: 'separator',
        },
        {
            type: 'function',
            title: 'Alert',
            content: () => alert(1)
        },
        {
            type: 'link',
            title: 'Disabled',
            disabled: true
        },
        {
            type: 'text',
            title: 'Plain Text',
            class: 'plain'
        }
    ]
}
```

Enjoy.


## Changelog

- 2017/04/10 Rewrite
- 2015/03/14 Create rightMenu.js


## License

MIT licensed

Copyright (C) 2015 Shu, https://geeku.net
