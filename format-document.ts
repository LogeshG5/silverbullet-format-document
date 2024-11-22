import { editor } from "@silverbulletmd/silverbullet/syscalls";

export async function formatDocument() {
  await editor.flashNotification("Hello world!");
}
