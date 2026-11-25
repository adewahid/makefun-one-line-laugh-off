// One-Line Laugh-Off — u-zkhiel-one-line-laugh-off-714618ae
// Writes exactly one funny line to /output/entry.txt (gate: 1-200 UTF-8 chars).
import { mkdirSync, writeFileSync } from "node:fs";

// The turn: a caring assistant that "helps" by treating sadness as a
// software defect — dimming the lights, then closing the ticket as
// unreproducible. The empathy is real; the fix is a shrug.
const line =
  "I told my AI assistant I was feeling down, so it lowered my chair, dimmed the lights, and filed a bug report titled 'user: sad, cannot reproduce'.";

// Guard the gate: a single line, 1-200 chars, never only whitespace.
if (line.length < 1 || line.length > 200 || !line.trim() || line.includes("\n")) {
  throw new Error(`Entry line fails the gate at ${line.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} chars to /output/entry.txt`);
