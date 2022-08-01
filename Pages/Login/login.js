function pageLogin() {
    localStorage.setItem('page', 'Login');
    document.querySelector('#div_container').innerHTML = `
    <div class="p-4 p-sm-5 bg-primary-soft rounded">
		<h2>Log in to your account</h2>
		<!-- Form START -->
		<form class="mt-4">
			<!-- Email -->
			<div class="mb-3">
				<label class="form-label" for="exampleInputEmail1">Email address</label>
				<input type="email" class="form-control" id="exampleInputEmail1" placeholder="E-mail">
			</div>
	</div>

	<section id="login_page" class="container-fluid">
		<div class="container">
			<div class="row">
		  <div class="col-md-10 col-lg-8 col-xl-6 mx-auto">
			<div class="p-4 p-sm-5 bg-primary-soft rounded">
						<h2>Log in to your account</h2>
						<!-- Form START -->
						<form class="mt-4">
							<!-- Email -->
							<div class="mb-3">
								<label class="form-label" for="exampleInputEmail1">Email address</label>
								<input type="email" class="form-control" id="exampleInputEmail1" placeholder="E-mail">
							</div>
							<!-- Password -->
							<div class="mb-3">
								<label class="form-label" for="exampleInputPassword1">Password</label>
								<input type="password" class="form-control" id="exampleInputPassword1" placeholder="*********">
							</div>
							<!-- Checkbox -->
							<div class="mb-3 form-check">
								<input type="checkbox" class="form-check-input" id="exampleCheck1">
								<label class="form-check-label" for="exampleCheck1">keep me signed in</label>
							</div>
							<!-- Button -->
							<div class="row align-items-center">
								<div class="col-sm-4">
									<button type="submit" class="btn btn-success">Sign me in</button>
								</div>
								<div class="col-sm-8 text-sm-end">
									<span>Don't have an account? <a href="signup.html"><u>Sign up</u></a></span>
								</div>
							</div>
						</form>
						<!-- Form END -->
						<hr>
						<!-- Social-media btn -->
						<div class="text-center">
							<p>Sign in with your social network for quick access</p>
							<ul class="list-unstyled d-sm-flex mt-3 justify-content-center">
								<li class="mx-2">
									<a href="#" class="btn bg-facebook d-inline-block"><i class="fab fa-facebook-f me-2"></i> Sign in with Facebook</a>
								</li>
								<li class="mx-2">
									<a href="#" class="btn bg-google d-inline-block"><i class="fab fa-google me-2"></i> Sign in with google</a>
								</li>
							</ul>
						</div>
			</div>
		  </div>
		</div>
		</div>
	</section>`
}