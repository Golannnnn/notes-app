# React Notes App

This is a simple React notes app that allows users to add, edit, archive, move, delete and add reminders to notes. The notes are saved using `localStorage`, so they will persist even after the user closes the app. `Material UI` components were used to build the app.

Live version: https://itc-react-notes.netlify.app/

## Technologies Used

In addition to React and Material UI, the following technologies were also used:

- [material-ui-confirm](https://www.npmjs.com/package/material-ui-confirm) - a library for adding confirm dialogs to Material UI components
- [nanoid](https://www.npmjs.com/package/nanoid) - a small library for generating unique IDs
- [date-fns](https://date-fns.org/) - a library for working with dates and times in JavaScript

## Features

The following features are available in this app:

- **Add note**: Click the "Add Note" button to create a new note. You can enter a title and a message for the note.
- **Edit note**: Click the edit icon tot he right of the note title to edit its title and message.
- **Archive note**: Click the checkbox to the left of the note title to move it to the archive. You can unarchive a note by unchecking the checkbox.
- **Move note**: Click on the arrow to move a note all the way to the end.
- **Delete note**: Click the delete icon to the right of the note title to delete it permanently.
- **Reminders**: On the form click on the "Create a reminder" checkbox and specifiy a time to be reminded on.
