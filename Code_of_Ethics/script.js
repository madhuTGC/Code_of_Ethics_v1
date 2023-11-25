const checkbox = document.getElementById('checkbox');
const finishBtn = document.getElementById('finishBtn');

checkbox.addEventListener('change', function() {
  if (checkbox.checked) {
    finishBtn.style.display = 'block';
    localStorage.setItem('agreement', 'yes');
  } else {
    finishBtn.style.display = 'none';
    localStorage.setItem('agreement', 'no');
  }
});

window.addEventListener('DOMContentLoaded', function() {
  const userID = generateUserID(); 

 
  const utcTime = new Date();
  const istTime = new Date(utcTime.getTime() + 5.5 * 60 * 60 * 1000); 
  const pageLoadTime = istTime.toISOString();

  localStorage.setItem('userID', userID);
  localStorage.setItem('pageLoadTime', pageLoadTime);

  window.addEventListener('beforeunload', function() {
    localStorage.setItem('agreement', 'no');
  });
});

function generateUserID() {
  return 'user123'; 
}

finishBtn.addEventListener('click', function() {
    window.open('https://www.bata.com/in/'); // Replace with your desired URL
});
