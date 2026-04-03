<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">

<html>
<head>
    <title>Browse Books</title>
</head>

<body>
 <h2>Available Books</h2>

<table border="1">
<tr>
    <th>Title</th>
    <th>Author</th>
    <th>Category</th>
    <th>Price</th>
    <th>Year</th>
</tr>
<xsl:template match="/bookshop">
  <xsl:for-each select="category/book">

 
<xsl:if test="title and author">
<tr>
    <td><xsl:value-of select="title"/></td>
    <td><xsl:value-of select="child::book/@genre"/></td>
    <td><p><xsl:value-of select="description"/></p></td>
    <td>
        <xsl:value-of select="author/firstname"/>
        <xsl:text> </xsl:text>
        <xsl:value-of select="author/lastname"/>
    </td>
    <td><xsl:value-of select="parent::category/@name"/></td>
    <td><xsl:value-of select="price"/></td>
    <td><xsl:value-of select="year"/></td>

</tr>
</xsl:if>
</xsl:for-each>

</table>

<a href="homepage.html">Back to Home</a>

</body>
</html>

</xsl:template>
</xsl:stylesheet>