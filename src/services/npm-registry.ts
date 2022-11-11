import { NpmPackage } from "@/types";
import { $fetch } from "ohmyfetch";

let controller: AbortController | null;

export const searchPackages = async (query: string, page = 10) => {
  controller?.abort();
  controller = new AbortController();
  const signal = controller.signal;

  const results = await $fetch(
    `http://registry.npmjs.com/-/v1/search?text=${query}&from=${page}`,
    { signal }
  ).catch((e) => {});

  return { results: results.objects as NpmPackage[] };
};
