//lib call
import { getCookie } from "https://cdn.jsdelivr.net/gh/jscroot/cookie@0.0.1/croot.js";
import { redirect } from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.9/croot.js";
import { setInner } from "https://cdn.jsdelivr.net/gh/jscroot/element@0.1.5/croot.js";
import { getJSON,postJSON } from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.7/croot.js";

//internal call
import { backend } from "../url/config.js";

export function main() {
   getJSON(backend.user.data, "login", getCookie("login"), getUserFunction);
}

function getUserFunction(result) {
  if (result.status !== 404) {
    const { name, linkeddevice } = result.data;
    setInner("headerlogoname", name);
    // Simpan ke localStorage
    localStorage.setItem("nama", name);
    if (linkeddevice) {
      setInner("userPoint", "✔️");
      localStorage.setItem("status", "ok");
    }else{
      setInner("userPoint", "❌");
    }
  } 
  else {
    redirect("/login");
  }
}
