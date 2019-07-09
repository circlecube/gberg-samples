
( function( blocks, element ) {
    var el = element.createElement;
 
    blocks.registerBlockType( 'gutenberg-examples/example-02-stylesheets', {
        title: 'Example: Stylesheets',
        icon: 'universal-access-alt',
        category: 'layout',
        edit: function( props ) {
            return el(
                'p',
                { className: props.className },
                'Green Editor Text'
            );
        },
        save: function() {
            return el(
                'p',
                {},
                'Red Front End Text'
            );
		},
	} );
	
	blocks.registerBlockStyle( 'gutenberg-examples/example-02-stylesheets', {
		name: 'alt-1',
		label: 'Alt 1',
	} );
	blocks.registerBlockStyle( 'gutenberg-examples/example-02-stylesheets', {
		name: 'alt-2',
		label: 'Alt 2',
	} );
	blocks.registerBlockStyle( 'gutenberg-examples/example-02-stylesheets', {
		name: 'alt-3',
		label: 'Alt 3',
	} );

}(
    window.wp.blocks,
    window.wp.element
) );
