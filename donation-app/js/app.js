// Handle Login
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        // Redirect to Admin Dashboard
        window.location.href = "admin.html";
      })
      .catch((error) => {
        alert("Login failed: " + error.message);
      });
  });
}
// Logout function
function logout() {
  auth.signOut().then(() => {
    window.location.href = "index.html";
  });
}

// Donation form handling
const donationForm = document.getElementById("donationForm");

if (donationForm) {
  donationForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const donor = document.getElementById("donorName").value;
    const amount = document.getElementById("amount").value;
    const method = document.getElementById("paymentMethod").value;

    // Save donation to Firestore
    await db.collection("donations").add({
      donorName: donor,
      amount: parseFloat(amount),
      paymentMethod: method,
      dateTime: new Date().toISOString()
    });

    alert("Donation saved!");
    donationForm.reset();
    loadDonations();
  });

  // Load donations on page open
  loadDonations();
}

// Load donations into table
async function loadDonations() {
  const table = document.getElementById("donationTable");
  if (!table) return;

  // Clear table header first
  table.innerHTML = `
    <tr>
      <th>Donor</th>
      <th>Amount</th>
      <th>Payment Method</th>
      <th>Date</th>
    </tr>
  `;

  const snapshot = await db.collection("donations").orderBy("dateTime", "desc").get();
  snapshot.forEach(doc => {
    const data = doc.data();
    let row = table.insertRow();
    row.insertCell(0).innerText = data.donorName;
    row.insertCell(1).innerText = "₹" + data.amount;
    row.insertCell(2).innerText = data.paymentMethod;
    row.insertCell(3).innerText = new Date(data.dateTime).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  });
}
