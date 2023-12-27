import { TagType } from "../types/TagType.ts";
import { instance } from "./base.api.ts";

export const tags = {
  getAll: async function (): Promise<TagType[]> {
    const collection = await instance.get("/tags", {
      params: {},
    });
    const result = collection.data === undefined ? [] : collection.data;
    return result.list.map((item: TagType) => {
      item.createdAt = new Date(item.createdAt);
      return item;
    });
  },

  encode: async function (text: string) {
    return btoa(
      encodeURIComponent(text).replace(/%([0-9A-F]{2})/g, (_match, p1) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return String.fromCharCode(("0x" + p1) as any);
      })
    );
  },
};
