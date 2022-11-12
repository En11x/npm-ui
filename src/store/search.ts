import { searchPackages } from "@/services";
import { Package } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useSearchStore = defineStore("search", () => {
  const keyword = ref("");
  const packages = ref<Package[]>([]);
  const page = ref(0);

  async function search(k: string, p = 0) {
    page.value = p;
    if (k === "") {
      packages.value = [];
      return;
    }
    const { results, query } = await searchPackages(k, p);
    const npmPackages = results.map((item) => item.package);

    if (query === keyword.value) {
      packages.value =
        page.value === 0 ? npmPackages : [...packages.value, ...npmPackages];
    }
  }

  watch(keyword, () => {
    search(keyword.value);
  });

  return { keyword, packages, page, search };
});
