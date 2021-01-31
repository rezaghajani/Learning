let loginUser = (email,pass) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve({userEmail: email})
        },2000 )
    })
}

let userVideos = (email) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(['video1','video2','video3'])
        },3000 )
        
    })
}

async function displayUser() {
    const loggedin = await loginUser('ed',13485)
    const videos = await userVideos(loggedin.userEmail)
    console.log(videos)
}

displayUser()