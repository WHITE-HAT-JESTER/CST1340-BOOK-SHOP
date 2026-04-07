<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">

<html>
<head>
    <title>DEAR GUILTY READER/BOOKS</title>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&amp;display=swap"
    rel="stylesheet"/>
    <style type="text/css">
    @font-face {
        font-family: JetBrains Mono;
        
        }
    :root{
        --bg-primary: #cacbcf;
        --bg-secondary: #abafb3;
        --text-primary: #20232A;
        --text-secondary:#454457;
        --accent-primary:#A33434;
        --accent-glow:#be5f5f;

        /* RGB FOR TRANSPARENCY*/
        --text-primary-blur: 202, 203, 207;

    }

    /*DECLARATION OF COLOURS FOR DARK MODE*/
    .darkmode{
        --bg-primary: #2d313b;
        --bg-secondary: #1e1f27;
        --text-primary: #cacbcf;
        --text-secondary:#abafb3;
        --accent-primary:#A33434;
        --accent-glow:#be5f5f;

        /* RGB FOR TRANSPARENCY*/
        --text-primary-blur: 32,35,42;
    }   

    *{
        margin: 2px 2px 2px 2px;
        font-family: 'JetBrains Mono', monospace;
        }

    body{
        background-color: var(--bg-secondary); 
        color: var(--text-primary);
    }
    /* KEYFRAMES FOR GENERAL BLINK ANIMATION*/
    @keyframes blink{
        50% {opacity: 1;} 
        0%, 100% {opacity: 0;}
    }

    /*KEYFRAMES FOR TYPING ANIMATION*/
    @keyframes typing{
        from {width:0} to {width:40ch; border-right: none;};
    }

    /*KEYFRAMES FOR SLOGAN APPEARANCE TYPING*/
    @keyframes slogan{
        0%
        {
            opacity: 0;
        }
        90%
        {
            opacity: 0;
        }
        100%
        {
            opacity: 1;
        }
    }
    table{
        background-color:var(--bg-primary);
        text-align:center;
        border-collapse:collapse;
        width:90%;
        margin: 0px auto;
        border-radius:10px;
    }

    table tr {
        border: 1px solid var(--text-secondary);
        border-radius:10px;
        font-size: large;
        font-weight:bold;
    }

    table td{
        border-radius:10px;
    }

    table tr:hover{
        background-color:var(--accent-primary);
        color: var(--bg-primary);
        transition: all 0.2s ease-in-out;
        box-shadow: 0 0 6px var(--accent-glow);
        transform: scale(1.1);
        z-index:1000;
    }

    table tr:hover .book-cover{
        transform: scale(2) translateX(20px);
    }

   .book-row {
        position: relative;
    }

    .hover-info {
        position: absolute;
        left: 50%;
        top: 100%;
        transform: translateX(-50%); /*moves to middle of screen*/
        width: 500px;
        pointer-events: none;
    }

    .hover-box {
        margin-right: 10px;
        opacity: 0;
        background-color: var(--text-primary);
        color: var(--bg-primary);
        border: 1px solid var(--bg-primary);
        padding: 10px;
        border-radius: 10px;
        transition: 0.5s ease;
    }

    .book-row:hover .hover-box {
        opacity: 1;
        transform: translateX(0);
    }

    .table-headings{
        background-color: var(--text-primary);
        transform: none;
        color:var(--bg-primary);
        box-shadow: none;
        font-size: large;
        text-transform: uppercase;
    }

    .table-headings:hover{
        background-color: var(--text-primary);
        transform: none;
        color:var(--bg-primary);
        box-shadow: none;
    }
    
    .navbar{
        align-items: center;
        display: flex;
        font-weight: bold;
        justify-content: space-between;
        background: rgba(var(--bg-primary),0.5);
        border-top: 4px solid var(--text-primary);
        z-index: 999;
    }

    .navbar li{
        text-transform: uppercase;
    }

    /* creates separation between items and centres on page */
    .nav-links{
        display: flex;
        gap: 100px;
        justify-content: center;
        list-style-type: none;
    }

    .nav-links li{
        flex: 1;
        text-align: center;
    }

    /* colours the referenced links and shapes them */
    .nav-links a{
        color: var(--text-primary);
        display: inline-block;
        padding: 6px 14px;
        position: relative;
        text-decoration: none;
        width: 75px;
        text-align: center;
    }

    /* creates an invisible shape on the link before hover */
    .nav-links a::before{
        content: "";
        position: absolute;
        inset: -8px;
        background-color: var(--text-primary);
        z-index: -1;

        /* polygon to create a trapezoid hover */
        clip-path: polygon(
            10% 100%,
            90% 100%,
            100% 0%,
            0% 0%
            );
        opacity: 0;
    }


    .nav-links a:hover::before{
        /* enables trapezoid to be seen on hover */
        opacity: 1; 
    }
    .nav-links a:hover{
        color: var(--bg-primary);
        
    }

    /* LOGO STYLING */

    .logo{
        height: 32px;
        padding: 0 0 0 10px;
        display: flex;
        justify-content: center;
    }

    /*SVG will be filled depending on theme colours*/
    .logo svg path{
        fill: var(--text-primary);

    }

    /*BUTTON STYLING - theme switcher*/
    button {
        margin-right: 10px;
        position: relative;
        height: 40px;
        width: 40px;
        border-radius: 0;
        color: var(--bg-primary);
        background-color: var(--text-primary);
        border: 2px solid var(--text-primary);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        text-transform: uppercase;
    }

    button:hover{
        box-shadow: 0 0 6px var(--accent-glow);
        border: none;
        background-color: var(--accent-primary);
        display: flex;
        animation: blink 1s steps(1,start) infinite;
        color: var(--bg-primary);
        justify-content: center;
        text-transform: uppercase;
    }

    #theme svg{
        fill: var(--bg-primary);
    }

    #theme svg:hover{
        fill: var(--bg-primary);
    }

    /*last svg child is the sun svg - hidden when in light mode*/
    #theme svg:last-child{
        display: none;
    }

    /*hides the moon icon when darkmode class is added from js and displays the sun icon instead*/
    .darkmode #theme svg:first-child{
        display: none;
    }

    .darkmode #theme svg:last-child{
        display: block;
    } 

    .main-header{
        background-color: var(--bg-primary);
        border: 1px solid var(--text-primary);
        border-radius: 10px;
        flex: 0 0 85%;
        flex-direction: column;
        display: flex;
        justify-content: center;
        padding: 10px;
        font-size: 40px;
        text-transform:uppercase;
    }

    .main-header h1{
        margin-left: 10px;
        display: inline-block;
        overflow: hidden;
        /*mimics the right hand side cursor for typing*/
        border-right: 5px solid var(--text-primary);
        white-space: nowrap;
        animation: typing 2.8s steps(30, end) forwards;
        font-size:40px;
    }
    /* FOOTER STYLING*/
    footer{
        background-color: var(--text-primary);
        color:var(--bg-primary);
        text-align: center;
        padding: 20px 0 20px 0;
        display: flex;
        flex-wrap: nowrap;
        overflow: hidden;
    }

    /* styling to separate footer into 2 separate columns*/
    footer .left{
        text-align: center;
        float: left;
        width: 50%;
    }

    footer .right{
        text-align: center;
        float:right;
        width: 50%;
    }
    /*TABLE STYLING*/
    .footer-table {
        background-color: var(--text-primary);
        color: var(--bg-primary);
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        border-collapse: collapse;
        width: 75%;
    }

    .footer-table tr {
        border: 1px solid var(--bg-primary);
    }

    /*transforms table so that rows are emphasized on hover*/
    .footer-table tr:hover{
        background-color:var(--accent-primary);
        color: var(--bg-secondary);
        transition: all 0.2s ease-in-out;
        box-shadow: 0 0 6px var(--accent-glow);
        transform: scale(1.1);
    }


    .footer-table tr:hover td{
        color:var(--bg-secondary);
        background-color: var(--accent-primary);
    }

    footer{
        margin: 0;
    }
    footer > h1{
        color: var(--text-secondary);
    }

    footer a:link{
        color: var(--bg-primary);
    }
    .copyright{
        color: var(--text_tertiary);
    }
