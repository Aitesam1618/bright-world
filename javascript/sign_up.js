const signupForm = document.getElementById("signupForm");

    signupForm.addEventListener("submit", function(e) {
      e.preventDefault();
      let valid = true;

      const name = document.getElementById("name");
      const username = document.getElementById("username");
      const email = document.getElementById("email");
      const password = document.getElementById("password");
      const confirmPassword = document.getElementById("confirmPassword");
      const contact = document.getElementById("contact");

      const usernameRegex = /^_?[A-Za-z]+(?:_?[A-Za-z0-9]{0,2})?$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const pkNumberRegex = /^03[0-9]{9}$/;

      // Validate Name
      if (name.value.trim() === "" || !isNaN(name.value.trim())) {
        name.classList.add("is-invalid");
        valid = false;
      } else {
        name.classList.remove("is-invalid");
        name.classList.add("is-valid");
      }

      // Validate Username
      if (!usernameRegex.test(username.value.trim())) {
        username.classList.add("is-invalid");
        valid = false;
      } else {
        username.classList.remove("is-invalid");
        username.classList.add("is-valid");
      }

      // Validate Email
      if (!emailRegex.test(email.value.trim())) {
        email.classList.add("is-invalid");
        valid = false;
      } else {
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
      }

      // Validate Password
      if (password.value.trim() === "") {
        password.classList.add("is-invalid");
        valid = false;
      } else {
        password.classList.remove("is-invalid");
        password.classList.add("is-valid");
      }

      // Confirm Password
      if (confirmPassword.value !== password.value || confirmPassword.value === "") {
        confirmPassword.classList.add("is-invalid");
        valid = false;
      } else {
        confirmPassword.classList.remove("is-invalid");
        confirmPassword.classList.add("is-valid");
      }

      // Contact Number
      if (!pkNumberRegex.test(contact.value.trim())) {
        contact.classList.add("is-invalid");
        valid = false;
      } else {
        contact.classList.remove("is-invalid");
        contact.classList.add("is-valid");
      }

      if (valid) {
        const user = {
          name: name.value.trim(),
          username: username.value.trim(),
          email: email.value.trim(),
          password: password.value,
          contact: contact.value.trim()
        };
        localStorage.setItem("user", JSON.stringify(user));
        alert("User registered successfully!");
        signupForm.reset();
        document.querySelectorAll(".form-control").forEach(f => f.classList.remove("is-valid"));
      }
    });
  
  
    
      document.getElementById("signupForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const contact = document.getElementById("contact").value.trim();
  
        const usernameRegex = /^_?[A-Za-z]+(_?[A-Za-z0-9]{0,2})?$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const contactRegex = /^+92[0-9]{10}$/;
  
        if (!isNaN(name)) return alert("Name must be a string.");
        if (!usernameRegex.test(username)) return alert("Invalid username format.");
        if (!emailRegex.test(email)) return alert("Invalid email.");
        if (!contactRegex.test(contact)) return alert("Invalid contact number.");
        if (password !== confirmPassword) return alert("Passwords do not match.");
  
        const user = { name, username, email, password, contact };
        localStorage.setItem("user", JSON.stringify(user));
        alert("User registered successfully!");
      });