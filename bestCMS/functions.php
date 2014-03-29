<?php
	
	$sidebar_args = Array(
		'id' => 'left-sidebar',
		'name' => 'Main Sidebar',
	);
	register_sidebar($sidebar_args);
	
	add_theme_support( 'post-thumbnails' ); 