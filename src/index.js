import ReactDOM from 'react-dom';
import { registerBlockType } from '@wordpress/blocks';
import domReady from '@wordpress/dom-ready';

import { ParseTree, Tokenizer } from '@timmartin2/python-code-analyzer';
import '@timmartin2/python-code-analyzer/lib/main.css';

registerBlockType( 'wp-python-analyzer/tokenizer', {
	title: 'Python interactive tokenizer',
	icon: 'media-code',
	category: 'embed',
	attributes: {
		source: {
			type: 'string',
			source: 'text',
			selector: 'div.wp-python-analyzer-tokenizer',
		},
	},
	edit: ( { attributes, setAttributes } ) => (
		<textarea
			value={ attributes.source }
			onChange={ ( e ) => {
				setAttributes( { source: e.target.value } );
			} }
		/>
	),
	save: ( { attributes } ) => (
		<div className="wp-python-analyzer-tokenizer">
			{ attributes.source }
		</div>
	),
} );

registerBlockType( 'wp-python-analyzer/parse-tree', {
	title: 'Python parse tree',
	icon: 'media-code',
	category: 'embed',
	attributes: {
		source: {
			type: 'string',
			source: 'text',
			selector: 'div.wp-python-analyzer-parse-tree',
		},
	},
	edit: ( { attributes, setAttributes } ) => (
		<textarea
			value={ attributes.source }
			onChange={ ( e ) => {
				setAttributes( { source: e.target.value } );
			} }
		/>
	),
	save: ( { attributes } ) => (
		<div className="wp-python-analyzer-parse-tree">
			{ attributes.source }
		</div>
	),
} );

domReady( () => {
	const tokenizerInstances = document.getElementsByClassName(
		'wp-python-analyzer-tokenizer'
	);
	for ( const tokenizer of tokenizerInstances ) {
		ReactDOM.render(
			<Tokenizer initialCode={ tokenizer.textContent } />,
			tokenizer
		);
	}

	const parseTreeInstances = document.getElementsByClassName(
		'wp-python-analyzer-parse-tree'
	);
	for ( const parseTree of parseTreeInstances ) {
		ReactDOM.render(
			<ParseTree code={ parseTree.textContent } />,
			parseTree
		)
	}
} );
