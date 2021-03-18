
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	
	let disposable = vscode.commands.registerCommand('justgotoline.gotoline', () => {
		vscode.window.showInputBox().then(line => {
			if (!line) { return; }
			let editor = vscode.window.activeTextEditor;
			if (!editor) { return; }
			
			let number = Math.max(0, Math.min(Number(line) - 1, editor.document.lineCount-1));
			let range = editor.document.lineAt(number).range;
			editor.selection = new vscode.Selection(range.end, range.end);
			editor.revealRange(range);
		});
	});
	
	context.subscriptions.push(disposable);
}

export function deactivate() {}
