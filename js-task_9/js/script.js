    let doc=document;
   
    let listInput = doc.querySelector("#todo-input");     
    let listInputValue;
        
    let list = doc.querySelector(".todo-list"); 

    //проверка input
    let checkInput = function() {     
        listInputValue = listInput.value;   
        if (listInputValue.length==0 || listInputValue==" ") {  //доделать проверку
            alert("You must write something!" );
            return;
        } else {
            createList(listInputValue);      
            
        }
    }
    //создание нового пункта
    let createList = function(value) {
        list.insertAdjacentHTML('afterBegin', `<li>
        <div class="form-check"> 
            <label class="form-check-label"> 
                <input class="checkbox" type="checkbox"><span>${value}</span><i class="input-helper"></i>                
            </label> 
        </div> 
        <div class="buttons">
            <i class="edit"></i>
            <i class="remove"></i>
        </div>
        </li>`);
        listInput.value="";
        setTimeout(function() {                    
            list.firstElementChild.classList.add("fade-in");
          }, 200);
        
        removeList(); //срабатывает несколько раз, если есть несколько пунктов списка. Как правильно убрать эту ошибку?
        editList();   
    }

    //удаление элемента списка
    let removeList = function() {
        let removeButton= doc.querySelectorAll(".remove") ; 
        removeButton.forEach(function(element) {           
            element.addEventListener("click", function() {
                this.closest("li").classList.add("fade-out");
                setTimeout(function() {                    
                    element.closest("li").remove();
                }, 500);               
                
            });
                    
        });
    };


    //редактирование нового пункта
    let editList = function() {
        let editButton= doc.querySelectorAll(".edit"); 
        editButton.forEach(function(element) {        
            element.addEventListener("click", function() {
                let parent=this.closest("li");
                let parentSpan=parent.querySelector(".form-check-label span");
                let oldValue=parentSpan.textContent;                
                let newValue = prompt("Редактирование заметки", oldValue);
                if (newValue) {
                    parentSpan.textContent=newValue;
                }   
            } );        
        })
    }

    
    //проверка на ввод Enter
    listInput.addEventListener("keyup", function(event){        
        if (event.keyCode==13) {
            checkInput()          
        }
    });
    doc.querySelector("#add-button").addEventListener("click", checkInput);   



  
 