</style>

</head>


<body>
<header>
        <!--NAVIGATION BAR-->
        <nav class="navbar">
            <!--bunny logo on right of navbar-->
           <div class = "logo">
            <!--custom svgs which have removed original inkmaster clutter-->
                <svg version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="m11.142 1.064a2.3708 2.588 0 0 0-2.3708 2.5885v6.3576l-5.2648-2.431v17.628l12.498 5.7742v-5.89l-1.1021 0.87052-0.20362-0.55563 0.95388-0.75477-0.80571-0.65753 0.20828-0.55104 0.94925 0.78256v-10.872l-2.4912-1.153v-8.5479a2.3708 2.588 0 0 0-2.3708-2.5885zm9.7286 0a2.3708 2.588 0 0 0-2.3708 2.5885v8.5479l-2.4912 1.153v10.872l0.94925-0.78256 0.20828 0.55104-0.80569 0.65753 0.95387 0.75477-0.20366 0.55563-1.1021-0.87052v5.89l12.498-5.7742v-17.628l-5.2648 2.431v-6.3576a2.3708 2.588 0 0 0-2.3708-2.5885zm-9.4323 17.855c0.65494 0 1.1857 0.54326 1.1854 1.2132 3.27e-4 0.66993-0.53048 1.2132-1.1854 1.2132-0.65493 0-1.1857-0.54326-1.1854-1.2132-3.3e-4 -0.6699 0.53048-1.2132 1.1854-1.2132zm9.136 0c0.65493 0 1.1858 0.54326 1.1854 1.2132 3.47e-4 0.66993-0.53047 1.2132-1.1854 1.2132-0.65493 0-1.1857-0.54326-1.1854-1.2132-3.27e-4 -0.6699 0.53048-1.2132 1.1854-1.2132z" fill="#1a1a1a" stroke-width="2.3707"/>
                </svg>
            </div>
            <ul class="nav-links">
                <!--navigation links-->
                <li><a href="homepage.html">Home</a></li>
                <li> <a href="bookswithattribute.xml">Books</a></li>
            </ul>
            <div class = "navbar_buttons">
                <div class="theme-toggle"> <!--toggles theme to light/dark-->
                    <button id="theme">
                        <!--moon icon - dark mode-->
                        <svg version="1.1" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="m11.072 9.1221h0.78853v0.75328h-0.78853zm-1 1h0.78853v0.75328h-0.78853zm1-5h0.78853v0.75328h-0.78853zm-1-1h0.78853v0.75328h-0.78853zm-2 0h0.78853v0.75328h-0.78853zm-1 1h0.78853v0.75328h-0.78853zm1 5h0.78853v0.75328h-0.78853zm-1-1h0.78853v0.75328h-0.78853zm-1-1h0.78853v0.75328h-0.78853zm0-1h0.78853v0.75328h-0.78853zm0-1h0.78853v0.75328h-0.78853zm1-2h0.78853v0.75328h-0.78853zm-1 1h0.78853v0.75328h-0.78853zm-1 1h0.78853v0.75328h-0.78853zm0 1h0.78853v0.75328h-0.78853zm0 1h0.78853v0.75328h-0.78853zm1 1h0.78853v0.75328h-0.78853zm1 1h0.78853v0.75328h-0.78853zm4 0h0.78853v0.75328h-0.78853zm-1 1h0.78853v0.75328h-0.78853zm-1 0h0.78853v0.75328h-0.78853zm-1 0h0.78853v0.75328h-0.78853zm3-7h0.78853v0.75328h-0.78853zm-1-1h0.78853v0.75328h-0.78853zm-1 0h0.78853v0.75328h-0.78853zm-1 0h0.78853v0.75328h-0.78853zm-4 5h0.78853v0.75328h-0.78853zm1 1.0249h0.78853v0.75328h-0.78853zm1 0.97508h0.78853v0.75328h-0.78853zm-1 0h0.78853v0.75328h-0.78853zm2 1h0.78853v0.75328h-0.78853zm-1 0h0.78853v0.75328h-0.78853zm-2-4h0.78853v0.75328h-0.78853zm0-1h0.78853v0.75328h-0.78853zm1-1h0.78853v0.75328h-0.78853zm2-2h0.78853v0.75328h-0.78853zm-1 0h0.78853v0.75328h-0.78853zm0 1h0.78853v0.75328h-0.78853zm-1 0.027427h0.78853v0.75328h-0.78853z" stroke-width=".7707"/>
                        </svg>
                        <!--sun icon - light mode-->
                        <svg version="1.1" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="m3.0997 3.1221h0.78853v0.75328h-0.78853zm1 1h0.78853v0.75328h-0.78853zm7-1h0.78853v0.75328h-0.78853zm-1 1h0.78853v0.75328h-0.78853zm-7 7h0.78853v0.75328h-0.78853zm1-1h0.78853v0.75328h-0.78853zm7 1h0.78853v0.75328h-0.78853zm-1-1h0.78853v0.75328h-0.78853zm-3 1h0.78853v0.75328h-0.78853zm0-8h0.78853v0.75328h-0.78853zm-4 4h0.78853v0.75328h-0.78853zm8 0h0.78853v0.75328h-0.78853zm-3 1h0.78853v0.75328h-0.78853zm-1 0h0.78853v0.75328h-0.78853zm-1 0h0.78853v0.75328h-0.78853zm2-1h0.78853v0.75328h-0.78853zm-1 0h0.78853v0.75328h-0.78853zm-1 0h0.78853v0.75328h-0.78853zm2-1h0.78853v0.75328h-0.78853zm-1 0h0.78853v0.75328h-0.78853zm-1 0h0.78853v0.75328h-0.78853zm3 0h0.78853v0.75328h-0.78853zm0 1h0.78853v0.75328h-0.78853zm0 1h0.78853v0.75328h-0.78853zm-1 1h0.78853v0.75328h-0.78853zm-1 0h0.78853v0.75328h-0.78853zm-1 0h0.78853v0.75328h-0.78853zm-1-1h0.78853v0.75328h-0.78853zm0-1h0.78853v0.75328h-0.78853zm0-1h0.78853v0.75328h-0.78853zm3-1h0.78853v0.75328h-0.78853zm-1 0h0.78853v0.75328h-0.78853zm-1 0h0.78853v0.75328h-0.78853z" stroke-width=".7707"/>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
   </header>

