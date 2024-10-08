import {addCSSIn,setInner,addChild} from "https://cdn.jsdelivr.net/gh/jscroot/element@0.1.8/croot.js";
import { getCookie } from "https://cdn.jsdelivr.net/gh/jscroot/cookie@0.0.1/croot.js";
import {getJSON} from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.8/croot.js";
import { id, backend } from "../../url/config.js";

let tableTemplate = `
<td width="5%"><i class="fa fa-bell-o"></i></td>
<td>#TASKNAME#</td>
<td class="level-right">
<button class="button is-small is-primary" data-item="#TASKID#">#LABEL#</button>
</td>
`;

export async function main() {
  await addCSSIn("assets/css/admin.css", id.content);
  setInner("biggreet", "Halo " + localStorage.getItem("nama"));
  getJSON(backend.helpdesk.all, "login", getCookie("login"), getUserTaskFunction);
  getJSON(backend.helpdesk.masuk, "login", getCookie("login"), isiTaskList);
  getJSON(backend.helpdesk.selesai, "login", getCookie("login"), isiSelesai);
}

function getUserTaskFunction(result) {
  setInner("list", "");
  if (result.status === 200) {
    if (result.data.todo){
      setInner("bigtodo", result.data.todo);
    }
    if(result.data.done){
      setInner("bigdoing", result.data.done);
    }
    if (result.data.all){
      setInner("bigdone", result.data.all);
    }
    setInner("bigpoin", localStorage.getItem("status"));
    setInner(
      "subtitle",
      "Jumlah total user komplain yang masuk " +
      result.data.done +
        " orang."
    );
  }
}

function isiTaskList(result) {
  if(result.data.nama){
    let content = tableTemplate
    .replace("#TASKNAME#", result.data.nama)
    .replace("#TASKID#", result.data.phone)
    .replace("#LABEL#", "Chat");
  addChild("list", "tr", "", content);
  // Jalankan logika tambahan setelah addChild
  runAfterAddChild(result.data,"list");
  }
}

function isiSelesai(result) {
  if(result.data.nama){
    let content = tableTemplate
    .replace("#TASKNAME#", result.data.nama)
    .replace("#TASKID#", result.data.phone)
    .replace("#LABEL#", "Chat");
  addChild("done", "tr", "", content);
  // Jalankan logika tambahan setelah addChild
  runAfterAddChild(result.data,"done");
  }
}

function runAfterAddChild(value,idtr) {
  // Temukan elemen tr yang baru saja ditambahkan
  const rows = document.getElementById(idtr).getElementsByTagName("tr");
  const lastRow = rows[rows.length - 1];

  // Contoh: Tambahkan event listener atau manipulasi DOM lainnya
  const button = lastRow.querySelector(".button");
  if (button) {
    button.addEventListener("click", () => {
      window.open("https://wa.me/"+value.phone, '_blank');
    });
  }
}
