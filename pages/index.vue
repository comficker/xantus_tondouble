<script setup lang="ts">
import {TonConnectUI} from '@tonconnect/ui'


const connector = ref<TonConnectUI | null>(null)
const connected = ref(false)

const connect = async () => {
  if (connector.value && !connector.value.connected) {
    const connectedWallet = await connector.value.connectWallet().catch(() => null);
    connected.value = !!connectedWallet
  }
}

const bet = ref(0)
const amount = ref(1)

const double = () => {

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
  <div id="webapp" class="max-w-lg mx-auto py-4 px-2 md:py-2">
    <div class="space-y-2">
      <div>
        <div class="pt-full relative">
          <div class="absolute inset-0 flex items-center justify-center">
            <img src="/ton.png" alt="" class="w-1/2 object-cover">
          </div>
        </div>
      </div>
      <div class="grid gap-2 grid-cols-2">
        <div class="btn shadow font-semibold rounded-xl flex justify-center" :class="{'primary': bet === 0}" @click="bet = 0">
          <div>Head</div>
        </div>
        <div class="btn shadow font-semibold rounded-xl flex justify-center" :class="{'primary': bet === 1}" @click="bet = 1">
          <div>Tail</div>
        </div>
      </div>
      <div class="grid gap-2 grid-cols-3 text-sm">
        <div
          v-for="i in [1, 2, 3, 5, 8, 10]"
          class="btn shadow font-semibold rounded-xl flex justify-center"
          :class="{'primary': amount === i}"
          @click="amount = i"
        >
          <div>{{i}} TON</div>
        </div>
      </div>
      <div v-if="!connected" class="btn primary shadow font-semibold rounded-xl flex justify-between items-center" @click="connect">
        <div class="flex items-center gap-3">
          <div class="i-con-wallet w-5 h-5"/>
          <div>Connect wallet</div>
        </div>
        <div>
          <div class="i-con-right w-5 h-5"/>
        </div>
      </div>
      <div v-else class="btn primary shadow font-semibold rounded-xl flex justify-center items-center" @click="double">
        <div class="flex items-center justify-center gap-3">
          <div class="i-con-wallet w-5 h-5"/>
          <div>Get double</div>
        </div>
      </div>
      <div class="btn shadow font-semibold rounded-xl flex justify-between items-center">
        <div class="flex items-center gap-3">
          <div class="i-con-rank w-5 h-5"/>
          <div>Leaderboard</div>
        </div>
        <div>
          <div class="i-con-right w-5 h-5"/>
        </div>
      </div>
      <div class="btn shadow font-semibold rounded-xl flex justify-between items-center">
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
