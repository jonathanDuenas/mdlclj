(ns muicljs.button
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            ))

(defn Button [style text]
  ;style: {:onClick action}
  (dom/button
   #js {:className "mdl-button mdl-js-button mdl-button--raised mdl-button--colored" :onClick (:onClick style)}
   text
   )
  )
