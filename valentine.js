document.addEventListener("DOMContentLoaded", function() {

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");
    const letterDiv = document.getElementById("letter");
  
    const lines = [
  "Valentine này anh không ở cạnh em, và anh biết điều đó không dễ chịu chút nào. Nhưng khoảng cách không làm anh yêu em ít đi, chỉ làm anh ý thức rõ hơn mình trân trọng em thế nào. Có những ngày mệt mỏi, chỉ cần nghĩ đến việc cả hai đang cùng cố gắng cho tương lai chung là anh thấy mọi thứ đáng giá. Anh không hứa những điều to tát, chỉ hứa sẽ luôn nghiêm túc với tình cảm này, luôn chọn em — kể cả khi không dễ dàng. Rồi sẽ có một ngày mình không cần nói chuyện qua màn hình nữa, mà chỉ cần quay sang là thấy nhau."
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
  
  
  
  
