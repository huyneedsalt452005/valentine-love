document.addEventListener("DOMContentLoaded", function() {

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");
    const letterDiv = document.getElementById("letter");
  
    const lines = [
      "Valentine này anh không ở cạnh em.",
      "Không có hoa để đưa tận tay.",
      "Không có cái ôm sau một ngày dài.",
      "Chỉ có một màn hình và một khoảng cách khá xa giữa hai đứa.",
      "",
      "Nhưng yêu xa không phải là thiếu nhau,",
      "mà là đang cố gắng vì nhau.",
      "",
      "Anh không hứa điều gì quá lớn.",
      "Chỉ hứa sẽ vẫn ở đây,",
      "vẫn thương em theo cách bình tĩnh và bền bỉ nhất.",
      "",
      "Rồi sẽ có một Valentine khác,",
      "không còn là yêu xa nữa."
    ];
  
    function teleportNo() {
      const maxX = window.innerWidth - noBtn.offsetWidth;
      const maxY = window.innerHeight - noBtn.offsetHeight;
      noBtn.style.position = "fixed";
      noBtn.style.left = Math.random() * maxX + "px";
      noBtn.style.top = Math.random() * maxY + "px";
    }
  
    noBtn.addEventListener("mouseover", teleportNo);
    noBtn.addEventListener("click", teleportNo);
  
    yesBtn.addEventListener("click", () => {
      page1.style.display = "none";
      page2.style.display = "block";
  
      lines.forEach((text, index) => {
        const p = document.createElement("div");
        p.className = "line";
        p.textContent = text;
        letterDiv.appendChild(p);
  
        setTimeout(() => {
          p.classList.add("show");
        }, index * 400);
      });
    });
  
  });
  
  
  
  