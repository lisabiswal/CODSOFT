let about = document.querySelector("#about")
    let service = document.querySelector("#service")
    let guest = document.querySelector("#guest")
    let contact = document.querySelector("#contact")

    about.addEventListener("click",(e)=>{
      e.preventDefault()
      document.querySelector("#about-sec").scrollIntoView({
        behavior:"smooth"
      })
    })
    service.addEventListener("click",(e)=>{
      e.preventDefault()
      document.querySelector("#ser-sec").scrollIntoView({
        behavior:"smooth"
      })
    })
    guest.addEventListener("click",(e)=>{
      e.preventDefault()
      document.querySelector("#guest-sec").scrollIntoView({
        behavior:"smooth"
      })
    })
    about.addEventListener("click",(e)=>{
      e.preventDefault()
      document.querySelector("#about-sec").scrollIntoView({
        behavior:"smooth"
      })
    })
    
    