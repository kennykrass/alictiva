export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH
  ? `/${String(process.env.NEXT_PUBLIC_BASE_PATH).replace(/^\/+|\/+$/g, "")}`
  : "";

