document.getElementById("btn").addEventListener("click", () => {
    const note = document.getElementById("note");
    const notes = document.getElementById("notesEl");
    const newNote = note.value;

    if (newNote.trim() !== "") {
        const noteItem = document.createElement("div");
        noteItem.classList.add("note-item");

        const noteText = document.createElement("p");
        noteText.classList.add("note-text");
        noteText.textContent = newNote;
        noteItem.appendChild(noteText);

        const editIcon = document.createElement("i");
        editIcon.classList.add("bx");
        editIcon.classList.add("bx-edit");
        editIcon.classList.add("edit-icon");
        editIcon.addEventListener("click", () => {
            const noteDetailWrapper = document.getElementById("note-detail");
            const noteTitleInput = document.getElementById("note-title");
            const noteDetailsTextarea = document.getElementById("note-details");
            noteDetailWrapper.style.display = "flex";
            // Set the title being edited in the modal
            noteTitleInput.textContent = noteText;

            });
        noteItem.appendChild(editIcon);

        const removeIcon = document.createElement("i");
        removeIcon.classList.add("bx");
        removeIcon.classList.add("bx-trash");
        removeIcon.classList.add("remove-icon");
        removeIcon.addEventListener("click", () => {
            notes.removeChild(noteItem);
        });
        noteItem.appendChild(removeIcon);

        notes.appendChild(noteItem);

        note.value = "";
    }
});

document.getElementById("save").addEventListener("click", () => {
    // Code to handle saving the edited note details
    closeNoteDetails();
});

document.getElementById("close").addEventListener("click", () => {
    closeNoteDetails(); 
});

function closeNoteDetails() {
    const noteDetailWrapper = document.getElementById("note-detail");
    noteDetailWrapper.style.display = "none"; 
}


