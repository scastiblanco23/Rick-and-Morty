const formCreate = document.getElementById("form-create");
const formEdit = document.getElementById("form-edit");

export function formCreateCharacter() {
  formCreate.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(formCreate);
    const name = data.get("name");
    const species = data.get("species");
    const gender = data.get("gender");
    const status = data.get("status");
    const imgUrl = data.get("imgUrl");

    createCharacterView(name, species, gender, status, imgUrl);
  });
}

export function formEditCharacter() {
  formEdit.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(formEdit);
    const id = data.get("id-character");
    const name = data.get("new-name");
    const status = data.get("new-state");
    console.log(id, name, status);

    editCharacterView(id, name, status);
  });
}
