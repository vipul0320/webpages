function saveData(){
    let name,email,pass;
    name=document.getElementById('uname').value;
    email=document.getElementById('uemail').value;
    pass=document.getElementById('pass').value;
    let data = document.getElementById('myData');
    data.innerHTML= `
            <li> ${name}</li>
            <li> ${email}</li>
            <li> ${pass}</li> `;
    document.getElementById('uname').value="";
    document.getElementById('uemail').value="";
    document.getElementById('pass').value="";
    document.getElementById('res').innerHTML+= `
                                                <tr>
                                                    <td> ${name}</td>
                                                    <td> ${email}</td>
                                                    <td> ${pass}</td>
                                                </tr>
                                                
    
    
    
                                                `
}