class SinhVien {
    constructor(msv, hovaten, email) 
    {
        this.msv = msv;
        this.hovaten = hovaten;
        this.email = email;
    }
}
var ListSv = [];
var Vi_tri;
function SuaSinhVien(Vi_tri_edit) 
{
    var btsubmit = document.getElementById("submit");
    btsubmit.style.display = "none";
    var btsave = document.getElementById("save");
    btsave.style.display = "inline-block";
    Vi_tri = Vi_tri_edit;
    document.getElementById("ma-sinh-vien").value = ListSv[Vi_tri_edit].msv;
    document.getElementById("ho-va-ten").value = ListSv[Vi_tri_edit].hovaten;
    document.getElementById("email").value = ListSv[Vi_tri_edit].email;
}

function show() {
    for (i = 0; i < ListSv.length; i++) {
        document.getElementById("show").innerHTML += "<input type='checkbox' name = 'delete'>" + ListSv[i].msv + " " + ListSv[i].hovaten + " " + ListSv[i].email + "<button class = 'edit' onclick = 'SuaSinhVien(" + i + ")'>EDIT</button>" + "<br/>";
    }
}

function edit(Vi_tri_edit) 
{
    ListSv[Vi_tri_edit].msv = document.getElementById("ma-sinh-vien").value;
    ListSv[Vi_tri_edit].hovaten = document.getElementById("ho-va-ten").value;
    ListSv[Vi_tri_edit].email = document.getElementById("email").value;
    var btsave = document.getElementById("save");
    btsave.style.display = "none";
    var btsubmit = document.getElementById("submit");
    btsubmit.style.display = "inline-block";
    show();
}

function capnhat() 
{
    document.getElementById("show").innerHTML = "";
    show();
}
window.onload = function() {
    var btsave = document.getElementById("save");
    btsave.style.display = "none";
    var btsubmit = document.getElementById("submit");
    btsubmit.style.display = "inline-block";
    var btsubmit = document.getElementById("submit");
    var btedit = document.getElementById("save");
    btedit.onclick = function(e) 
    {
        edit(Vi_tri);
    }
    btsubmit.onclick = function(e) 
    {
        var msv = document.getElementById("ma-sinh-vien").value;
        var hovaten = document.getElementById("ho-va-ten").value;
        var email = document.getElementById("email").value;
        s = new SinhVien(msv, hovaten, email);
        ListSv.push(s);
        document.getElementById("show").innerHTML += "<input type='checkbox' name = 'delete'>" + s.msv + " " + s.hovaten +  " " + s.email + "<button class = 'edit' onclick = 'SuaSinhVien(" + (ListSv.length-1) + ")'>EDIT</button>" + "<br/>";
        var btdelete = document.getElementById("DELETE");
        btdelete.onclick = function()
        {
            var checkbox = [];
            var deletebox = [];
            var count = 0;
            checkbox = document.getElementsByName("delete");
            for (i = 0; i < checkbox.length; i++) 
            {
                if (checkbox[i].checked == true) 
                {
                    deletebox[count] = i - count;
                    count++;
                }
            }
            for (i = 0; i < deletebox.length; i++) 
            {
                ListSv.splice(deletebox[i],1);
            }
            capnhat();
        }
        e.preventDefault();
    }
    
    show();
    
    console.log(ListSv);
}
