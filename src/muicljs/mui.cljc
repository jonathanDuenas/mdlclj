(ns muicljs.mui
  (:require [muicljs.app-bar :as appBar]
            [muicljs.button :as button]
            [muicljs.divider :as divider]
            [muicljs.list :as listMui]
            [muicljs.list-item :as listItem]
            [muicljs.menu-drawer :as menuDrawer]
            [muicljs.menu-item :as menuItem]
            [muicljs.content :as content]))

(defn appBar [s t] (appBar/AppBar s t))
(defn button [s t] (button/Button s t))
(defn divider
  ([] (divider nil nil) )
  ([s t] (divider/Divider s t) )
  ) 
(defn listMui [s & c]  (listMui/List s c))
(defn listItem [s t] (listItem/ListItem s t ))
(defn menuDrawer [s & c] (menuDrawer/MenuDrawer s c))
(defn menuItem [s t] (menuItem/MenuItem s t))
(defn content [& c] (content/Content c))
