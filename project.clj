(defproject muicljs "0.1.0-SNAPSHOT"
  :description "Mui cljs test"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.562"]
                 [org.omcljs/om "1.0.0-beta1"]
                 [figwheel-sidecar "0.5.9" :scope "test"]
                 
                 ;[bidi "2.0.17"]
                 ;[compassus "1.0.0-alpha3"]

                 [hiccup"1.0.5"]
                 ]

  :plugins [
            [lein-figwheel "0.5.9"]
            [lein-cljsbuild "1.1.6"]
            [lein-ring "0.12.0"]
            ]

  :source-paths ["src"]
  
  :ring {
         :handler muicljs.server/handler
         }

  :hooks [leiningen.cljsbuild]
  
  :figwheel {
             :server-port 3450
             }

  :resource-paths ["resources" "target/cljsbuild"] 

  :clean-targets ^{:protect false}["target/" "resources/public/js"]
  
  :cljsbuild {
              :builds [ {:id "dev"
                         :figwheel true
                         :source-paths ["src"]
                         :compiler {:main muicljs.core
                                    :asset-path "js"
                                    :output-to "resources/public/js/mui.js"
                                    :output-dir "resources/public/js"
                                    :verbose true} }
                        {:id "prod"
                         :source-paths ["src"]
                         :compiler {:main muicljs.core
                                    :output-to "dist/js/mui.js"
                                    :source-map "dist/js/mui.map.js"
                                    :output-dir "dist/js"
                                    :optimizations :whitespace
                                    :pretty-print true}} ]
              })
