import { createClient } from "newt-client-js";
import fetchAdapter from "@vespaiach/axios-fetch-adapter";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const newtClient = createClient({
    spaceUid: config.newt.spaceUid,
    token: config.newt.cdnApiToken,
    apiType: "cdn",
    adapter: fetchAdapter,
  });
  const newtPreviewClient = createClient({
    spaceUid: config.newt.spaceUid,
    token: config.newt.apiToken,
    apiType: "api",
    adapter: fetchAdapter,
  });
  return {
    provide: {
      newtClient,
      newtPreviewClient,
    },
  };
});
