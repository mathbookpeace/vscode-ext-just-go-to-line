
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	
	let disposable = vscode.commands.registerCommand('justgotoline.gotoline', () => {
		vscode.window.showInputBox().then(line => {
			if (!line) return;
			let editor = vscode.window.activeTextEditor;
			if (!editor) return;
			
			let range = editor.document.lineAt(Number(line) - 1).range;
			editor.selection = new vscode.Selection(range.start, range.end);
			editor.revealRange(range);
		});
	});
	
	context.subscriptions.push(disposable);
}

export function deactivate() {}
