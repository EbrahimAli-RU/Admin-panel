document.getElementById('submitButton').addEventListener('click', () => {
    console.log(document.querySelector('#image').value)
    // console.log(document.querySelector('#description').value)
    // console.log(document.querySelector('#productName').value)
    // console.log('Hi bro')
})

document.querySelector('.form-control').addEventListener('changed', (event) => {
    console.log('hi')
    console.log(event.target.value);
})