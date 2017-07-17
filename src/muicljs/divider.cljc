(ns muicljs.divider
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            ))

(defn Divider
  ([style text]
  (dom/hr
   #js {:style #js {:margin "8px 0px" :height "1px" :border "none" :background-color "rgb(224, 224, 224)" }}
   nil
   ))
  ([] (Divider nil nil))
  )
