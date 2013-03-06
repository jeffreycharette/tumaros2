<?php require 'top.php'; ?>
<!--
	TODO:
		- update alt tags with text from each slide for accessibility
		- update href links with links to appropriate content based on slide
-->
					<h1>Contact Us</h1>
					<table class="table2">
						<tbody>
							<tr>
								<td>I&rsquo;m a</td>
								<td>
									<select name="persona" id="persona" style="width:150px;">
										<option value="consumer">Consumer</option>
									</select>
								</td>
							</tr>
							<tr>
								<td>Regarding</td>
								<td>
									<select name="persona" id="persona" style="width:150px;">
										<option selected="selected" value=" Select One "> Select One </option>
									</select>
								</td>
							</tr>
							<tr>
								<td>First Name <span class="required">*</span></td>
								<td>
									<input name="first" type="text" id="first">
								</td>
							</tr>
							<tr>
								<td>Last Name <span class="required">*</span></td>
								<td>
									<input name="last" type="text" id="last">
								</td>
							</tr>
							<tr>
								<td>Message <span class="required">*</span></td>
								<td>
									<textarea id="message" name="message" rows="6" cols="20"></textarea>
								</td>
							</tr>
							<tr>
								<td></td>
								<td>
									<button type="submit" class="button"><span>Submit</span></button>
								</td>
							</tr> 
						</tbody>
					</table>
<?php require 'bottom.php'; ?>