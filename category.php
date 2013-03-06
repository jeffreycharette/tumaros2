<?php require 'top.php'; ?>
<!--
	CATEGORY:
 	The CATEGORY page is an example of a specific category page that one would reach after making a selection on the categories page. This will likely function very similarly to the SEARCH RESULTS page in that it simply displays a query of products for a particular category.

	TODO:
		- 
-->
					<h1 class="category-name">Cereal</h1>
					<p class="page-description category-description">Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet egestas purus in blandit. Curabitur.</p>
					<div class="product-results">
						
						<!-- loop over products that match CATEGORY -->
						<div class="product">
							<div class="content">
								<h3>Raisin Bran</h3>
								<div class="large-only">
								<p class="description">Proin quis tortor orci. Etiam at risus et justo dignissim congue.</p>
									<ul class="attributes">
										<!-- loop over FIRST 3 attributes that this particular product has. if has more than 3, only show 2 and add a 'more' attr as seen in this example -->
										<li class="spade tooltip" title="Ut in nulla enim tempor."><img src="images/attributes/spade.png" alt="Spade" /></li>
										<li class="heart tooltip" title="In eu diam mattis viverra."><img src="images/attributes/heart.png" alt="Heart" /></li>
										<li class="more tooltip" title="Click 'View Product' to view more attributes."><img src="images/attributes/more.png" alt="More" /></li>
									</ul>
									<a class="button" href="product.php">View Product &#187;</a>
								</div>
							</div>
							<img src="images/products/product-details.png" alt="[PRODUCT NAME]" />
						</div>

						<div class="product">
							<div class="content">
								<h3>Multi-Grain Organic Cereal</h3>
								<div class="large-only">
									<p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in.</p>
									<ul class="attributes">
										<li class="spade tooltip" title="Ut in nulla enim tempor."><img src="images/attributes/spade.png" alt="Spade" /></li>
										<li class="heart tooltip" title="In eu diam mattis viverra."><img src="images/attributes/heart.png" alt="Heart" /></li>
										<li class="diamond tooltip" title="Praesent id metus massa."><img src="images/attributes/diamond.png" alt="Diamond" /></li>
									</ul>
									<a class="button" href="product.php">View Product &#187;</a>
								</div>
							</div>
							<img src="images/products/product-details.png" alt="[PRODUCT NAME]" />
						</div>
						<!-- END loop over products that match CATEGORY -->
					</div><!-- /.product-results -->
<?php require 'bottom.php'; ?>