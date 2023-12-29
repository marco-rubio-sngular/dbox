import { FaqType } from "../types/FaqType.ts";
import { instance } from "./base.api.ts";

export const faqs = {
  getAll: async function (): Promise<FaqType[]> {
    const collection = await instance.get("/faqs", {
      params: {},
    });
    const result = collection.data === undefined ? [] : collection.data;
    return result.list.map((item: FaqType) => {
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
