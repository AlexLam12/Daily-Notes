const notes = [
    {
        id: 1,
        subject: "Arrays",
        date: "5/27/2021",
        feeling: "Good",
        timeSpent: "5 hrs",
    },
    {
        id: 2,
        subject: "weight lifting",
        date: "5/26/2021",
        feeling: "Good",
        timeSpent: "2 hrs", 
    }
]

const noteAboutToday = {
    id: 3,
    subject: "making sandwitch",
    date: "5/27/2021",
    feeling: "Good",
    timeSpent: "10 min", 
}
notes.push(noteAboutToday)

// for (const note of notes){
//     console.log(`Note ${note.id}
//     I learned ${note.subject}
//     I spent ${note.timeSpent}
//     I felt ${note.feeling}`)
// }

// const searchTerm = "Arrays"
// for (const note of notes) {
//     if (note.subject === searchTerm) {
//         console.log(note)

//     }
// }
const createNote = (note) => {
    const lastIndex = notes.length - 1
    const currentLastNote = notes[lastIndex]
    const maxId = currentLastNote.id
    const idForNewNote = maxId + 1

    note.id = idForNewNote

    notes.push(note)
}


const moreNewerNote = {
    subject: "Running",
    date: "5/27/2021",
    feeling: "Not Good",
    timeSpent: "10 min",
}

createNote(moreNewerNote)
console.log(notes)