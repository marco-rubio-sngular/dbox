import { AxiosResponse } from "axios";
import { ModuleCreateType } from "../types/ModuleCreateType.ts";
import { ModuleType } from "../types/ModuleType.ts";
import { instance } from "./base.api.ts";

export const modules = {
  moduleCreate: async function (
    request: ModuleCreateType
  ): Promise<AxiosResponse | void> {
    const payload = {
      title: await this.encode(request.title),
      description: await this.encode(request.description),
    };

    try {
      const response = await instance.post("/iac/modules", payload);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  getAll: async function (): Promise<ModuleType[]> {
    const collection = await instance.get("/iac/modules", {
      params: {},
    });
    const result = collection.data === undefined ? [] : collection.data;
    return result.list.map((item: ModuleType) => {
      item.createdAt = new Date(item.createdAt);
      return item;
    });
  },

  getById: async function ({ id }: { id: string }) {
    const result = await instance.get(`/iac/modules/${id}`);

    return result.data;
  },

  getFileContentById: async function (
    moduleId: string,
    fileId: string
  ): Promise<string> {
    const result = await instance.get(
      `/iac/modules/${moduleId}/files/${fileId}`
    );
    return result.data;
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
