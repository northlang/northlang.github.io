const editor = document.querySelector("#editor")

ace.edit(editor, {
    theme: "ace/theme/tomorrow_night_eighties",
    mode: "ace/mode/turtle",
    // readOnly: true,
})
