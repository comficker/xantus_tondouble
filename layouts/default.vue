<script setup lang="ts">
const route = useRoute()

const h = decodeURIComponent(route.hash)
const matches = h.split("tgWebAppThemeParams=")
const themeVariables = ref({
  "bg_color": "#ffffff",
  "text_color": "#000000",
  "hint_color": "#707579",
  "link_color": "#3390ec",
  "button_color": "#3390ec",
  "button_text_color": "#ffffff",
  "secondary_bg_color": "#f4f4f5"
})
if (matches.length == 2) {
  themeVariables.value = JSON.parse(matches[1])
}

document.body.style.setProperty('--bg_color', themeVariables.value.bg_color)
document.body.style.setProperty('--text_color', themeVariables.value.text_color)

useHead({
  title: "Lobby"
})
</script>

<template>
  <div
    style="--bg_color: #ffffff"
    :style='{
      "--bg_color": themeVariables.secondary_bg_color,
      "--text_color": themeVariables.text_color,
      "--hint_color": themeVariables.hint_color,
      "--link_color": themeVariables.link_color,
      "--button_color": themeVariables.button_color,
      "--button_text_color": themeVariables.button_text_color,
      "--secondary_bg_color": themeVariables.bg_color,
    }'
  >
    <slot/>
  </div>
</template>
