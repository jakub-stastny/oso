(ns my-nav
  (:require [cherry.core :refer [defclass]]
            [helpers :refer [append-tag tag no-self-referring-link]]))

(defclass MyNav
  (extends HTMLElement)

  (constructor [this]
               (super)
               (let [shadow (.attachShadow this #js {"mode" "open"})]
                 (append-tag this (tag :link {:rel "stylesheet" :href "/css/styles.css"}))
                 (append-tag this (tag :nav {:style "margin: 2ex;"}
                                       (tag :ul {:class "inline-list" :style "justify-content: center;"}
                                            [(tag :li (no-self-referring-link "Main page" "/"))
                                             (tag :li (no-self-referring-link "About me" "/about"))
                                             (tag :li (no-self-referring-link "Services" "/services"))
                                             (tag :li (no-self-referring-link "Contact" "/contact"))]))))))

(js/customElements.define "my-nav" MyNav)
