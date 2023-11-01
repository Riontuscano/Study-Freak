// // b1 = document.getElementById("fy1_eng");
// // b1.addEventListener( "click",() => { document.getElementById("display_n_yr1").setAttribute("src", "/media/onlieform.pdf");});
// b1 = document.getElementById("fy1_bsc");
// b1.addEventListener( "click",display(value) => { document.getElementById("display_n_yr1").setAttribute("src", "https://drive.google.com/file/d/13Ly3UGliqpjMIK9xElIZ6A24GfYyTvTS/view");});
// b1 = document.getElementById("fy1_bms");
// b1.addEventListener( "click",() => { document.getElementById("display_n_yr1").setAttribute("src", "/media/onlieform.pdf");});
// b1 = document.getElementById("fy1_egm");
// b1.addEventListener( "click",() => { document.getElementById("display_n_yr1").setAttribute("src", "/media/onlieform.pdf");});
// b1 = document.getElementById("fy1_ami");
// b1.addEventListener( "click",() => { document.getElementById("display_n_yr1").setAttribute("src", "/media/onlieform.pdf");});
// b1 = document.getElementById("fy1_bec");
// b1.addEventListener( "click",() => { document.getElementById("display_n_yr1").setAttribute("src", "/media/onlieform.pdf");});
// b1 = document.getElementById("fy1_wpd");
// b1.addEventListener( "click",() => { document.getElementById("display_n_yr1").setAttribute("src", "/media/onlieform.pdf");});
// b1 = document.getElementById("fy1_bcc");
// b1.addEventListener( "click",() => { document.getElementById("display_n_yr1").setAttribute("src", "/media/onlieform.pdf");});
// b1 = document.getElementById("fy1_pci");
// b1.addEventListener( "click",() => { document.getElementById("display_n_yr1").setAttribute("src", "/media/onlieform.pdf");});
// b1 = document.getElementById("fy1_cph");
// b1.addEventListener( "click",() => { document.getElementById("display_n_yr1").setAttribute("src", "/media/onlieform.pdf");});

function display(value, name) {
  // console.log(value)
  if (name != undefined) {
    document.getElementById("professor").innerHTML = `Professor :- `;
    document.getElementById("professorn").innerHTML = `${name}`;
    document.getElementById("display_n_yr1").setAttribute("src", value);
  }
  else{
    document.getElementById("professor").innerHTML = ``;
    document.getElementById("professorn").innerHTML = ``;
    document.getElementById("display_n_yr1").setAttribute("src", value);
  }
  
}
