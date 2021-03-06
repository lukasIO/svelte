/* generated by Svelte vX.Y.Z */
import {
	SvelteComponent as SvelteComponent_1,
	attr,
	detach,
	element,
	init,
	insert,
	listen,
	noop,
	safe_not_equal
} from "svelte/internal";

function create_fragment(ctx) {
	var input, dispose;

	return {
		c() {
			input = element("input");
			attr(input, "type", "file");
			input.multiple = true;
			dispose = listen(input, "input", ctx.input_input_handler);
		},

		m(target, anchor) {
			insert(target, input, anchor);
		},

		p: noop,
		i: noop,
		o: noop,

		d(detaching) {
			if (detaching) {
				detach(input);
			}

			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { files } = $$props;

	function input_input_handler() {
		files = this.files;
		$$invalidate('files', files);
	}

	$$self.$set = $$props => {
		if ('files' in $$props) $$invalidate('files', files = $$props.files);
	};

	return { files, input_input_handler };
}

class SvelteComponent extends SvelteComponent_1 {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, ["files"]);
	}
}

export default SvelteComponent;