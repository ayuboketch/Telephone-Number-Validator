const input = document.getElementById('user-input');
const check = document.getElementById('check-btn');
const clear = document.getElementById('clear-btn');
const results = document.getElementById("results-div");

check.addEventListener('click', () => {
  if (input.value.length === 0) {
    alert("Please provide a phone number");
  } else {
    const numericPhoneNumber = input.value.replace(/[^\d]/g, ''); // Remove non-numeric characters

    // Format the phone number
    let formattedPhoneNumber;
    if (numericPhoneNumber.length === 10) {
      formattedPhoneNumber = `(${numericPhoneNumber.substr(0, 3)}) ${numericPhoneNumber.substr(3, 3)}-${numericPhoneNumber.substr(6)}`;
    } else if (numericPhoneNumber.length === 11 && numericPhoneNumber[0] === '1') {
      formattedPhoneNumber = `1 (${numericPhoneNumber.substr(1, 3)}) ${numericPhoneNumber.substr(4, 3)}-${numericPhoneNumber.substr(7)}`;
    } else {
      formattedPhoneNumber = numericPhoneNumber;
    }

    // Check the formatted or unformatted phone number
    switch (numericPhoneNumber) {
      case '15555555555':
      case '5555555555':
      case '1 (555) 555-5555':
      case '555-555-5555':
      case '(555)555-5555':
      case '1(555)555-5555':
        results.textContent = `Valid US number: ${formattedPhoneNumber}`;
        break;
      default:
        // Display the original input as invalid
        results.textContent = `Invalid phone number: ${input.value}`;
    }
  }
});

clear.addEventListener('click', () => {
  results.textContent = 'Check Another number';
  input.value = '';
  /*("clicked!");*/
});
