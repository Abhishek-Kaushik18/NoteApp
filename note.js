
const noteInput = document.getElementById('noteInput');
const addNoteBtn = document.getElementById('addNote');
const clearBtn = document.getElementById(`clear`)
const removeBtn = document.getElementById(`removeNote`)
const olList = document.getElementById(`noteList`)


addNoteBtn.addEventListener('click',addNote)
noteInput.addEventListener(`keyup`,e=>{
    if(e.key === `Enter`){
        addNote()
    }
})

const maxNotes = 10;
function addNote(){
    const noteText = noteInput.value.trim()
    const noteCount = olList.children.length
    if(noteText!==`` && noteCount < maxNotes){
        const liNote = document.createElement(`li`)
        liNote.setAttribute(`id`,`lilist`)
        liNote.textContent = noteText
        olList.appendChild(liNote)
        noteInput.value = ``
    } else if(noteCount >= maxNotes){
        alert(`Note limit reached, Cant add more notes. !`)
    }
}

removeBtn.addEventListener(`click`,removeNote)
document.body.addEventListener(`keyup`,e=>{
    if(e.key === `Delete`){
        removeNote()
    }
})

function removeNote(){
    const li = olList.lastChild
    if(li){
        olList.removeChild(li)
    }
}


clearBtn.addEventListener(`click`,e=>{
    olList.innerHTML = ``
})

function helpPop(){
    alert(`Enter to Add List. \nDelete to Remove List`)
}

