(ns muicljs.list
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            ))

(defn List [style & child]
   (dom/ul
    #js {:className "mdl-list"}  
     child
     )
  )
