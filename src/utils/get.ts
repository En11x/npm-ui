import { Path } from "@/types/path";

export const get = <T>(object: T, path: Path<T>) => {
  const paths = path.split(".");
  let index = 0;
  const length = paths.length;
  while (object && index < length) {
    object = object[paths[index++]];
  }

  return index && index === length ? object : undefined;
};
