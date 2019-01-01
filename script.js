document.querySelector('#getEmployee').addEventListener('click',loadEmployee);


function loadEmployee(){

    var loading = document.querySelector('#loading');
    loading.style.display = 'block';

    const xhr = new XMLHttpRequest();

    setTimeout(()=>{

        xhr.onload = function(){
            loading.style.display = 'none';
            if(this.status === 200){
                var employees = JSON.parse(this.responseText);
    
                html='';
                employees.forEach(employee => {
                    html = 
                        `
                        <tr>
                            <td>${employee.firstname}</td>      
                            <td>${employee.lastname}</td>  
                            <td>${employee.age}</td>  
                            <td>${employee.retired}</td> 
                        </tr>           
                        `
                        document.querySelector('#employees').innerHTML += html;
                });
            }
        }
        xhr.open('GET','employees.json',true);
        xhr.send();
    },1000);
}