// @JalalHejazi

$(document).ready(function() {

	// Disable local links 
	$(' [href^=#]').click(function(e) {
		e.preventDefault();
	});



	var format_data = function() {
		$('#transformation').html('');
		$('#transformation').removeClass("alert alert-success");

		var xml_area = $('textarea#xml').val();
		var xsl_area = $('textarea#xsl').val();
		var xml_version = '<?xml version="1.0"?>';

		$('#xml').xslt(xml_area, 'xsl/format_xml.xsl');
		$('#xsl').xslt(xsl_area, 'xsl/format_xml.xsl');

		$('#transformation').html('formated as xml').addClass("alert alert-success");

	};

	var load_data = function() {
		$('textarea#xml').html('<?xml version="1.0"?>  <conclusion><message> XSLT works just fine using xslt.js </message></conclusion>');
		$('textarea#xsl').html('&lt;?xml version=&quot;1.0&quot;?&gt;&lt;xsl:stylesheet xmlns:xsl=&quot;http://www.w3.org/1999/XSL/Transform&quot; version=&quot;1.0&quot;&gt;&lt;xsl:output method=&quot;html&quot; omit-xml-declaration=&quot;yes&quot;/&gt;&lt;xsl:template match=&quot;conclusion&quot;&gt; &lt;p&gt;Here&amp;#8217;s the conclusion: &lt;xsl:value-of select=&quot;message/text()&quot;/&gt;&lt;/p&gt;&lt;/xsl:template&gt;&lt;/xsl:stylesheet&gt;');

	};

	// Make the transformation
	$('#transform').click(function(e) {
		e.preventDefault();
		clean_alert();

		var xml = $('textarea#xml').val();
		var xsl = $('textarea#xsl').val();

		if (xml || xsl) {
			$('#transformation').html('');

			$('#transformation').xslt(xml, xsl);
			$('#transformation').addClass("alert alert-success");
		} else {
			$('#transformation').html('Try some test data ');

			$('#transformation').addClass("alert alert-error");
		}

	});

	// Loading sample test data 
	$('#load').click(function(e) {
		e.preventDefault();
		load_data();

		$('#transform').click();
	});

	//format xml
	$('#format_xml').click(function(e) {
		e.preventDefault();
		clean_alert();


		var xml_area = $('textarea#xml').val();
		if (xml_area.length > 0) {
			$('#transformation').html('');
			$('#xml').xslt(xml_area, 'xsl/format_xml.xsl');
			$('#transformation').html('Formated as xml-format <br>').addClass("alert alert-info");
		}



	});


	//format xsl
	$('#format_xsl').click(function(e) {
		e.preventDefault();
		clean_alert();

		var xsl_area = $('textarea#xsl').val();
		if (xsl_area.length > 0) {
			$('#transformation').html('');
			$('#xsl').xslt(xsl_area, 'xsl/format_xml.xsl');
			$('#transformation').html('Formated as xsl. <br> Remember to add &lt;xsl:stylesheet xmlns:xsl=&quot;http://www.w3.org/1999/XSL/Transform&quot; version=&quot;1.0&quot;&gt; ').addClass("alert alert-info");
		}


	});

	var clean_alert = function() {
		$('#transformation').removeClass("alert alert-error");
		$('#transformation').removeClass("alert alert-success");
		$('#transformation').removeClass("alert alert-info");
	};

}); //end of doc.Ready()