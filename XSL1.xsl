<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">

<html>
<head>
    <title>Book List</title>
</head>

<body>

<h2>Available Books</h2>

<table border="1">
<tr>
    <th>Cover</th>
    <th>Title</th>
    <th>Author</th>
    <th>Category</th>
    <th>Price</th>
    <th>Year</th>
</tr>

<xsl:for-each select="bookshop/category/book">
<tr>
    <td>
        <img src="{bookcover}" alt="Book Cover" width="60"/>
    </td>
    <td><xsl:value-of select="title"/></td>
    <td>
        <xsl:value-of select="author/firstname"/>
        <xsl:text> </xsl:text>
        <xsl:value-of select="author/lastname"/>
    </td>
    <td><xsl:value-of select="parent::category/@name"/></td>
    <td><xsl:value-of select="price"/></td>
    <td><xsl:value-of select="year"/></td>
</tr>
</xsl:for-each>

</table>

<br/>
<a href="homepage.html">Back to Home</a>

</body>
</html>

</xsl:template>

</xsl:stylesheet>