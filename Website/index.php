<? 
    include("artwork.php");
?>



<!DOCTYPE html>
<html>

<head>
    <title>Jared Christiansen – Designer and doer</title>


    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144x144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="152x152" href="apple-touch-icon-152x152.png" />
    <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />
    <meta name="application-name" content="&nbsp;" />
    <meta name="msapplication-TileColor" content="#FFFFFF" />
    <meta name="msapplication-TileImage" content="mstile-144x144.png" />





    <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1">
    <link href="jaredch.css" rel="stylesheet" type="text/css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />



    <script src="main.js"></script>



</head>

<header>
    <div class="header-proper"></div>
    <div class="scroll-line"></div>
</header>

<body onload="checkIfLoad()">
    <div class="entry-top" id="loader">
        <div class="entry-background"></div>
        <div class="entry">

            <div class="entry-logo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 745 423.6">
                    <defs>
                        <style>
                            .a {
                                fill: white;
                            }
                        </style>
                    </defs>
                    <title>jaredchCrown</title>
                    <path class="a" d="M654.05,481.5a2.92,2.92,0,0,1-5.19-1C607.3,331.27,510,258.4,510,258.4s-97.31,72.87-138.87,222.12a2.93,2.93,0,0,1-5.2,1C283.79,369.32,137.49,352.75,137.49,352.75L247.43,675.12A10.27,10.27,0,0,0,257,682H763a10.28,10.28,0,0,0,9.55-6.88L882.49,352.75S736.19,369.32,654.05,481.5Z"
                        transform="translate(-137.49 -258.4)" />
                </svg>
            </div>

        </div>
    </div>


    <div class="elevator-wrapper"></div>
    <div class="siteBorder"></div>
    <div id="colorModal"></div>



    <div class="header">

    </div>
    <div class="navBar">
        <div class="navBarContent">
            <div class="navImage">
                <a href="https://jaredch.com">
                    <img src="images/jaredchCrown.svg">
                </a></div>
            <nav class="navigation">
                <ul class="menu">
                    <li class="li activeL">
                        <a href="https://jaredch.com">Home</a>
                    </li>
                    <div class="dropdown">
                        <li class="li drop">
                            <div class="dropbtn">
                                <a href="#projects">Projects</a></div>
                            <div class="dropdownContent">
                                <a href="./wavy-tech">Wavy Tech</a><br>
                                <a href="./og-crewniverse">OG Crewniverse</a><br>
                                <a href="./say-yes">Say Yes</a><br>
                                <a href="./new-economy">The New Economy</a><br>
                                <a href="./home-book">Home Book</a><br>
                                <a href="./fruit-realms">Fruit Realms</a><br>
                                <a href="./lands-of-arcadia">Lands of Arcadia</a><br>
                                <a href="./shubits">Shubits</a><br>
                            </div>
                        </li>
                    </div>
                    <li class="li">
                        <a href="./about">About</a>
                    </li>

                </ul>
            </nav>
        </div>
    </div>



    <div class="main all" style="display:none;" id="pageContent">

        <div class="cover">
            <div class="text">
                <h1>Jared Christiansen,<br>Designer, Achiever, &amp; Doer.</h1>
            </div>

            <a href="#projects">
                <div class="downArrow"></div>
            </a>
        </div>
    </div>



    <div class="main all" id="projects">


        <div class="showWork" id="wavyTech" onmouseover="bgChange('wavyTech')" onmouseout="bgChange(0)">
            <a href="./wavy-tech.html"><img src="images/portfolio/wavyTech/wavyTechThumbnail.jpg"></a>
        </div>

        <div class="showWork" onmouseover="bgChange('ogCrewniverse')" onmouseout="bgChange(0)">
            <a href="./og-crewniverse.html"><img src="images/portfolio/ogCrewniverse/ogCrewniverseThumbnail.jpg"></a>
        </div>
        <div class="showWork say-yes" onmouseover="bgChange('sayYes')" onmouseout="bgChange(0)">
            <div class="inside say-yes" >
                <a href="./say-yes.html"><img src="images/portfolio/sayYes/SayYesThumbnail.png"></a>
            </div>
        </div>
        <div class="showWork new-economy" >
            <a href="./new-economy.html"><img src="images/portfolio/theNewEconomy/theNewEconomyThumbnail.jpg"></a>
        </div>
        <div class="showWork" >
            <a href="./home-book.html"><img src="images/portfolio/homeBook/homeBookThumbnail.jpg"></a>
        </div>
        <div class="showWork" >
            <a href="./fruit-realms.html"><img src="images/portfolio/fruitRealms/fruitRealmsThumbnail.jpg"></a>
        </div>
        <div class="showWork" >
            <a href="./lands-of-arcadia.html"><img src="images/portfolio/landsOfArcadia/landsOfArcadiaThumbnail.jpg"></a>
        </div>
        <div class="showWork" >
            <a href="./shubits.html"><img src="images/portfolio/shubits/shubitsThumbnail.jpg"></a>
        </div>

    </div>


    <div id="footer">
        <div class="footerText">

            <br><br><br>
            <p>Website designed and coded by Jared Christiansen.</p>
            <p><a href="./about">© Jared Christiansen 2018 | Contact
                </a></p>
        </div>
    </div>

    <!-- <script>
window.addEventListener('load', function(){
var allimages= document.getElementsByTagName('img');
for (var i=0; i<allimages.length; i++) {
if (allimages[i].getAttribute('data-src')) {
allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));
}
}
}, false)
</script>-->
<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script>
    AOS.init({
  duration: 1200,
  easing: 'ease-in-out-back'
});
  </script>
</body>

</html>