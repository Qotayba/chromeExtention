let myLeads=[];

const inputBtn=document.getElementById("save-btn");
const inputEl=document.getElementById("input-el");
const ulEl=document.getElementById("ul-el");
const leadsFromLS=JSON.parse(localStorage.getItem("myLeads") ) ;
const deleteBtn=document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");


tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})
deleteBtn.addEventListener("click",function(){
    localStorage.clear();
    myLeads=[];
    render(myLeads);
})
if (leadsFromLS){
    myLeads=leadsFromLS;
    render(myLeads);
}

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value);
    inputEl.value="";
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    render(myLeads);
    
})
function render(leads) {
    
    listItems="";
    for (let i = 0; i < leads.length; i++) {
        listItems+=`<li>
        <a href='${leads[i]}' target="_blank">${leads[i]}</a>
        </li>`;
        
    }
    ulEl.innerHTML=(listItems);
    
}

