<template>
  <Box>
    <Box width="50" :paddingLeft="1" borderStyle="classic" flexDirection="column">
      <Text color="#42d392">Dependencies</Text>
      <Text color="white" v-for="dep in deps" :key="dep.name">{{ `${dep.name}@${dep.version}` }}</Text>
    </Box>
    <Box width="50" :paddingLeft="1" borderStyle="classic" flexDirection="column">
      <Text color="#647eff">Dependencies</Text>
      <Text color="white" v-for="devDep in devDeps" :key="devDep.name">{{ `${devDep.name}@${devDep.version}` }}</Text>
    </Box>
  </Box>
</template>


<script lang="ts" setup>
import { useDepsStore } from '@/store';

const depStore = useDepsStore()
const deps = computed(() => depStore.deps)
const devDeps = computed(() => depStore.devDeps)
</script>
