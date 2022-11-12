<template>
  <Box :width="95" :height="3" alignItems="center" justifyContent="center">
    <Box v-if="downloadStatus === 1">
      <Text> Downloading: </Text>
      <ProgressBar :value="progress" :width="60" color="#42d392" />
    </Box>
    <Box v-if="downloadStatus === 2">
      <Text> Download Success 🎉 </Text>
    </Box>
  </Box>
</template>

<script lang="ts" setup>
import { install } from '@/services';
import { useDepsStore } from '@/store';

const initialProgress = 0
const downloadStatus = ref(0)
const progress = ref(initialProgress)
const depStore = useDepsStore()
const deps = computed(() => depStore.normalize())
const devDeps = computed(() => depStore.normalize(true))

async function download() {
  if (downloadStatus.value === 1 || (!deps.value.length && !devDeps.value.length)) {
    return
  }
  downloadStatus.value = 1

  const speed = (deps.value.length + devDeps.value.length) > 5 ? 100 : 50
  const progressTimer = setInterval(() => {
    if (progress.value < 95) {
      progress.value += 2
    } else {
      clearInterval(progressTimer)
    }
  }, speed)

  try {
    await install(deps.value)
    await install(devDeps.value, { isDev: true })
  } catch (error) {
    console.log(error, 'error')
    process.exit(1)
  }

  progress.value = 100
  depStore.reset()

  setTimeout(() => {
    downloadStatus.value === 2
    progress.value = initialProgress
    setTimeout(() => {
      downloadStatus.value = 0
    }, 2000)
  }, 80)

}

onKeyData('Enter', download)
</script>
