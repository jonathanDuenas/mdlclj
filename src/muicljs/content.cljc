(ns muicljs.content
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            ))

(defn Content [& child]
  (dom/div
    #js {:className "demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header"}
    child
    )
  )
