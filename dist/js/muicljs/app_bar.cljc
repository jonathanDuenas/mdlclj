(ns muicljs.app-bar
  (:require 
            [om.dom :as dom]
            ))

(defn AppBar [style text]
  (dom/header
    #js {:className "demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600"}
    (dom/div
     #js {:className "mdl-layout__header-row"}
     (dom/span  #js {:className "mdl-layout-title"} text)
     (dom/div #js {:className "mdl-layout-spacer"} nil)
     )
    )
  )
