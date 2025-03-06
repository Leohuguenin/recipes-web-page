function setOnHover(triggerId, tooltipId) {
    const trigger = document.getElementById(triggerId);
    const tooltip = document.getElementById(tooltipId);

    trigger.addEventListener('mouseover', (e) => {
      tooltip.style.display = 'block';
      tooltip.style.left = (e.clientX - tooltip.offsetWidth / 2) + 'px';
      tooltip.style.top = (e.clientY - tooltip.offsetHeight) + 'px';
    });
    
    trigger.addEventListener('mouseout', () => {
      tooltip.style.display = 'none';
    });
  }

  setOnHover('dende-mayo', 'dende-mayo-info');
  setOnHover('cassava-crisps', 'cassava-crisps-info');

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