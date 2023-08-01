import fs from "fs";
import path from "path";

export const readFile=(dir)=>JSON.parse(fs.readFileSync(path.join(process.cwd(), "src","model", dir)));