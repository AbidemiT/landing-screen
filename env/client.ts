import { createEnv } from "@t3-oss/env-nuxt";
import { z } from "zod";
 
export const env = createEnv({
  client: {
    NUXT_PUBLIC_UNSPLASH_ACCESS_KEY: z.string().min(1),
  },
});