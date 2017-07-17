(ns muicljs.server
  (:use     [hiccup.middleware :only (wrap-base-url)])
  (:require [compojure.core :refer [defroutes GET]]
            [compojure.route :as route]
            [compojure.handler :as handler]
            [compojure.response :as response]
            [muicljs.core :as core]
            [hiccup.page :as hiccup]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [muicljs.template :as template]
            ))

(defn render-om [root reconciler v]
    (template/template {:style nil :body (dom/render-to-str (om/add-root! reconciler root nil)) :val v}))

(defroutes main-routes
  (GET "/" []
       {:status 200
        :headers {"Content-Type" "text/html"}
        :body (render-om core/RootView core/reconciler 0)})
  (GET "/Segunda" []
       {:status 200
        :headers {"Content-Type" "text/html"}
        :body (render-om core/Counter core/reconciler 1)})
  (route/resources "/")
  (route/not-found "Page not found")
  (route/files "/" {:root "resources/public"}))

(def handler
  (-> (handler/site main-routes)
      (wrap-base-url)))
