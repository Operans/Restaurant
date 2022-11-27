

let root = document.documentElement;
root.style.setProperty("--burger", "none")

$("#menu-btn").on("click", (e) => {
    console.log(root.style.getPropertyValue("--burger"))
    if(root.style.getPropertyValue("--burger") == "none"){
        root.style.setProperty("--burger", "block")
    }else{
        root.style.setProperty("--burger", "none")
    }
   
})