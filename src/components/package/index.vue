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
          <Text v-if="cursorIndex === index" color="yellow">❯</Text>
          <!-- <Text>◉</Text>
            <Text>◉</Text> -->
        </Box>
        <Box v-for="(header, headerIndex) in headers" :key="headerIndex" :width="header.width" :paddingRight="2"
          justifyContent="flex-start">
          <!-- <Box width="3" paddingRight="1">
            <Text color="blue">❯</Text>
          </Box> -->
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
import { useSearchStore } from "@/store";
import { Header } from "@/types";
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
const keyword = computed(() => searchStore.keyword);
const packages = computed(() => searchStore.packages);

const packageShows = computed(() => {
  return packages.value.slice(0, 10);
});

const togglePackage = (event: KeyDataEvent) => {
  const offset = event.key === 'ArrowUp' ? -1 : 1
  const value = cursorIndex.value + offset

  cursorIndex.value = Math.max(0, Math.min(packages.value.length - 1, value))
}


onKeyData(['ArrowUp', 'ArrowDown'], (e) => {
  togglePackage(e)
})
</script>
