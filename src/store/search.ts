import { searchPackages } from "@/services";
import { Package } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useSearchStore = defineStore("search", () => {
  const keyword = ref("");
  const packages = ref<Package[]>([
    {
      name: "ab",
      date: "a",
      description: "aa",
      keywords: ["aa"],
      scope: "",
      version: "1.0.1",
      author: {
        name: "pjx",
        url: "url",
      },
      links: {
        repository: "repository-url",
      },
    },
  ]);

  async function search(k: string, p = 0) {
    const { results } = await searchPackages(k, p);
    packages.value = results.map((it) => it.package);
  }

  watch(keyword, () => {
    search(keyword.value);
  });

  return { keyword, packages };
});
