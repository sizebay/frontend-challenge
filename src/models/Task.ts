import crypto from "crypto";

export class Task {
  id: string;
  title: string;
  done: boolean;

  constructor(title: string) {
    this.id = crypto.randomBytes(20).toString("hex");
    this.title = title;
    this.done = false;
  }

  finish() {
    this.done = true;
  }

  undo() {
    this.done = false;
  }

  update(newTitle: string) {
    this.title = newTitle;
  }
}
