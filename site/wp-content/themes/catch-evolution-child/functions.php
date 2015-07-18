<?php
/**
 * Template Name: Map Template
 * Description: A Page Template for google map
 *
 * @package Catch Themes Child
 * @subpackage Catch_Evolution_Pro
 * @since Catch Evolution 1.0
 */

function catchevolutionchild_addScripts() {


	
	$path = get_template_directory_uri() . '-child/js/main.js';
	wp_enqueue_script(
		'catchevolutionchild_main',
		$path,
		array( 'jquery' )
	);

    

}

add_action('wp_enqueue_scripts', 'catchevolutionchild_addScripts')

?>