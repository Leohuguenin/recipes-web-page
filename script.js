 function toggleText(elementId, infoId) {
    const infoElement = document.getElementById(infoId);
    if (infoElement.style.display === "none" || infoElement.style.display === "") {
      infoElement.style.display = "block"; 
    } else {
      infoElement.style.display = "none"; 
    }
  }

  document.getElementById("dende-mayo").addEventListener("click", function () {
    toggleText("dende-mayo", "dende-mayo-info");
  });

  document.getElementById("cassava-crisps").addEventListener("click", function () {
    toggleText("cassava-crisps", "cassava-crisps-info");
  });
 const downloadBtn = document.getElementById('downloadBtn');
  const formContainer = document.querySelector('.form-container');
  const emailInput = document.getElementById('emailInput');
  const submitBtn = document.getElementById('submitBtn');
  const submittedMessage = document.querySelector('.submitted-message');

  downloadBtn.addEventListener('click', () => {
    formContainer.style.display = 'flex';
    submittedMessage.style.display = 'none';
  });

  submitBtn.addEventListener('click', () => {
    formContainer.style.display = 'none';
    submittedMessage.style.display = 'block';
    emailInput.value = ''; 
    

    setTimeout(() => {
      submittedMessage.style.display = 'none';
    }, 3000); 
  });