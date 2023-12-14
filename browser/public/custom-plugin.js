import { Command, ButtonView } from 'ckeditor5';

export function Highlight( editor ) {
	editor.model.schema.extend( '$text', {
		allowAttributes: 'highlight'
	} );

	editor.conversion.attributeToElement( {
    model: 'highlight',
    view: 'mark'
	} );

	editor.commands.add( 'highlight', new HighlightCommand( editor ) );

	editor.ui.componentFactory.add( 'highlight', ( locale ) => {
    const button = new ButtonView( locale );
    const command = editor.commands.get( 'highlight' );
    const t = editor.t;

		button.set( {
			label: t( 'Highlight' ),
			withText: true,
			tooltip: true,
			isToggleable: true,
			keystroke: 'Ctrl+Alt+H'
		} );

    button.on( 'execute', () => {
			editor.execute( 'highlight' );
			editor.editing.view.focus();
    } );

    button.bind( 'isOn', 'isEnabled' ).to( command, 'value', 'isEnabled' );

    return button;
	} );

	editor.keystrokes.set( 'Ctrl+Alt+H', 'highlight' );
}

class HighlightCommand extends Command {
	refresh() {
		const { document, schema } = this.editor.model;

		// Check if selection is already highlighted.
		this.value = document.selection.getAttribute( 'highlight' );

		// Check if command is allowed on current selection.
		this.isEnabled = schema.checkAttributeInSelection( document.selection, 'highlight' );
	}

	execute() {
    const model = this.editor.model;
    const selection = model.document.selection;
    const newValue = !this.value;

    model.change( ( writer ) => {
			if ( !selection.isCollapsed ) {
				const ranges = model.schema.getValidRanges( selection.getRanges(), 'highlight' );

				for ( const range of ranges ) {
					if ( newValue ) {
						writer.setAttribute( 'highlight', newValue, range );
					} else {
						writer.removeAttribute( 'highlight', range );
					}
				}
			}

			if ( newValue ) {
				return writer.setSelectionAttribute( 'highlight', true );
			}

			return writer.removeSelectionAttribute( 'highlight' );
    } );
	}
}
