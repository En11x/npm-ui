import { DepInfo } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useDepsStore = defineStore("deps", () => {
  const deps = ref<DepInfo[]>([]);
  const devDeps = ref<DepInfo[]>([]);

  const add = (dep: DepInfo, isDev = false) => {
    isDev
      ? (devDeps.value = [...devDeps.value, dep])
      : (deps.value = [...deps.value, dep]);
  };

  const remove = (name: string, isDev = false) => {
    isDev
      ? (devDeps.value = devDeps.value.filter((it) => it.name !== name))
      : (deps.value = deps.value.filter((it) => it.name !== name));
  };

  const has = (name: string, isDev = false) =>
    isDev
      ? devDeps.value.some((it) => it.name === name)
      : deps.value.some((it) => it.name === name);

  const reset = () => {
    deps.value = [];
    devDeps.value = [];
  };

  const normalize = (isDev = false) => {
    return (isDev ? devDeps.value : deps.value).map(
      (dep) => `${dep.name}@${dep.version}`
    );
  };

  return { deps, devDeps, add, remove, has, reset, normalize };
});
