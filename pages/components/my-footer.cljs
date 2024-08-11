(ns my-footer
  (:require [cherry.core :refer [defclass]]
            [helpers :refer [append-tag tag no-self-referring-link css-var]]))

(defclass MyFooter
  (extends HTMLElement)

  (constructor [this]
               (super)
               (let [shadow (.attachShadow this #js {"mode" "open"})]
                 (append-tag this (tag :script {:type "module" :src "/components/fa-icon.mjs"}))
                 (append-tag this (tag :script {:type "module" :src "/components/my-email.mjs"}))
                 (append-tag this (tag :link {:rel "stylesheet" :href "/css/styles.css"}))
                 (append-tag this (tag :link {:rel "stylesheet" :href "/css/footer.css"}))
                 (append-tag this (tag :footer
                                       [(tag :p {:class "copyright"} (str "Jakub Šťastný " (.getFullYear (js/Date.))))
                                        (tag :ul {:class "inline-list"}
                                             [(tag :li
                                                   (tag :my-email
                                                        {:subject "Hey there!"}
                                                        (tag :a (tag :fa-icon {:name "envelope" :colour (css-var "envelope-colour")}))))
                                              (tag :li (tag :a {:href "https://www.youtube.com/@jakub-stastny" :target "_blank" :rel "noopener"}
                                                            (tag :fa-icon {:name "brands/youtube" :colour (css-var "youtube-colour")})))
                                              (tag :li (tag :a {:href "https://www.reddit.com/user/jakubstastny" :target "_blank" :rel "noopener"}
                                                            (tag :fa-icon {:name "brands/reddit" :colour (css-var "reddit-colour")})))])])))))

(js/customElements.define "my-footer" MyFooter)
