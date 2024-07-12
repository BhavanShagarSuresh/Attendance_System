const sessions=document.getElementById("session");
        const buttons=document.querySelectorAll(".button")
        const att_temp=document.getElementById("attendance_temp-session")
        buttons.forEach((button)=>{
            button.addEventListener("click",()=>{
                sessions.style.display='none';
                att_temp.style.display='block';
            })
        })

    