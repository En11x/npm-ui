<template>
  <Box width="100" flexDirection="column" borderStyle="single">
    <template v-if="packages.length">
      <Text> Packages </Text>
    </template>
    <Guide v-else />
  </Box>
</template>

<script lang="ts" setup>
import { useSearchStore } from "@/store";

const searchStore = useSearchStore();
const keyword = computed(() => searchStore.keyword);
const packages = computed(() => searchStore.packages);

</script>
