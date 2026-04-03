<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <!-- Root template for full bookshop data -->
  <xsl:template match="/bookshop">
      <xsl:for-each select="category/book">
        <div class="card" data-bookcard>
          <div class="card-front">
            <img>
              <xsl:attribute name="src">
                <xsl:value-of select="concat('images/', translate(@genre, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'cover.png')"/>
              </xsl:attribute>
              <xsl:attribute name="alt"><xsl:value-of select="title"/></xsl:attribute>
            </img>
          </div>
          <div class="card-back">
            <h1><xsl:value-of select="title"/></h1>
            <h3><xsl:value-of select="concat(author/firstname, ' ', author/lastname)"/></h3>
            <h5>$<xsl:value-of select="price"/></h5>
            <p><xsl:value-of select="details/summary"/></p>
          </div>
        </div>
      </xsl:for-each>
  </xsl:template>

</xsl:stylesheet>