// Select the content div where the page content will be injected
const contentDiv = document.getElementById("content");

// Function to update the content dynamically
function loadContent(page) {
  switch (page) {
    case "home":
      contentDiv.innerHTML = `
               
            `;
      break;
    case "about":
      contentDiv.innerHTML = `
                <h1>About Us</h1>
                <div class="about">
                <div class="main-about">
                <div class="inner-about">
                <div class="about-content">
                
                <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              consequuntur harum beatae inventore voluptatem numquam
              voluptatibus fuga, cupiditate cumque porro perferendis tempora,
              adipisci culpa odio molestias dolorem blanditiis quos ad!
              </p>
              <a href="#">Read more</a>
              </div>
              </div>
              <div class="inner-about">
              <div class="inner-about-image">
              <img src="images/chiness.jpg" alt="" />
              </div>
              </div>
              </div>
              </div>


                
            `;
      break;
    case "services":
      contentDiv.innerHTML = `
       <div class="our-services">
       <div class="service-content">
       <div class="left-service-content">
       <h1>Our special services</h1>
       <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
            animi similique perspiciatis, impedit blanditiis itaque consequuntur
            laboriosam ipsa asperiores?
        </p>
        </div>
        <div class="right-service-content">
        <div class="right-btn">
        <a href="#">See all services</a>
        </div>
        </div>
        </div>

        <div class="main-services">
        <div class="inner-services-content">
        <div class="service-icon">
            <i class="fas fa-notes-medical"></i>
        </div>
        <h2>health care</h2>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
            corporis impedit nam quaerat vitae incidunt aspernatur, conseq
        </p>
        </div>

        <div class="inner-services-content">
        <div class="service-icon">
        <i class="fas fa-hospital-user"></i>
        </div>
        <h2>health care</h2>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
            corporis impedit nam quaerat vitae incidunt aspernatur, conseq
        </p>
        </div>

        <div class="inner-services-content">
        <div class="service-icon">
            <i class="fas fa-user-md"></i>
        </div>
        <h2>health care</h2>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
            corporis impedit nam quaerat vitae incidunt aspernatur, conseq
        </p>
        </div>
        </div>
        </div>

                
            `;
      break;
    case "gallery":
      contentDiv.innerHTML = `
                <h1>Gallery</h1>
                <div class="gallery">
                
                <div class="main-gallery">
                <div class="inner-gallery">
                <img src="images/gal1.jpg" alt="" style="width: 300px; height: 200px;"  />
                </div>
                <div class="inner-gallery">
                <img src="images/gal2.jpg" alt="" style="width: 300px; height: 200px;" />
                </div>
                <div class="inner-gallery">
                <img src="images/gal3.jpg" alt="" style="width: 300px; height: 200px;" />
                </div>

                <div class="inner-gallery">
                <img src="images/gal4.jpg" alt="" style="width: 300px; height: 200px;" />
                </div>

                <div class="inner-gallery">
                <img src="images/gal5.jpg" alt="" style="width: 300px; height: 200px;" />
                </div>

                <div class="inner-gallery">
                <img src="images/gal6.jpg" alt="" style="width: 300px; height: 200px;" />
                </div>
                </div>
                </div>
            `;
      break;
    case "contact":
      contentDiv.innerHTML = `
                <h1>Contact Us</h1>
                <p>Contact details and form go here.</p>
            `;
      break;
    default:
      contentDiv.innerHTML = `
                <h1>Welcome to the Home Page</h1>
                <p>This is the default landing content.</p>
            `;
  }
}
function toggleText(dotsId, moreTextId, btnId) {
  var dots = document.getElementById(dotsId);
  var moreText = document.getElementById(moreTextId);
  var btnText = document.getElementById(btnId);

  if (moreText.style.display === "none") {
    dots.style.display = "none";
    moreText.style.display = "inline";
    btnText.innerHTML = "Read less";
  } else {
    dots.style.display = "inline";
    moreText.style.display = "none";
    btnText.innerHTML = "Read more";
  }
}

// Add event listeners to the navigation links
document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    const page = e.target.id; // Get the id of the clicked link (home, about, etc.)
    loadContent(page); // Load the corresponding content

    document.addEventListener("DOMContentLoaded", function () {
      console.log("JavaScript is running!");
    });
  });
});
document.getElementById("loginBtn").onclick = function () {
  var loginSections = document.getElementById("login-sections");
  if (
    loginSections.style.display === "none" ||
    loginSections.style.display === ""
  ) {
    loginSections.style.display = "block";
  } else {
    loginSections.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", function () {
  // Apply blur when login modal is shown
  function showLoginModal() {
    document.getElementById("background-content").classList.add("blur");
    document.getElementById("login-modal").style.display = "block";
  }

  // Remove blur on successful login
  function hideLoginModal() {
    document.getElementById("background-content").classList.remove("blur");
    document.getElementById("login-modal").style.display = "none";
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Doctor login form handling
    document
      .getElementById("doctorLoginForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        var username = document.getElementById("doctor-username").value;
        var password = document.getElementById("doctor-password").value;

        fetch("http://localhost:3000/doctor-login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: username, password: password }),
        })
          .then((response) => response.json())
          .then((data) => {
            alert(data.message);
            if (data.user) {
              console.log(`Logged in as: ${data.user}`);
              document.getElementById("login-sections").style.display = "none";
              document.getElementById("doctor-dashboard").style.display =
                "block";
            }
          })
          .catch((error) => console.error("Error:", error));
      });

    // Patient login form handling
    document
      .getElementById("patientLoginForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        var username = document.getElementById("patient-username").value;
        var password = document.getElementById("patient-password").value;

        fetch("http://localhost:3000/patient-login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: username, password: password }),
        })
          .then((response) => response.json())
          .then((data) => {
            alert(data.message);
            if (data.user) {
              console.log(`Logged in as: ${data.user}`);
              document.getElementById("login-sections").style.display = "none";
              document.getElementById("patient-dashboard").style.display =
                "block";
            }
          })
          .catch((error) => console.error("Error:", error));
      });
  });

//General login form handling 
document.getElementById("login-form").addEventListener("submit", function (event) 
{ event.preventDefault(); 
  var username = document.getElementById("username").value; 
  var password = document.getElementById("password").value; 
  fetch("http://localhost:3000/login", { method: "POST", headers: { "Content-Type": "application/json", }, 
    body: JSON.stringify({ username: username, password: password }), }) 
    .then((response) => response.json()) 
    .then((data) => { alert(data.message); 
      if (data.user) { console.log(`Logged in as: ${data.user}`); 
      document.getElementById("login-modal").style.display = "none"; 
      // Show the corresponding dashboard or content 
      } 
    }) 
    .catch((error) => console.error("Error:", error)); 
  });
}

function showDashboard(type) {
  event.preventDefault(); // Prevent form submission
  document.getElementById("login-sections").style.display = "none";

  if (type === "doctor") {
    document.getElementById("doctor-dashboard").style.display = "block";
  } else if (type === "patient") {
    document.getElementById("patient-dashboard").style.display = "block";
  }
}
