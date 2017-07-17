(ns muicljs.menu-item
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            ))

(defn MenuItem [style text]
  ;; Style {:href link}
  (dom/a #js {:className "mdl-navigation__link" :href (:href style)} text)
  )
