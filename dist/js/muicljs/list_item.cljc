(ns muicljs.list-item
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            ))

(defn ListItem [style text]
  ;; Style {:href link}
  (dom/li
   #js {:className "mdl-list__item"}
   (dom/a
    #js {:className "mdl-list__item-primary-content" :href (:href style)}
    text
    )
   )
  )
