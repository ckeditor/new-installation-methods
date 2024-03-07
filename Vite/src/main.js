/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import {
	ClassicEditor,
	Essentials,
	Heading,
	Bold,
	Paragraph
} from 'ckeditor5';

import 'ckeditor5/dist/index.bundled.css';

ClassicEditor.create( document.querySelector('#editor'), {
	plugins: [
		Essentials,
		Paragraph,
		Bold,
		Heading
	],
	toolbar: {
			items: [
				'undo', 'redo',
				'|', 'bold', 'heading'
			]
		},
		language: 'en'
} );
