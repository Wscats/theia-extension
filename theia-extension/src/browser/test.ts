// 测试前端插件
import { ContainerModule, injectable } from "@theia/core/shared/inversify";

export interface IconTheme<T> {
  canHandle(): number;
  getIcon(): string;
}

@injectable()
export class NoneIconTheme implements IconTheme<string> {
  readonly id = "none";
  readonly label = "None";
  readonly description = "Disable file icons";
  readonly hasFileIcons = true;
  readonly hasFolderIcons = true;

  canHandle(): number {
    return Number.MAX_SAFE_INTEGER;
  }

  getIcon(): string {
    return "";
  }
}
export default new ContainerModule((bind, unbind, isBound, rebind) => {
  bind("NoneIconTheme").to(NoneIconTheme);
});
