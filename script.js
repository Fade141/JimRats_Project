console.log("Hey, no hacking okay?");


const scriptURL = 'https://script.google.com/macros/s/AKfycbxVdW_HTZU1u-53kpWfNZN-HMYuLtu8YThYUAhbGKuHnDMjY20V0O9rl2ok5cI2n-br/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },1000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })