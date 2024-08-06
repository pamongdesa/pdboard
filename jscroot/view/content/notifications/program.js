import { onClick,getValue,setValue,hide,show,onInput } from "https://cdn.jsdelivr.net/gh/jscroot/element@0.1.7/croot.js";
import {validatePhoneNumber} from "https://cdn.jsdelivr.net/gh/jscroot/validate@0.0.2/croot.js";
import {postJSON} from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.7/croot.js";
import {getCookie} from "https://cdn.jsdelivr.net/gh/jscroot/cookie@0.0.1/croot.js";
import {addCSSIn} from "https://cdn.jsdelivr.net/gh/jscroot/element@0.1.5/croot.js";
import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11/src/sweetalert2.js';
import { id, backend } from "/dashboard/jscroot/url/config.js";

export async function main(){
    await addCSSIn("https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.css",id.content);
    onInput('phone', validatePhoneNumber);
    onClick("tombolprogramtask",actionfunctionname);
}


function actionfunctionname(){
    let lap={
        to:getValue("phone"),
        isgroup:true,
        messages:getValue("solusi"),
    };
    postJSON(backend.wa.text,"token",getCookie("login"),lap,responseFunction);
    hide("tombolprogramtask");
}

function responseFunction(result){
    if(result.status === 200){
        Swal.fire({
            icon: "success",
            title: "Berhasil",
            text: "Pesan berhasil dikirim pada "+result.data.Timestamp+" sudah tersimpan dengan kode: "+result.data.ID,
            didClose: () => {
                setValue("phone","");
                setValue("solusi","");
                show("tombolprogramtask");
            }
          });
    }else{
        Swal.fire({
            icon: "error",
            title: "Gagal Mengirim Pesan",
            text: result.data.error
          });
          show("tombolprogramtask");
    }
    console.log(result);
}