Hosted
====================
http://supermobile.dk/xslt

- [jQuery plugin](http://supermobile.dk/xslt/javascript/jquery.xslt.js)



XSL Transformation 
====================

Transform XML using XSLT as jQuery plugin

## Usage	

Example 1:
```js
	$('#results').xslt('example.com/data.xml', 'example.com/program.xsl');

```
Example 2:
```js
	<script type="text/javascript" src="javascript/xslt.js"></script>

	<script type="text/javascript">
	window.onload = function() {
			new Transformation()
					.setXml("data/doc.xml")
					.setXslt("data/doc.xsl")
					.transform("test");
	}
	</script>
	
```

