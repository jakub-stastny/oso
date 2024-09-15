(ns my-footer
  (:require [helpers :refer [css-var]]
            [config :refer [youtube-link reddit-link]])
  (:require-macros [macros :refer [component]]))

;; Script tags inside the shadow DOM are not executed in the same way
;; they would be if they were in the main document. When you include a
;; script tag inside the shadow root, it does not have the same global
;; scope as when it’s included in the main document. Therefore, the script
;; may not load or execute as expected within the shadow DOM context.
;; (js* "import('/js/fa-icon.mjs')")
;; (js* "import('/js/my-email.mjs')")
(js/import "/js/fa-icon.mjs")
(js/import "/js/my-email.mjs")

(defn- social-icon [name link]
  #html [:a {:href link :target "_blank" :rel "noopener"}
         [:fa-icon {:name (str "brands/" name)
                    :colour (css-var (str name "-colour"))}]])

(defn- render-footer []
  #html [:ul {:class "footer-icons"}
         [:li (social-icon "youtube" youtube-link)]
         [:li [:my-email {:subject "Hey there!"}
               [:a [:fa-icon {:name "envelope" :colour (css-var "envelope-colour")}]]]]
         [:li (social-icon "reddit" reddit-link)]])

(defn render []
  #html [:<>
         [:link {:rel "stylesheet" :href "/css/styles.css"}]
         [:link {:rel "stylesheet" :href "/css/my-footer.css"}]
         [:footer (render-footer)]])

(component MyFooter "my-footer" render)
