import { registerBlockType } from '@wordpress/blocks';
import domReady from '@wordpress/dom-ready';

import {Tokenizer} from "@timmartin2/python-code-analyzer";

registerBlockType('wp-python-analyzer/tokenizer', {
  title: 'Python interactive tokenizer',
  icon: 'media-code',
  category: 'embed',
  attributes: {
    source: {
      type: 'string',
      source: 'text',
      selector: 'div.wp-python-analyzer-tokenizer'
    }
  },
  edit: ({attributes, setAttributes}) => (
    <textarea value={attributes.source} onChange={(e) => { setAttributes({source: e.target.value}); }} />
  ),
  save: ({attributes}) => <div className="wp-python-analyzer-tokenizer">{attributes.source}</div>,
});

domReady(() => {
	const tokenizerInstances = document.getElementsByClassName('wp-python-analyzer-tokenizer');
	for (const tokenizer of tokenizerInstances) {
		ReactDOM.render(
      <Tokenizer initialCode={tokenizer.textContent} />,
      tokenizer
    );
	}
});
