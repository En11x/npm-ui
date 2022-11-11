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
        <Box width="3">
          <Text>❯</Text>
        </Box>
        <Box
          v-for="(header, headerIndex) in headers"
          :key="headerIndex"
          :width="header.width"
          :paddingRight="2"
          justifyContent="flex-start"
        >
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
import { Header, NpmPackage } from "@/types";
import { Path } from "@/types/path";
import { get } from "@/utils/index";

const MAX_SHOW_PACKAGE = 10;
const index = ref(0);
const offset = ref(0);
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
</script>
