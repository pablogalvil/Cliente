let fileHandle;

document.getElementById("openFile").addEventListener("click", async () => {
  try {
    [fileHandle] = await window.showOpenFilePicker();
    const file = await fileHandle.getFile();
    document.getElementById("editor").value = await file.text();
  } catch (err) {
    console.error("Error abriendo archivo", err);
  }
});

document.getElementById("saveFile").addEventListener("click", async () => {
  if (!fileHandle) return;
  try {
    const writable = await fileHandle.createWritable();
    await writable.write(document.getElementById("editor").value);
    await writable.close();
    alert("Archivo guardado correctamente");
  } catch (err) {
    console.error("Error guardando archivo", err);
  }
});
