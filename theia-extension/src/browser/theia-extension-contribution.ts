import { injectable, inject } from '@theia/core/shared/inversify';
import { Command, CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from '@theia/core/lib/common';
import { CommonMenus } from '@theia/core/lib/browser';

export const TheiaExtensionCommand: Command = {
    id: 'TheiaExtension.command',
    label: 'Say Hello'
};

@injectable()
export class TheiaExtensionCommandContribution implements CommandContribution {

    constructor(
        @inject(MessageService) private readonly messageService: MessageService,
    ) { }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(TheiaExtensionCommand, {
            execute: () => this.messageService.info('Hello World123123!')
        });
    }
}

@injectable()
export class TheiaExtensionMenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: TheiaExtensionCommand.id,
            label: TheiaExtensionCommand.label
        });
    }
}
