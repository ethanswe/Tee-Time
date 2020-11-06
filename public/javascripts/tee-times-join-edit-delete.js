
// console.log('hello world');

// 
document.querySelectorAll('.join-button').forEach(button => {
  button.addEventListener('click', async (e) => {
    e.preventDefault();
    const teeTimeId = e.target.id;
    const res = await fetch('/api/user-tee-times', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ teeTimeId })
    })
    e.target.classList.add('joined-button');
    e.target.innerText = 'joined'
  })
})


// document.querySelectorAll('.unjoin-button').forEach(button => {
//   button.addEventListener('click', async (e) => {
//     e.preventDefault();
//     const teeTimeId = e.target.id;
//     const res = await fetch('/api/user-tee-times', {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ teeTimeId })
//     })
//     e.target.classList.remove('unjoin-button');
//     e.target.innerText = 'Join'
//   })
// })




document.querySelectorAll('.edit-button').forEach(button => {
  button.addEventListener('click', async (e) => {
    e.preventDefault();
    console.log(e.target.id);
    
  })
})



document.querySelectorAll('.delete-button').forEach(button => {
  button.addEventListener('click', async (e) => {
    e.preventDefault();
    
  })
})