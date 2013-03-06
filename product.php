<?php require 'top.php'; ?>
					<div class="tools">
						<!-- print button hidden in case javascript is unable to load, which makes print functionality work -->
						<span class="print-page chicklet-print hidden">Print Page</span>
						<span class="st_twitter_large"></span>
						<span class="st_facebook_large"></span>
						<span class="st_email_large"></span>
					</div>
					<h1 class="product-name">Whole Grain Raisin Bran Organic Cereal</h1>
					<div class="product-image grid_3 alpha">
						<img src="images/products/product-details.png" alt="Tumaros" />
						<div class="fb-like" data-href="http://demo.wearecharette.com" data-send="false" data-width="220" data-show-faces="true"></div>
					</div>
					<div class="product-details grid_5 omega">
						<h2>Organic Cereal</h2>
						<p>Sed molestie augue sit amet leo consequat posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin vel ante a orci.</p>

<?php if ( isset($_REQUEST['available-online']) && $_REQUEST['available-online'] == 0 ) { # ignore this line. PHP setup so you can view available offline usage product.php?available-online=0 ?>
						<!-- not available online, show find a store link -->
						<div class="purchase not-available">
							<p>Not available online. <a href="locator.php">Find a retailer.</a></p>
						</div>
<?php } else { # ignore this line. end of PHP statement to demonstrate not available view product.php?available-online=1 ?>
						<!-- if available online, show price and add to cart button -->
						<div class="purchase available">
							<p class="price">$5.95</p>
							<p class="add-to-cart"><a href="#add-to-cart">Add to Cart</a></p>
						</div>
<?php } #ignore this line. end of PHP statement to show add to cart view ?>
						<ul class="attributes">
							<li class="spade tooltip" title="In condimentum facilisis porta. Sed nec diam eu diam mattis viverra."><img src="images/attributes/spade.png" alt="Attribute B" /></li>
							<li class="club tooltip" title="In condimentum facilisis porta. Sed nec diam eu diam mattis viverra."><img src="images/attributes/club.png" alt="Attribute B" /></li>
							<li class="heart tooltip" title="In condimentum facilisis porta. Sed nec diam eu diam mattis viverra."><img src="images/attributes/heart.png" alt="Attribute B" /></li>
							<li class="diamond tooltip" title="In condimentum facilisis porta. Sed nec diam eu diam mattis viverra."><img src="images/attributes/diamond.png" alt="Attribute B" /></li>
							<li class="spade tooltip" title="In condimentum facilisis porta. Sed nec diam eu diam mattis viverra."><img src="images/attributes/spade.png" alt="Attribute B" /></li>
							<li class="club tooltip" title="In condimentum facilisis porta. Sed nec diam eu diam mattis viverra."><img src="images/attributes/club.png" alt="Attribute B" /></li>
							<li class="heart tooltip" title="In condimentum facilisis porta. Sed nec diam eu diam mattis viverra."><img src="images/attributes/heart.png" alt="Attribute B" /></li>
							<li class="diamond tooltip" title="In condimentum facilisis porta. Sed nec diam eu diam mattis viverra."><img src="images/attributes/diamond.png" alt="Attribute B" /></li>
							<li class="more hidden" title="See all attributes."><img src="images/attributes/more.png" alt="See all Attributes" /></li>
						<div style="clear: both"></div>
						</ul>
						<p class="more-info"><a href="#show">Nutrition Facts, Ingredients and More</a></p>

						<div class="ingredients hidden">
							<div class="grid_2 alpha">
								<div class="nutrition-facts nutrition-facts-coconut-water">
									<table>
										<tbody>
											<tr class="no-border">
												<th colspan="2">Nutritional Facts</th>
											</tr>
											<tr class="super-thick-border">
												<td colspan="2">Serving Size <span>1 piece (30g)</span><br />
													Serving Per Container <span>6</span></td>
											</tr>
											<tr>
												<td colspan="2"><b>Amount Per Serving</b></td>
											</tr>
											<tr class="thick-border">
												<td><b>Calories</b> <span>140</span></td>
												<td>Fat Cal. <span>70</span></td>
											</tr>
											<tr>
												<td colspan="2" class="daily-value"><b>% Daily Value</b></td>
											</tr>
											<tr>
												<td><b>Total Fat</b> <span>7</span>g</td>
												<td><span>11%</span></td>
											</tr>
											<tr>
												<td class="sub">Sat. Fat <span>1</span>g</td>
												<td><span>5%</span></td>
											</tr>
											<tr>
												<td class="sub" colspan="2"><em>Trans</em> Fat <span>0</span>g</td>
											</tr>
											<tr>
												<td><b>Cholesterol</b> <span>0</span>mg</td>
												<td><span>0%</span></td>
											</tr>
											<tr>
												<td><b>Sodium</b> <span>35</span>mg</td>
												<td><span>1%</span></td>
											</tr>
											<tr>
												<td><b>Total Carb.</b> <span>17</span>g</td>
												<td><span>6%</span></td>
											</tr>
											<tr>
												<td class="sub">Dietary Fiber <span>0</span>g</td>
												<td><span>0%</span></td>
											</tr>
											<tr>
												<td class="sub" colspan="2">Sugars <span>4</span>g</td>
											</tr>
											<tr class="thick-border">
												<td colspan="2"><b>Protein</b> <span>2</span>g</td>
											</tr>
											<tr>
												<td colspan="2" class="vitamins">
													Vitamin A <span>0%</span>
													Vitamin C <span>0%</span>
													Calcium <span>0%</span> 
													Iron <span class="last">2%</span>
												</td>
											</tr>
											<tr class="no-border">
												<td colspan="2">Not a significant source of Cholesterol and Dietary Fiber.</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<div class="grid_3 omega">
								<h4>Ingredients</h4>
								<p>Unbleached wheat flour, extra virgin olive oil, sugar, crystallized orange from Seville, yeast, sesame seeds, sea salt, natural orange essence.</p>
								<h4>Contains</h4><!-- Allergens -->
								<ul class="allergens">
									<li class="tooltip" title="Contains Almonds"><img src="images/allergens/Almonds.gif" alt="Almonds" /></li>
									<li class="tooltip" title="Contains Eggs"><img src="images/allergens/Eggs.gif" alt="Eggs" /></li>
									<li class="tooltip" title="Contains Fish"><img src="images/allergens/Fish.gif" alt="Fish" /></li>
									<li class="tooltip" title="Contains Milk"><img src="images/allergens/Milk.gif" alt="Milk" /></li>
									<li class="tooltip" title="Contains Peanuts"><img src="images/allergens/Peanuts.gif" alt="Peanuts" /></li>
									<li class="tooltip" title="Contains Shellfish"><img src="images/allergens/Shellfish.gif" alt="Shellfish" /></li>
									<li class="tooltip" title="Contains Soy"><img src="images/allergens/Soy.gif" alt="Soy" /></li>
									<li class="tooltip" title="Contains Tree Nuts"><img src="images/allergens/TreeNuts.gif" alt="Tree Nuts" /></li>
									<li class="tooltip" title="Contains Wheat"><img src="images/allergens/Wheat.gif" alt="Wheat" /></li>
								</ul>
							</div>
						</div><!-- end ingredients -->
					</div>
<?php require 'bottom.php'; ?>