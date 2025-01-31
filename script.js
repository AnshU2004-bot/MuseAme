const backendURL = "https://yourapp.up.railway.app"; // Update with your backend URL

document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const phone = document.getElementById('phone').value;

  const response = await fetch(${backendURL}/send-otp, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phone }),
  });

  if (response.ok) {
    alert('OTP sent successfully to your WhatsApp!');
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('otpForm').style.display = 'block';
  } else {
    alert('Failed to send OTP. Please try again.');
  }
});

document.getElementById('otpForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const phone = document.getElementById('phone').value;
  const otp = document.getElementById('otp').value;

  const response = await fetch(${backendURL}/verify-otp, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phone, otp }),
  });

  if (response.ok) {
    alert('Login successful!');
  } else {
    alert('Invalid OTP. Please try again.');
  }
});
