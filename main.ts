// The Vacuum's Alibi — one-line excuse, max 200 characters.
// Writes the entry to /output/entry.txt (the grader mounts /output root-owned,
// so we only create the directory, never remove it).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I skipped that corner deliberately: the dust there predates my firmware, pays no rent, and has more tenure in this house than I do.";

// Gate guard: the sealed scorer only accepts 1–200 characters, not only whitespace.
if ([...LINE].length < 1 || [...LINE].length > 200 || !/\S/.test(LINE)) {
  throw new Error("entry line fails the 1–200 character gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
