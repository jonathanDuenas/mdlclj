(ns muicljs.template)


(defn template [{:keys [body style val]}]
  (str
   "<!doctype html>
 <html ⚡> 
  <head>
     <meta charset=\"utf-8\">
     <link rel=\"canonical\" href=\".html\" >
<link rel=\"manifest\" href=\"manifest.json\">

<meta name=\"application-name\" content=\"prueba\">
<meta name=\"apple-mobile-web-app-title\" content=\"prueba\">
<meta name=\"msapplication-starturl\" content=\"/\">
    <meta name=\"viewport\" content=\"width=device-width,minimum-scale=1,initial-scale=1\">

    <!-- Add to homescreen for Chrome on Android -->
    <meta name=\"mobile-web-app-capable\" content=\"yes\">
    <link rel=\"icon\" sizes=\"192x192\" href=\"images/android-desktop.png\">

    <!-- Add to homescreen for Safari on iOS -->
    <meta name=\"apple-mobile-web-app-capable\" content=\"yes\">
    <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\">
    <meta name=\"apple-mobile-web-app-title\" content=\"Material Design Lite\">
    <link rel=\"apple-touch-icon-precomposed\" href=\"images/ios-desktop.png\">

    <!-- Tile icon for Win8 (144x144 + tile color) -->
    <meta name=\"msapplication-TileImage\" content=\"images/touch/ms-touch-icon-144x144-precomposed.png\">
    <meta name=\"msapplication-TileColor\" content=\"#3372DF\">

    <link rel=\"shortcut icon\" href=\"images/favicon.png\">

    <!-- SEO: If your mobile URL is different from the desktop URL, add a canonical link to the desktop page https://developers.google.com/webmasters/smartphone-sites/feature-phones -->
    <!--
    <link rel=\"canonical\" href=\"http://www.example.com/\">
    -->

    <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en\">
    <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">
    <link rel=\"stylesheet\" href=\"https://code.getmdl.io/1.3.0/material.cyan-light_blue.min.css\">
    <link rel=\"stylesheet\" href=\"styles.css\">    
<script async custom-element=\"amp-install-serviceworker\" src=\"https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js\"></script>     
<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
     <script async src=\"https://cdn.ampproject.org/v0.js\"></script>"
         style
         "</head> <body>"
         body
         (if (= val 1)
           "<script src=\"js/mui.js\"></script>"
           )
         "
<amp-install-serviceworker
      src=\"sw/sw.js\"
      layout=\"nodisplay\">
</amp-install-serviceworker>
<script src=\"https://code.getmdl.io/1.3.0/material.min.js\"></script>
</body></html>"))
