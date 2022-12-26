const $ = (arg) =>{
    // DOMContentLoaded
    if(typeof arg ==="function"){
        document.addEventListener("DOMContentLoaded",arg)
        return
    }
 
    // Selector CSS
    let elements = [arg]

    if(typeof arg ==="string"){
         elements = document.querySelectorAll(arg)
    }
       
        elements.css = (...args) =>{
            const [property,value] = args
            const isString = typeof property === "string"
                elements.forEach((el)=>{
                    if(isString){
                        el.style[property] = value
                    }else{
                        const entriesCSS=Object.entries(property)
                       entriesCSS.forEach(([property,value])=>{
                            el.style[property] = value
                       })
                    }
                    
                })
                return elements
        }

        elements.on = (event,callback) =>{
            elements.forEach(el =>{
                el.addEventListener(event,callback)
            })
            return elements
        }

        elements.each = (fn) =>{
            elements.forEach((el,index) =>{
                fn(index,el)
            })
            return elements
        }

        elements.fadeIn = (duration = 10) =>{
            elements.forEach((el,index) =>{
             const animation =  el.animate([
                    {
                        opacity:0
                    },
                    {
                        opacity:1
                    }
                ],{
                    duration 
                })
                animation.onfinish = () =>{
                    el.style.opacity = 1
                }
            })
            return elements
        }

        return elements
}

$(()=>{
    $("button")
    .css("background","#09f")
    .css("border","#fff")
    .css({
        padding:"16px",
        borderRadios:"4px"
        })
    .on("click",()=>{
        //alert("HOLA")
        $("#mensaje").fadeIn()
    })

    $("li").each((index,el) =>{
        if(index === 0) $(el).css("color","#09f")
        if(index === 1) $(el).css("color","red")
        if(index === 2) $(el).css("color","green")
    })
})
