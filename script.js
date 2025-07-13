 const sounds = ['boi','hi','old','pasta','dada','funny','gaga','goose','oops','whatsup','wicky', 'tiny',
    'elmo',
    'goldilocks',
    'greenhams',
    'greenhams2',
    'mark',
    'papajohn']

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