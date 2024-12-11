// Tab switching functionality
function openTab(event, tabId) {
    const tabContents = document.querySelectorAll('.tab-content');
    const tabLinks = document.querySelectorAll('.tab-link');
  
    tabContents.forEach(tab => tab.classList.remove('active'));
    tabLinks.forEach(link => link.classList.remove('active'));
  
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
  }
  
  // Function to preview uploaded image
  function previewImage(imageId, input) {
    const file = input.files[0];
    const reader = new FileReader();
  
    if (file) {
      reader.onload = function (e) {
        document.getElementById(imageId).src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  
  // Function to reset image to the default placeholder
  function resetImage(imageId, defaultSrc) {
    document.getElementById(imageId).src = defaultSrc;
    const fileInput = document.querySelector(`input[type="file"]#${imageId}Input`);
    if (fileInput) {
      fileInput.value = "";
    }
  }
  
  // Handle form submission for both forms (optional)
  document.getElementById('kycForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Personal Details Updated!');
  });
  
  document.getElementById('passwordForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Password Updated!');
  });
  