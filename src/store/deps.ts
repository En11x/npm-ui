import { DepInfo } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useDepsStore = defineStore("deps", () => {
  const deps = ref<DepInfo[]>([]);
  const devDeps = ref<DepInfo[]>([]);

  return { deps, devDeps };
});
