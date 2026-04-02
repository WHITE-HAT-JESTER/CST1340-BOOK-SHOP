<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:html="http://www.w3.org/TR/REC-html40">

<xsl:template match="/category">

<html>
<head>
    <title>Browse Books</title>
    <!-- LINK TO CSS IF NEEDED <link rel="stylesheet" href="css/style.css"></link>-->
</head>

<body>

<h2>Available Books</h2>

<xsl:for-each select="bookshop/category/book">
 <div class="book" data-genre="{@genre}">

   <h3><xsl:value-of select="title"/></h3>
   <h4><xsl:value-of select="author/firstname"/></h4>
   <h4><xsl:value-of select="author/lastname"/></h4>
   <p><xsl:value-of select="parent::category/@name"/></p>
   <p><xsl:value-of select="price"/></p>
   <p><xsl:value-of select="year"/></p>

</div>
</xsl:for-each>

<a href="homepage.html">Back to Home</a><br><br>
<a href="browsepage.html">Browse by Category</a><br><br>

</body>
</html>

</xsl:template>
</xsl:stylesheet>