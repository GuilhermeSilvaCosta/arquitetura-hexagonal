import { terminal } from 'terminal-kit';

export default class TerminalUtil {
  static title(text: string) {
    terminal.clear();
    terminal.magenta(`${text}\n`);
    terminal.magenta(`-`.repeat(text.length) + '\n');
  }

  static clear() {
    terminal.clear();
  }

  static async requireField(
    label: string,
    defaultValue: string = '',
  ): Promise<string> {
    terminal.yellow(`\n${label}`);
    const value = await terminal.inputField({ default: defaultValue }).promise;
    if (value) return value;
    return this.requireField(label, defaultValue);
  }

  static async menu(options: string[]): Promise<[number, string]> {
    const response = await terminal.singleColumnMenu(options).promise;
    return [response.selectedIndex, response.selectedText];
  }

  static print(key: string, value: string) {
    terminal.yellow(key).green(value).white('\n');
  }

  static async select(
    text: string,
    options: string[],
  ): Promise<[number, string]> {
    terminal.yellow(`\n${text}`);
    const response = await terminal.singleLineMenu(options).promise;

    return [response.selectedIndex, response.selectedText];
  }

  static async confirmation(text: string): Promise<boolean> {
    terminal.yellow(`\n${text}`);
    const response = await terminal.singleLineMenu(['Sim', 'Não']).promise;
    return response.selectedIndex === 0;
  }

  static awaitPressEnter() {
    terminal.white('\nPressione ENTER para coninuar...');
    return terminal.inputField({ echo: false }).promise;
  }

  static async success(text: string) {
    terminal.green(`\n${text}`);
  }
}
