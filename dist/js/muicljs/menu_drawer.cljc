(ns muicljs.menu-drawer
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            ))

(defn MenuDrawer [style & child]
  ;; Style: {:title titulo}
   (dom/div
    #js {:className "demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50"}
    (dom/header
     #js {:className "demo-drawer-header"}
     (dom/span nil (:title style))
     )
    (dom/nav
     #js {:className "demo-navigation mdl-navigation mdl-color--blue-grey-800"}
     child
     )
    )
  )
