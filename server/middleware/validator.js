
const checkType = (str) => {
  let hasLetter = false;
  let hasNumber = false;
  let hasSymbol = false;

  const symbols = "!@#$%^&*()_+-=[]{}|;:'\",.<>/?`~";

  for (let ch of str) {
    const code = ch.charCodeAt(0);

    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      hasLetter = true;
    } else if (code >= 48 && code <= 57) {
      hasNumber = true;
    } else if (symbols.includes(ch)) {
      hasSymbol = true;
    }
  }
  return { hasLetter, hasNumber, hasSymbol };
};

// Helper: Email check karne ke liye (Aapka Logic)
const isValidEmail = (email) => {
  if (!email.includes("@")) return false;
  const parts = email.split("@");
  if (parts.length !== 2) return false;
  if (!parts[1].includes(".")) return false;
  return true;
};

// --- Middleware Functions ---

export const signupValidation = (req, res, next) => {
  const data = req.body; // Frontend se aane wala data
  const errors = [];

  // Name Validation
  if (!data.name || data.name.trim() === "") {
    errors.push("Name is required");
  } else if (data.name.length < 3) {
    errors.push("Name must be at least 3 characters");
  }

  // Email Validation
  if (!data.email || data.email.trim() === "") {
    errors.push("Email is required");
  } else if (!isValidEmail(data.email)) {
    errors.push("Invalid email format (need @ and .com)");
  }

  // Password Validation
  if (!data.password || data.password.trim() === "") {
    errors.push("Password is required");
  } else {
    if (data.password.length < 6) {
      errors.push("Password must be at least 6 characters");
    }

    const result = checkType(data.password);
    if (!result.hasLetter) errors.push("Password must contain at least one letter");
    if (!result.hasNumber) errors.push("Password must contain at least one number");
    if (!result.hasSymbol) errors.push("Password must contain at least one symbol");
  }

  // Response logic
  if (errors.length > 0) {
    return res.status(400).json({ success: false, message: errors[0] });
  }

  next(); // Agar koi error nahi hai toh aage badho
};

export const loginValidation = (req, res, next) => {
  const data = req.body;
  const errors = [];

  if (!data.email || data.email.trim() === "") {
    errors.push("Email is required");
  }
  if (!data.password || data.password.trim() === "") {
    errors.push("Password is required");
  }

  if (errors.length > 0) {
    return res.status(400).json({ success: false, message: errors[0] });
  }

  next();
};