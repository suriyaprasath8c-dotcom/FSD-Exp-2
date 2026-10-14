document.getElementById('registrationForm').addEventListener('submit', function (event) {
  event.preventDefault();

  let valid = true;

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const mobile = document.getElementById('mobile').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const age = document.getElementById('age').value;
  const course = document.getElementById('course').value;

  const setError = (id, message) => {
    document.getElementById(id).textContent = message;
  };

  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('mobileError').textContent = '';
  document.getElementById('passwordError').textContent = '';
  document.getElementById('confirmPasswordError').textContent = '';
  document.getElementById('ageError').textContent = '';
  document.getElementById('courseError').textContent = '';
  document.getElementById('successMessage').textContent = '';

  if (name === '') {
    setError('nameError', 'Name is required.');
    valid = false;
  } else if (name.length < 3) {
    setError('nameError', 'Name must contain at least 3 characters.');
    valid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    setError('emailError', 'Email is required.');
    valid = false;
  } else if (!emailPattern.test(email)) {
    setError('emailError', 'Enter a valid email address.');
    valid = false;
  }

  const mobilePattern = /^[0-9]{10}$/;
  if (mobile === '') {
    setError('mobileError', 'Mobile number is required.');
    valid = false;
  } else if (!mobilePattern.test(mobile)) {
    setError('mobileError', 'Mobile number must contain exactly 10 digits.');
    valid = false;
  }

  if (password === '') {
    setError('passwordError', 'Password is required.');
    valid = false;
  } else if (password.length < 6) {
    setError('passwordError', 'Password must contain at least 6 characters.');
    valid = false;
  }

  if (confirmPassword === '') {
    setError('confirmPasswordError', 'Confirm password is required.');
    valid = false;
  } else if (password !== confirmPassword) {
    setError('confirmPasswordError', 'Passwords do not match.');
    valid = false;
  }

  if (age === '') {
    setError('ageError', 'Age is required.');
    valid = false;
  } else if (Number(age) < 18 || Number(age) > 60) {
    setError('ageError', 'Age must be between 18 and 60.');
    valid = false;
  }

  if (course === '') {
    setError('courseError', 'Please select a course.');
    valid = false;
  }

  if (valid) {
    document.getElementById('successMessage').textContent = 'Registration successful!';
  }
});
