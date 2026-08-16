import { statSync } from "fs";
import { join } from "path";

export function versioned(path: string): string {
  try {
    const { mtimeMs } = statSync(join(process.cwd(), "public", path));
    return `${path}?v=${Math.round(mtimeMs)}`;
  } catch {
    return path;
  }
}
