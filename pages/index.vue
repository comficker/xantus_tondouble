<script setup lang="ts">
import {TonConnectUI} from '@tonconnect/ui'


const connector = ref<TonConnectUI | null>(null)
const connected = ref(false)

const connect = async () => {
  if (connector.value && !connector.value.connected) {
    const connectedWallet = await connector.value.connectWallet();
    console.log(connectedWallet);
  }
}

onMounted(() => {
  const tonConnectUI = new TonConnectUI({
    manifestUrl: 'https://tondouble.vercel.app/tonconnect-manifest.json',
  });

  tonConnectUI.uiOptions = {
    actionsConfiguration: {
      twaReturnUrl: 'https://t.me/TonDoubleBot/play'
    }
  }

  tonConnectUI.connectionRestored.then((r) => {
    connected.value = r
  })

  connector.value = tonConnectUI
})
</script>

<template>
  <div id="webapp" class="max-w-lg mx-auto p-2">
    <div class="space-y-2">
      <div v-if="!connected" class="btn shadow font-semibold rounded-lg p-4 flex justify-between items-center" @click="connect">
        <div class="flex items-center gap-3">
          <div class="i-con-wallet w-5 h-5"/>
          <div>Connect wallet</div>
        </div>
        <div>
          <div class="i-con-right w-5 h-5"/>
        </div>
      </div>
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
