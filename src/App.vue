<template>
  <Box :width="100" flexDirection="column" borderStyle="double">
    <Header />
    <InputWrap />
    <Package />
    <Deps />
    <Download />
  </Box>
</template>

<script lang="ts" setup>
import { KeyDataEvent } from "vue-termui/dist/src";

const stop = onInputData(({ event }) => {
  if (!event) {
    return
  }
  const key = (event as KeyDataEvent).key
  if (key === 'C' && event.ctrlKey) {
    stop()
    process.exit(0)
  }
})
</script>
