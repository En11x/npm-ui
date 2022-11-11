import { PackageInfo } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useSearchStore = defineStore("search", () => {
  const keyword = ref("");
  const packages = ref<PackageInfo[]>([
    {
      date: "",
      description: "",
      keywords: [""],
      name: "",
      scope: "",
      version: "",
    },
  ]);

  return { keyword, packages };
});
