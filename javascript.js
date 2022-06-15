function getId(btn) {
    // alert(btn.id);
    let num = btn.id.slice(-1);

    // console.log("num:", num)
    
    let txtid = "q" + num;

    let textblock = document.getElementById(txtid);
    
    // console.log("textblock:", textblock, typeof(textblock))

    if(textblock.style.display === "none") {
        textblock.style.display = "block"
    } else {
        textblock.style.display = "none";
    }
}

