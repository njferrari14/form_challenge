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
<form id="form" method="post">
	<div class="fields">
		<div class="field">
			<label for="fname">First Name&#58;&#42;</label>
			<input type="text" id="fname" name="fname" placeholder="Remy" required>
			<span class="warning hidden">Please enter your first name</span>
		</div>
		<div class="field">
			<label for="lname">Last Name&#58;&#42;</label>
			<input type="text" id="lname" name="lname" placeholder="LeBeau" required>
			<span class="warning hidden">Please enter your last name</span>
		</div>
		<div class="field">
			<label for="email">Email&#58;&#42;</label>
			<input type="email" id="email" name="email" placeholder="ragin_cajun@x-mail.com" required>
			<span class="warning hidden">Please enter an email</span>
		</div>
		<div class="field">
			<label for="zip">Zip Code&#58;&#42;</label>
			<input type="text" id="zip" name="zip" placeholder="12345" maxlength="10" required>
			<span class="warning hidden">Please enter a valid zip code</span>
		</div>
		<div class="field">
			<label for="bday">Birthday&#58;&#42;</label>
			<input type="date" id="bday" name="bday" required>
			<span class="warning hidden">Please enter a valid birthdate</span>
		</div>
		<div class="field">
			<p class="q">Would you like to click any of these radio buttons&#63; &#40;optional&#41;</p>
			<div class="group">
				<div class="r-block">
					<label for="r1">This one&#58;</label>
					<input type="radio" name="radio" id="r1">
				</div>
				<div class="r-block">
					<label for="r2">This one&#58;</label>
					<input type="radio" name="radio" id="r2">
				</div>
				<div class="r-block">
					<label for="r3">This one&#58;</label>
					<input type="radio" name="radio" id="r3">
				</div>
				<div class="r-block">
					<label for="r4">No, none&#33;</label>
					<input type="radio" id="r4" name="radio">
					<a href="https://media2.giphy.com/media/f43Lq4O7JAGoU/source.gif" class="none" target="_blank"><span>&#35;gottem</span></a>
				</div>
			</div>
		</div>
		<div class="field q">
			<label class="last" for="opt">I agree to the terms and conditions&#58;&#42;</label>
			<input type="checkbox" id="opt" name="opt" required>
			<span class="warning hidden">You must agree to terms & conditions in order to continue</span>
		</div>
		<div class="field button-box">
			<input type="submit" id="button" name="button" value="Sign Up!" form="form">
		</div>
	</div>
	<p class="asterisk">&#42;denotes a required field</p>
</form>

<script src="scripts.js"></script>

</body>
</html>