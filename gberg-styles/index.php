<?php
/**
 * Plugin Name: Gberg Block Styles
 */  

/**
 * Enqueue admin only JavaScript
 */
function gberg_block_styles_enqueue_javascript() {
    wp_enqueue_script( 'gberg-block-styles-script',
        plugins_url( 'block.js', __FILE__ ),
        array( 'wp-blocks')
	);
	wp_enqueue_style( 'gberg-block-editor-stylesheet',
        plugins_url( 'editor.css', __FILE__ ) 
    );
} 
add_action( 'enqueue_block_editor_assets', 'gberg_block_styles_enqueue_javascript' ); 

/**
 * Enqueue front end and editor Stylesheet
 */
function gberg_block_styles_enqueue_stylesheet() {
    wp_enqueue_style( 'gberg-block-styles-stylesheet',
        plugins_url( 'style.css', __FILE__ ) 
    );
}
add_action( 'enqueue_block_assets', 'gberg_block_styles_enqueue_stylesheet' );  



  