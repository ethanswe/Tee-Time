
document.querySelector('.demo-login-btn')
  .addEventListener('click', async (e) => {
    e.preventDefault();
    await fetch('/login/demo', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    window.location.href = '/users/1'
  })