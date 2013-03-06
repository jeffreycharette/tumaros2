<?php require 'top.php'; ?>
<!--
	CATEGORIES:
 	The CATEGORIES page displays a query of every category in the same grid square format that the products are displayed in. Each CATEGORY link will send the user to that CATEGORY page.

	TODO:
		- 
-->
					<h1>Categories</h1>
					<p class="page-description">Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>

					<div class="category-results">

						<!-- loop over categories -->
						<div class="category">
							<a href="category.php"><img src="images/categories/low-in-carbs.png" alt="Low in Carbs" width="625" height="145" /></a>
						</div>

						<div class="category">
							<a href="category.php"><img src="images/categories/new-york-deli.png" alt="New York Deli" width="625" height="145" /></a>
						</div>
						<div class="category">
							<a href="category.php"><img src="images/categories/mexican-style.png" alt="Mexican Style" width="625" height="145" /></a>
						</div>
						<!-- end loop over categories -->
					</div><!-- /.category-results -->
<?php require 'bottom.php'; ?>