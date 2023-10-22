
const galeria_productos = document.querySelector(".galeria_productos")

const itemboxes = document.querySelectorAll(".itembox")
console.log(itemboxes)

galeria_productos.addEventListener("click", (e)=>{
    console.log(e)

    if(e.target.classList.contains("filter")){
        galeria_productos.querySelector(".active").classList.remove("active");

        e.target.classList.add("active");

        const filterValue = e.target.getAttribute("data-filter");

        console.log(filterValue)

        itemboxes.forEach(item =>{

            if(item.classList.contains(filterValue) || filterValue === "todos"){

                item.classList.add("show");
                item.classList.remove("hide");
            }
            else{
                item.classList.add("hide");
            }
        })

    }
})

