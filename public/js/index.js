const pro__nav = document.querySelector('.pro__nav')
const box__nav = document.querySelector('.box__nav')
const files = document.querySelector('#files')
let matn = document.querySelector('#matn')
const sent_btn = document.querySelector('.sent_btn')

let user = window.localStorage.getItem('user')
user = JSON.parse(user)
pro__nav.innerHTML = `
    <img src="http://192.168.100.31:4545/${user.profilImg}" class="pro__img" alt="">
    <h4 class="pro__name">${user.userName}</h4>
`

async function renderFiles() {
    let files = await fetch('http://192.168.100.31:4545/files')
    files = await files.json()
    for (const file of files.data) {
        console.log(file);
        box__nav.innerHTML += `
        <div class="card">
            <object data="http://192.168.100.31:4545/${file.link}" type="image/jpg"></object>
            <div class="card__info">
                <img src="http://192.168.100.31:4545/${user.profilImg}" class="pro__img" alt="">
                <h1 class="card__user">${user.userName}</h1>
            </div>
                <p class="card__text">${file.fileName}</p>
                <a href="img.jpg" download="post.jpg" class="card__down">Download</a>
        </div>
        `
    }
}

sent_btn.onclick = async(event) => {
    matn = matn.value
    let formData = new FormData()
    formData.append('img', files.files[0])
    formData.append('fileName', matn)
    formData.append('userId', user.userId)

    let response = await fetch('http://localhost:4545/files', {
        method: 'POST',
        body: formData
    })
    response = await response.json()
    if (response.status == 201) {
        box__nav.innerHTML += `
        <div class="card">
            <object data="http://192.168.100.31:4545/${response.data.link}" type="${response.data.mimeType}"></object>
            <div class="card__info">
                <img src="http://192.168.100.31:4545/${user.profilImg}" class="pro__img" alt="">
                <h1 class="card__user">${user.userName}</h1>
            </div>
                <p class="card__text">${response.data.fileName}</p>
                <a href="img.jpg" download="post.jpg" class="card__down">Download</a>
        </div>
        `
    }
}

renderFiles()