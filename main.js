const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const cta = document.querySelector(".buttons");

// 'mousemove' event listener for container
cta.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const btnRect = noBtn.getBoundingClientRect(); // no button's current position

  // Calculate the distance between mouse and no button
  const distX = mouseX - (btnRect.left + btnRect.width / 2);
  const distY = mouseY - (btnRect.top + btnRect.height / 2);
  const distance = Math.sqrt(distX * distX + distY * distY);

  // If mouse is close to the button (distance less than 150px)
  if (distance < 150) {
    const containerWidth = cta.offsetWidth;
    const containerHeight = cta.offsetHeight;
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Randomly calculate a new position for the 'no' button within the container
    let newLeft = Math.random() * (containerWidth - btnWidth);
    let newTop = Math.random() * (containerHeight - btnHeight);

    // Ensure button stays within container
    newLeft = Math.min(Math.max(0, newLeft), containerWidth - btnWidth);
    newTop = Math.min(Math.max(0, newTop), containerHeight - btnHeight);

    // Apply the new position
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${newLeft}px`;
    noBtn.style.top = `${newTop}px`;
  }
});
