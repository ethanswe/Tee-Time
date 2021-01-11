


document.querySelectorAll('.join-button').forEach(button => {
  button.addEventListener('click', async (e) => {
    e.preventDefault();
    let teeTimeId = e.target.id.split('-')[2];
    teeTimeId = parseInt(teeTimeId, 10)
    const res = await fetch('/api/user-tee-times', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ teeTimeId })
    })
    // e.target.classList.add('joined-button');
    e.target.classList.toggle('hidden');
    document.getElementById(`unjoin-button-${teeTimeId}`).classList.toggle('hidden');
  })
})


document.querySelectorAll('.unjoin-button').forEach(button => {
  button.addEventListener('click', async (e) => {
    e.preventDefault();
    const teeTimeId = e.target.id.split('-')[2];
    const res = await fetch('/api/user-tee-times', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ teeTimeId })
    })
    e.target.classList.toggle('hidden');
    document.getElementById(`join-button-${teeTimeId}`).classList.toggle('hidden');
  })
})



document.querySelectorAll('.edit-button').forEach(button => {
  button.addEventListener('click', async (e) => {
    e.preventDefault();
    const teeTimeId = e.target.id.split('-')[2];
    const formContainer = document.getElementById(`form-container-${teeTimeId}`);
    formContainer.classList.toggle('hidden');
  })
})



document.querySelectorAll('.update-button').forEach(button => {
  button.addEventListener('click', async (e) => {
    e.preventDefault();
    const formContainer = document.getElementById(`form-container-${e.target.id}`);
    const form = formContainer.firstChild;
    const formData = Object.fromEntries(new FormData(form));
    formData.teeTimeId = e.target.id

    const res = await fetch(form.action, {
      method: 'PUT',
      body: JSON.stringify(formData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    const jsonResult = await res.json();
    
    window.location.reload()
  })
})



document.querySelectorAll('.delete-button').forEach(button => {
  button.addEventListener('click', async (e) => {
    e.preventDefault();
    const teeTimeId = e.target.id.split('-')[2];

    await fetch(`/api/tee-times/${teeTimeId}/delete`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ teeTimeId })
    })
    window.location.reload();
  })
})
