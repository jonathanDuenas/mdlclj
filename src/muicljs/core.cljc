(ns muicljs.core
  (:require #?(:cljs [goog.dom :as gdom])
            [muicljs.mui :as mui]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

#?(:cljs (enable-console-print!))

(def app-state (atom {:count 0}))

(def reconciler
  (om/reconciler {:state app-state}))

(om/defui RootView
  Object
  (render
   [this]
   (let [{:as props} (om/props this)]
   (mui/content
    (mui/appBar nil "Inicial")
    (mui/menuDrawer {:title "Titulo"}  (mui/menuItem {:href "/"} "Home") (mui/menuItem {:href "/Segunda"} "Segunda"))
    (dom/main
     #js {:className "mdl-layout__content mdl-color--grey-100"}
     (dom/h2 nil "Lorean Ipsum")
     (mui/divider)
     (mui/button #?(:cljs #js {:onClick (fn [] (js/alert "Hola Mundo"))}
                       :clj nil) "Prueba")
     )
    )
   )))

(om/defui Counter
  Object
  (render
   [this]
   (let [{:keys [count]} (om/props this)]
     (mui/content
      (mui/appBar nil "Inicial")
      (mui/menuDrawer {:title "Titulo"} (mui/menuItem {:href "/"} "Home") (mui/menuItem {:href "/Segunda"} "Segunda"))
      (dom/main
       #js {:className "mdl-layout__content mdl-color--grey-100"}
       (dom/h2 nil "Lorean Ipsum")
       (mui/divider)
       (dom/br nil nil)
       (mui/button #?(:cljs #js {:onClick (fn [] (js/alert "Hola Mundo"))}
                         :clj nil) "Hola")
       (mui/listMui nil (mui/listItem nil "lista 1") (mui/listItem nil "lista 2"))
       (dom/span nil (str "Count: " count))
       (mui/button
        {:onClick
         (fn [e]
           (swap! app-state update-in [:count] inc))}
        "Click me!")
       )))))

#?(:cljs (om/add-root! reconciler
                       Counter (gdom/getElement "app")))
