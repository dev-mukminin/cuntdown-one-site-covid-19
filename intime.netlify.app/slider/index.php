<!DOCTYPE html>
<html lang="en-US" class="no-js">

<!-- Scripts -->
<script type="text/javascript" src="js/jquery-1.12.4.min.js"></script>
<script type="text/javascript" src="js/plugins.js"></script>
<script type="text/javascript" src="js/scripts.js"></script>

<head>
	<!-- Document Settings -->
	<meta charset="UTF-8" />
	<!-- Page Meta -->
	<title>HALELUYA</title>
	<meta name="description" content="dev.mukminin" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<!-- Styles -->
	<link href="http://fonts.googleapis.com/css?family=Open+Sans:400,400italic,700,700italic%7CRoboto+Slab:400,700"
		rel="stylesheet" type="text/css" />
	<link rel="stylesheet" type="text/css" media="all" href="css/style.css" />

	<!-- Scripts -->
	<script>(function (html) { html.className = html.className.replace(/\bno-js\b/, 'js') })(document.documentElement);</script>
</head>

<body>
	<div class="wrap">
		<main id="main" class="site-main">

			<!-- Front -->
			<div id="front" class="site-front">
				<div class="inner">

					<!-- Header -->
					<header class="site-header">
						<p class="site-logo fade-in"><img src="images/002.png" width="150" height="60"
								alt="InTime Logo" /></p>
						<h1 class="site-title screen-reader-text">Dev</h1>
					</header>

					<section class="content">
						<h2 class="section-title">Selamat Datang Mooda Moody 
						<!-- <?php echo $_SESSION['username']?>	 -->
						</h2>

						<!-- Countdown timer -->
						<div class="countdown-timer">
							<p class="subtitle">smart system checking temprature rfid</p>
							<!-- <div id="timer"> </div> -->
							<div> 
								<input type="text" class="entot" value="iki isine data">
								<input type="text" class="entot" value="iki isine data">
								<input type="text" class="entot" value="iki isine data">
							</div>
						</div>

						<!-- Newsletter Subscriptions -->
						<div class="newsletter">
							<p class="subtitle">Have a nice day</p>
							<div id="newsletter-form-wrap" class="newsletter-form-wrap">
								<form action="https://intime.netlify.app/slider/subscribe.php" method="post"
									id="newsletter-form">
									<p class="form-field">
										<label for="newsletter-email" class="screen-reader-text">Please enter your
											email</label>
										<input type="text" name="newsletter_email" id="newsletter-email" value=""
											placeholder="Your email" />
									</p>
									<p class="screen-reader-text">
										<label for="newsletter_extra">Please leave this field blank</label>
										<input type="text" name="newsletter_extra" id="newsletter_extra" value=""
											tabindex="-1" autocomplete="off" />
									</p>
									<p class="form-submit">
										<input type="submit" name="newsletter_submit" id="newsletter-submit"
											value="Subscribe" />
									</p>
								</form>
								<div id="newsletter-response"></div>
							</div>
						</div>

						<!-- Social links -->
						<!-- <div class="social-links">
							<a href="https://www.facebook.com/" target="_blank"><i class="fa-facebook"
									aria-hidden="true"></i><span class="screen-reader-text">Facebook</span></a>
							<a href="https://twitter.com/" target="_blank"><i class="fa-twitter"
									aria-hidden="true"></i><span class="screen-reader-text">Twitter</span></a>
							<a href="https://plus.google.com/" target="_blank"><i class="fa-google-plus"
									aria-hidden="true"></i><span class="screen-reader-text">Google+</span></a>
							<a href="https://www.instagram.com/" target="_blank"><i class="fa-instagram"
									aria-hidden="true"></i><span class="screen-reader-text">Instagram</span></a>
							<a href="https://vimeo.com/" target="_blank"><i class="fa-vimeo"
									aria-hidden="true"></i><span class="screen-reader-text">Vimeo</span></a>
						</div> -->

					</section>

					<!-- Modal toggle -->
					<div class="modal-toggle">
						<span class="modal-note">About Us</span>
						<button id="modal-open"><span class="screen-reader-text">Open</span><span aria-hidden="true"
								class="icon-plus"></span></button>
					</div>

				</div><!-- .inner -->
			</div><!-- .site-front -->

			<!-- Modal (About Us) -->
			<div id="modal" class="site-modal">
				<div class="modal-scrollable">
					<div class="inner">

						<!-- Modal toggle -->
						<div class="modal-toggle">
							<button id="modal-close"><span class="screen-reader-text">Close</span><span
									aria-hidden="true" class="icon-plus"></span></button>
						</div>

						<section class="content">
							<h2 class="section-title">About Me</h2>

							<!-- Columns -->
							<div class="row">
								<div class="one-half">
									<p>Integer mollis risus sem, at volutpat eros pellentesque in. Interdum et malesuada
										fames ac ante ipsum primis in faucibus. Aenean rhoncus porttitor nisi ut
										aliquam. Curabitur sed egestas velit.</p>
									<p>Fusce sed tincidunt lacus, et porta sapien. Vestibulum non erat purus. Vestibulum
										at augue dui. In vulputate rutrum eros at placerat. Morbi et dui eget ante
										convallis facilisis. Nullam et mollis sapien. Integer vel nisl erat. Maecenas
										tempor lectus condimentum sagittis molestie.</p>
								</div>
								<div class="one-half">
									<h3><i class="fa-phone" aria-hidden="true"></i> Phone</h3>
									<p>Phone: (000) 555 1212 <br />Mobile: (000) 555 0100 <br />Fax: (000) 555 0101</p>
									<h3><i class="fa-envelope" aria-hidden="true"></i> Email</h3>
									<p>haleluya@example.com<br />dev.mukminin@gmail.com</p>
									<h3><i class="fa-map-marker" aria-hidden="true"></i> Address</h3>
									<p>Jl. Ni Saja Dengan Ikhlas</p>
								</div>
							</div>

						</section>

					</div><!-- .inner -->
				</div><!-- .modal-scrollable -->
			</div><!-- .site-modal -->

		</main><!-- .site-main -->
	</div><!-- .wrap -->

	<!-- Background overlay -->
	<div class="overlay"></div>

	<!-- Loading... -->
	<div id="preload">
		<div id="preload-content">
			<div class="preload-spinner">
				<span class="bounce1"></span>
				<span class="bounce2"></span>
				<span class="bounce3"></span>
			</div>
			<div class="preload-text">Nteni sek...</div>
		</div>
	</div>

	

</body>

</html>