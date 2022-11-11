import { searchPackages } from "@/services";
import { Package } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useSearchStore = defineStore("search", () => {
  const keyword = ref("");
  const packages = ref<Package[]>([
    {
      date: "",
      description: "",
      keywords: [""],
      name: "",
      scope: "",
      version: "",
    },
  ]);

  async function search(k: string, p = 0) {
    await searchPackages(k, p);
  }

  watch(keyword, () => {
    search(keyword.value);
  });

  return { keyword, packages };
});