<div class="main-header">
    <h1>Available books</h1>
</div>

<br></br>
<br></br>
<table>
<tr class="table-headings">
    <th>Cover</th>
    <th>Title</th>
    <th>Author</th>
    <th>Category</th>
    <th>Price</th>
    <th>Year</th>
</tr>

<xsl:for-each select="bookshop/book">
<tr class="book-row">
    <td class="book-cover">
        <img src="{bookcover/@url}" alt="Book Cover" width="60"/>
    </td>
    <td><xsl:value-of select="title"/></td>
    <td>
        <xsl:value-of select="author/firstname"/>
        <xsl:text> </xsl:text>
        <xsl:value-of select="author/lastname"/>
    </td>
    <td style="text-transform:capitalize"><xsl:value-of select="@category"/></td>
    <td><xsl:value-of select="price"/></td>
    <td><xsl:value-of select="year"/></td>

    <td class="hover-info">
        <div class="hover-box">
            <xsl:value-of select="description"/>
            <br></br>
            <div style="font-size: small; color: var(--bg-secondary);">ISBN <xsl:value-of select="ISBN"/></div>
        </div>
    </td>
</tr>
</xsl:for-each>

</table>

<br/>
<footer>
        <!--left div section containing table of opening times-->
        <div class="left">
            <h1>OPENING HOURS</h1>
            <table class="footer-table">
                <thead>
                    <tr>
                    <th>DAY</th>
                    <th>HOURS</th>
                    </tr>
                </thead>
            <tr>
                <td>MONDAY</td>
                <td>9:00 - 18:00</td>
            </tr>
            <tr>
                <td>TUESDAY</td>
                <td>9:00 - 18:00</td>
            </tr>
            <tr>
                <td>WEDNESDAY</td>
                <td>9:00 - 18:00</td>
            </tr>
            <tr>
                <td>THURSDAY</td>
                <td>9:00 - 18:00</td>
            </tr>
            <tr>
                <td>FRIDAY</td>
                <td>9:00 - 18:00</td>
            </tr>
            <tr>
                <td>SATURDAY</td>
                <td>11:00 - 15:00</td>
            </tr>
            <tr>
                <td>SUNDAY</td>
                <td>11:00 - 15:00</td>
            </tr>
            </table>
            <p> Closed on <em><a href="https://publicholidays.mu/" style="color: var(--text-tertiary); text-decoration: underline;">public holidays</a></em>.</p>
        </div>

        <!--right div section which contains the about us and contact us, both formatted to middle and right due to spacing-->
        <div class="right">
            <h1>ABOUT US</h1>
            <p>Discover a world of literature and adventure with us. We offer a wide range of genres and authors to suit every taste. Whether you're into fantasies, tear jerkers, mysteries or facts over fiction, we have something for everyone!
                An extensive collection of books for our book lovers and addicts, that help immerse you into the world the authors have created. </p>
            <br></br>
            <p>We are currently located at <em>14 Bookstonbury Ave, Flic-en-Flac, Mauritius.</em> Come visit our new Cascavelle location!</p>
        </div>

        <div class="right">
            <h1>CONTACT US</h1>
            <p><a href="mailto:dearguiltyreader@gmail.com">dearguiltyreader@gmail.com</a></p>
            <p class="copyright">Copyright © 2026 DEAR GUILTY READER. All rights reserved.</p>
        </div>
        
        
   </footer>

<script src="js/script.js"></script>
</body>
</html>

</xsl:template>

</xsl:stylesheet>