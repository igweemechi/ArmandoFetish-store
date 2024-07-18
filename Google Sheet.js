const scriptURL = 'https://script.google.com/macros/s/AKfycbx7wLC25SOo7mPIYFHXBHTNRdKioiljJknJ6h55oO7EoiG8L90AOUlGJnZZtBz215xeOg/exec'

const form = document.forms['contact-form']
    
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank You! Your form is submitted successfully." ))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})
