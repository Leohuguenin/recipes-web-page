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
