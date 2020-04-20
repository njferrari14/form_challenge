<head>

	<!-- Basic Page Needs
	==================================== -->
	<title>A Simple Form</title>
	<meta charset="utf-8">
	<meta name="description" content="This is a form I was tasked to code to showcase my skills!">
	<meta name="author" content="Nicholas J Ferrari">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<!-- Styles & Scripts
	==================================== -->
	<link rel="stylesheet" href="styles.css">

</head>

<body>
<h1>Sign up for our rewards program!</h1>
<form method="post">
	<div class="fields">
		<div class="field">
			<label for="fname">First Name:*</label>
			<input type="text" id="fname" name="fname" placeholder="Remy" required>
			<span class="warning hidden">Please enter your first name</span>
		</div>
		<div class="field">
			<label for="lname">Last Name:*</label>
			<input type="text" id="lname" name="lname" placeholder="LeBeau" required>
			<span class="warning hidden">Please enter your last name</span>
		</div>
		<div class="field">
			<label for="email">Email:*</label>
			<input type="email" id="email" name="email" placeholder="ragin_cajun@x-mail.com" required>
			<span class="warning hidden">Please enter an email</span>
		</div>
		<div class="field">
			<label for="zip">Zip Code:*</label>
			<input type="text" id="zip" name="zip" placeholder="12345" maxlength="10" required>
			<span class="warning hidden">Please enter a valid zip code</span>
		</div>
		<div class="field">
			<label for="bday">Birthday:*</label>
			<input type="date" id="bday" name="bday" required>
			<span class="warning hidden">Please enter a valid birthdate</span>
		</div>
		<div class="field">
			<p class="q">Would you like to click any of these radio buttons?</p>
			<div class="group">
				<div class="r-block">
					<label for="r1">This one:</label>
					<input type="radio" id="r1" name="radio">
				</div>
				<div class="r-block">
					<label for="r2">This one:</label>
					<input type="radio" id="r2" name="radio">
				</div>
				<div class="r-block">
					<label for="r3">This one:</label>
					<input type="radio" id="r3" name="radio">
				</div>
				<div class="r-block">
					<label for="r4">No!</label>
					<input type="radio" id="r4" name="radio">
					<a href="https://i.giphy.com/media/S3Ot3hZ5bcy8o/giphy.gif" class="none"><span>&#35;gottem</span></a>
				</div>
			</div>
		</div>
		<div class="field q">
			<label class="last" for="opt">I agree to the terms and conditions:*</label>
			<input type="checkbox" id="opt" name="opt" required>
			<span class="warning hidden">You must agree to terms & conditions in order to continue</span>
		</div>
		<div class="field button-box">
			<input type="submit" id="button" name="button" value="Sign Up!">
		</div>
	</div>
	<p class="asterisk">*denotes a required field</p>
</form>

</body>
<script type="text/javascript" src="scripts.js"></script>