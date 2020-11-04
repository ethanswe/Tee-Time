window.addEventListener("load", (event)=>{
    console.log("hello from javascript!")
})

window.addEventListener('DOMContentLoaded', e => {
    document.querySelector('.logout-button')
        .addEventListener('click', async (e) => {
            e.preventDefault();
            await fetch('/logout', {
                method: 'POST',
            })
            window.location.href = '/';
        })
})