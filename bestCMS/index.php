<?php get_header(); ?>

	<?php
		if( have_posts() ):
			while( have_posts() ):
				the_post(); 
	?>
		
		<h4><?php the_title(); ?> </h4>
		
		<article>
			<?php the_content(); ?> 
		</article>
		
	<?php
			endwhile;
		endif;
	?>


<?php get_footer(); ?>