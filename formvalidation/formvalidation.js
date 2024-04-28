function validateForm() {
    clearErrors();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const aadhar = document.getElementById('aadhar').value;
    const email = document.getElementById('email').value;

    if (!/^[a-zA-Z\s]+$/.test(name)) {
      document.getElementById('nameError').textContent = 'Invalid name';
      return false;
    }

    if (!/^\d{10}$/.test(phone)) {
      document.getElementById('phoneError').textContent = 'Invalid phone number';
      return false;
    }

    if (!address.trim()) {
      document.getElementById('addressError').textContent = 'Address cannot be empty';
      return false;
    }

    if (!/^\d{12}$/.test(aadhar)) {
      document.getElementById('aadharError').textContent = 'Invalid Aadhar card number';
      return false;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      document.getElementById('emailError').textContent = 'Invalid email address';
      return false;
    }
 
    return true;
  }

  function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => {
      element.textContent = ' ';
    });
  }