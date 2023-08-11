---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "simple-stateflow"
  text: "A VitePress Site"
  tagline: My great project tagline
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<div ref="el"></div>

<script setup>
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { ref, onMounted } from 'vue'
import App from '@simple-stateflow/react'

const el = ref()
onMounted(() => {
  const root = createRoot(el.value)
  root.render(createElement(App, {}, null))
})
</script>
