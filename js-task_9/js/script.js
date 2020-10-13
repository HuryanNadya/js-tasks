    let doc=document;
   
    let listInput = doc.querySelector("#todo-input");     
    let listInputValue;

        
    let list = doc.querySelector(".todo-list");
   


    listInput.addEventListener("keyup", function(event){
        listInputValue = listInput.value;
        if (event.keyCode==13) {
            (checkInput()) ? createList(listInputValue) : "";            
        }
    });

    //создание нового пункта
    let createList = function(value) {
            
        list.insertAdjacentHTML('beforeEnd', `<li>
        <div class="form-check"> 
            <label class="form-check-label"> 
                <input class="checkbox" type="checkbox">${value}<i class="input-helper"></i>
            </label> 
        </div> 
        <i class="remove"></i>
        </li>            
        
        
        `);
        listInput.value="";       
    }

    //проверка input
    let checkInput = function() {        
        if (listInputValue.length==0 || listInputValue==" ") {  //доделать проверку
            alert("Введите не пустое значение" );
            return false;
        } else {
            return true;
        }
    }

    let listItem=list.querySelectorAll(".form-check-label");
    for (let i=0; i<listItem.length; i++) {
        listItem[i].addEventListener("click", function() {
            let parent = this.closest("li");          
            parent.classList.toggle("completed");
        })
    }
    // listItem.forEach(function(element) {
    //     element.addEventListener("click", function() {
    //         console.log(this);
    //     })
       
    // })


  
 


