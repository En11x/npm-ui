<template>
  <Box width="100" flexDirection="column" borderStyle="single">
    <template v-if="packageShows.length">
      <Box>
        <Box width="3"></Box>
        <Box v-for="item in headers" :key="item.id" :width="item.width">
          <Text color="green">{{ item.name }}</Text>
        </Box>
      </Box>
      <Box v-for="(item, index) in packageShows" :key="index">
        <Box width="3" justifyContent="flex-end">
          <Text v-if="cursorIndexComputed === index" color="yellow">❯</Text>
          <Text v-if="depStore.has(item.name)" color="#42d392">◉</Text>
          <Text v-if="depStore.has(item.name, true)" color="#647eff">◉</Text>
        </Box>
        <Box v-for="(header, headerIndex) in headers" :key="headerIndex" :width="header.width" :paddingRight="2"
          justifyContent="flex-start">
          <Text color="white">{{
              header.id ? get(item, header.id) : "---"
          }}</Text>
        </Box>
      </Box>
    </template>
    <Guide v-else />
  </Box>
</template>

<script lang="ts" setup>
import { useDepsStore, useSearchStore } from "@/store";
import { DepInfo, Header } from "@/types";
import { get } from '@/utils/get';
import { KeyDataEvent } from "vue-termui/dist/src";

const MAX_SHOW_PACKAGE = 10;
const cursorIndex = ref(0);
const headers: Header[] = [
  {
    width: 42,
    name: "Package Name",
    id: "links.repository",
  },
  {
    width: 20,
    name: "Version",
    id: "version",
  },
  {
    width: 20,
    name: "Author",
    id: "author.name",
    link: "author.url",
  },
  {
    width: 15,
    name: "Downloads",
    id: "" as any,
  },
];
const searchStore = useSearchStore();
const depStore = useDepsStore()
const keyword = computed(() => searchStore.keyword);
const packages = computed(() => searchStore.packages);
const cursorIndexComputed = computed(() => {
  return Math.min(cursorIndex.value, MAX_SHOW_PACKAGE - 1)
})
const packageShows = computed(() => {
  return cursorIndex.value > MAX_SHOW_PACKAGE - 1 ? packages.value.slice(cursorIndex.value - (MAX_SHOW_PACKAGE - 1), cursorIndex.value + 1) : packages.value.slice(0, MAX_SHOW_PACKAGE);
});

watch(keyword, () => {
  cursorIndex.value = 0
})

const togglePackage = (event: KeyDataEvent) => {
  const offset = event.key === 'ArrowUp' ? -1 : 1
  const value = cursorIndex.value + offset

  cursorIndex.value = Math.max(0, Math.min(packages.value.length - 1, value))
}


onKeyData(['ArrowUp', 'ArrowDown'], (e) => {
  togglePackage(e)
})

onKeyData(' ', (e) => {
  const selected = packages.value[cursorIndex.value]
  if (!selected) {
    return
  }
  const depInfo: DepInfo = { name: selected.name, version: selected.version }
  if (!depStore.has(depInfo.name) && !depStore.has(depInfo.name, true)) {
    depStore.add(depInfo)
  } else if (
    depStore.has(depInfo.name)
  ) {
    depStore.remove(depInfo.name)
    depStore.add(depInfo, true)
  } else if (depStore.has(depInfo.name, true)) {
    depStore.remove(depInfo.name, true)
  }
})
</script>
