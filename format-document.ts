import { editor, shell, system } from "@silverbulletmd/silverbullet/syscalls";

export async function formatDocument() {
  const pageName = await editor.getCurrentPage();
  await editor.flashNotification("Formatting... Wait for page to reload");
  //
  const { code } = await shell.run("prettier", ["-w", pageName + ".md"]);
  console.log("format document result ", code);
  try {
  } catch {
    // We can ignore, this happens when there's no changes to commit
  }
  console.log("Done!");
}
