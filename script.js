 const sounds = ['boi', 'bruce', 'cheeseburger', 'crunchybois', 'dada', 'elmo', 'funny', 'gaga', 'giggle', 'goldilocks', 'goose', 'greenhams', 'greenhams2', 'hi', 'mark', 'old', 'oops', 'papajohn', 'pasta', 'phats', 'tiny', 'whatsup', 'wicky']


 sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSongs()

        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
 })

 function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
 }