<script lang="ts" setup>
import { useSearchStore } from "@/store";
import { Input } from './index';
const { keyword } = useSearchStore()
</script>

<template>
  <Box width="100" :paddingX="4">
    <Box width="100" borderStyle="single" borderColor="gray">
      <Input v-model="keyword" placeholder="🔍 Search packages" />
    </Box>
  </Box>
</template>
