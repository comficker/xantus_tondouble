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

</script>

<template>
  <div
    id="webapp"
    class="max-w-lg mx-auto p-2"
    style="--bg_color: #ffffff"
    :style='{
      "--bg_color": themeVariables.bg_color,
      "--text_color": themeVariables.text_color,
      "--hint_color": themeVariables.hint_color,
      "--link_color": themeVariables.link_color,
      "--button_color": themeVariables.button_color,
      "--button_text_color": themeVariables.button_text_color,
      "--secondary_bg_color": themeVariables.secondary_bg_color,
    }'>
    <div class="space-y-2">
      <div class="btn shadow font-semibold rounded-lg p-4 flex justify-between items-center">
        <div class="flex items-center gap-3">
          <div class="i-con-rank w-5 h-5"/>
          <div>Leaderboard</div>
        </div>
        <div>
          <div class="i-con-right w-5 h-5"/>
        </div>
      </div>
      <div class="btn shadow font-semibold rounded-lg p-4 flex justify-between items-center">
        <div class="flex items-center gap-3">
          <div class="i-con-help w-5 h-5"/>
          <div>Help Center</div>
        </div>
        <div>
          <div class="i-con-right w-5 h-5"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>
