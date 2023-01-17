const input_text = document.querySelector('.input_text')
const button = document.querySelector('#login_button')
const file = document.querySelector('#file')

button.onclick = async() => {
    const userName = input_text.value

    const formData = new FormData()
    formData.append("userName", userName)
    formData.append('img', file.files[0])
    let response = await fetch('http://192.168.100.31:4545/users', {
        method: 'POST',
        body: formData
    })
    response = await response.json()
    if (response.status = 201) {
        window.localStorage.setItem('user', JSON.stringify(response.data))
        window.location = 'index'

    } else {
        window.location = 'login'
    }
}