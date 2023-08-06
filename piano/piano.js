

function play(note) {
    let audioFile = `${note.toLowerCase()}5.mp3`;

    const audio = new Audio(audioFile);
    audio.play(); 
}

