
function setModal(projectName, projectYear) {
  document.getElementById("tab-wrapper").innerHTML = ""; 
  var arr = setObject(projectName);
  document.querySelector(".modal h1").innerHTML = projectName; 
  document.querySelector(".modal h2").innerHTML = projectYear; 
  var counter = 0;
  var tabHtml = `<div class="tab">`;
  arr.forEach(function(object) {
    tabHtml +=
    `<button class="tablinks" onclick="openTab(event, '${object.id}')" 
    id="${(counter == 0 ? 'defaultOpen' : '')}">${object.name}</button>
    `;
    if(object.hr)
    tabHtml += `<hr>`;
    counter++;
  });
  tabHtml += `</div>`;

  var tabContent = "";
  arr.forEach(function(object) {
    tabContent +=
    `<div id="${object.id}" class="tabcontent">
      <div class="${object.divClass}">
      <img src="${object.img}" alt="img">
      </div>
    </div>
    `;
  });

  var innerHtml = tabHtml + tabContent;
  document.getElementById("tab-wrapper").innerHTML = innerHtml; 
  document.getElementById("defaultOpen").click();
  toggleModal();
}

function setObject(projectType) {
  var arr = [];
  switch (projectType) {
    case "School Admission System":
      var obj = new Object();
      obj.id = "Home";
      obj.name = "Home";
      obj.divClass = "";
      obj.img = "./img/projects/AdmissionSystem/Home.png";
      obj.hr = false;
      arr.push(obj);

      var obj = new Object();
      obj.id = "History";
      obj.name = "History";
      obj.divClass = "noScroll";
      obj.img = "./img/projects/AdmissionSystem/History.png";
      obj.hr = false;
      arr.push(obj);

      var obj = new Object();
      obj.id = "Courses";
      obj.name = "Courses";
      obj.divClass = "noScroll";
      obj.img = "./img/projects/AdmissionSystem/Courses.png";
      obj.hr = false;
      arr.push(obj);

      var obj = new Object();
      obj.id = "Events";
      obj.name = "Events";
      obj.divClass = "";
      obj.img = "./img/projects/AdmissionSystem/Events.png";
      obj.hr = false;
      arr.push(obj);
    
      var obj = new Object();
      obj.id = "Admission";
      obj.name = "Admission";
      obj.divClass = "";
      obj.img = "./img/projects/AdmissionSystem/Admission.png";
      obj.hr = false;
      arr.push(obj);
    
      var obj = new Object();
      obj.id = "Contact";
      obj.name = "Contact";
      obj.divClass = "noScroll";
      obj.img = "./img/projects/AdmissionSystem/Contact.png";
      obj.hr = true;
      arr.push(obj);
    
      var obj = new Object();
      obj.id = "Login";
      obj.name = "Login";
      obj.divClass = "noScroll";
      obj.img = "./img/projects/AdmissionSystem/Admin/Login.png";
      obj.hr = false;
      arr.push(obj); 

      var obj = new Object();
      obj.id = "AdminHome";
      obj.name = "Admin Home";
      obj.divClass = "noScroll";
      obj.img = "./img/projects/AdmissionSystem/Admin/AdminHome.png";
      obj.hr = false;
      arr.push(obj); 
    
      var obj = new Object();
      obj.id = "AdminCourses";
      obj.name = "Admin Courses";
      obj.divClass = "noScroll";
      obj.img = "./img/projects/AdmissionSystem/Admin/AdminCourses.png";
      obj.hr = false;
      arr.push(obj); 
    
      var obj = new Object();
      obj.id = "AdminEvents";
      obj.name = "Admin Events";
      obj.divClass = "noScroll";
      obj.img = "./img/projects/AdmissionSystem/Admin/AdminEvents.png";
      obj.hr = false;
      arr.push(obj); 

      var obj = new Object();
      obj.id = "AdminApproval";
      obj.name = "Admin Approval";
      obj.divClass = "";
      obj.img = "./img/projects/AdmissionSystem/Admin/AdminApproval.png";
      obj.hr = false;
      arr.push(obj);

      var obj = new Object();
      obj.id = "AdminUser";
      obj.name = "User Maintenance";
      obj.divClass = "noScroll";
      obj.img = "./img/projects/AdmissionSystem/Admin/AdminUsers.png";
      obj.hr = false;
      arr.push(obj);

    break;
    case "Lead Affiliate Website":
      var obj = new Object();
      obj.id = "Login";
      obj.name = "Login";
      obj.divClass = "noScroll";
      obj.img = "./img/projects/LeadAffiliate/Login.png";
      obj.hr = false;
      arr.push(obj);

      var obj = new Object();
      obj.id = "Dashboard";
      obj.name = "Dashboard";
      obj.divClass = "";
      obj.img = "./img/projects/LeadAffiliate/Dashboard.png";
      obj.hr = true;
      arr.push(obj);

      var obj = new Object();
      obj.id = "ResearcherDuplicates";
      obj.name = "Researcher Duplicates";
      obj.divClass = "";
      obj.img = "./img/projects/LeadAffiliate/Researcher-Duplicates.png";
      obj.hr = false;
      arr.push(obj);

      var obj = new Object();
      obj.id = "ResearcherAdded";
      obj.name = "Researcher Added";
      obj.divClass = "";
      obj.img = "./img/projects/LeadAffiliate/Researcher-Added.png";
      obj.hr = false;
      arr.push(obj);

      var obj = new Object();
      obj.id = "ResearcherInvalid";
      obj.name = "Researcher Invalid";
      obj.divClass = "";
      obj.img = "./img/projects/LeadAffiliate/Researcher-Invalid.png";
      obj.hr = true;
      arr.push(obj);

      var obj = new Object();
      obj.id = "QA_Duplicates";
      obj.name = "QA Duplicates";
      obj.divClass = "";
      obj.img = "./img/projects/LeadAffiliate/QA-Duplicates.png";
      obj.hr = false;
      arr.push(obj);

      var obj = new Object();
      obj.id = "QA_Approval";
      obj.name = "QA Approval";
      obj.divClass = "noScroll";
      obj.img = "./img/projects/LeadAffiliate/QA-Approval.png";
      obj.hr = false;

      arr.push(obj);
      var obj = new Object();
      obj.id = "QA_MassApproval";
      obj.name = "QA Mass Approval";
      obj.divClass = "noScroll";
      obj.img = "./img/projects/LeadAffiliate/QA-MassApproval.png";
      obj.hr = true;
      arr.push(obj);

      var obj = new Object();
      obj.id = "Reports";
      obj.name = "Reports";
      obj.divClass = "noScroll";
      obj.img = "./img/projects/LeadAffiliate/Reports.png";
      obj.hr = false;
      arr.push(obj);

      var obj = new Object();
      obj.id = "LeadMasterlist";
      obj.name = "Lead Masterlist";
      obj.divClass = "noScroll";
      obj.img = "./img/projects/LeadAffiliate/LeadMasterlist.png";
      obj.hr = false;
      arr.push(obj);

      var obj = new Object();
      obj.id = "UserMaintenance";
      obj.name = "User Maintenance";
      obj.divClass = "noScroll";
      obj.img = "./img/projects/LeadAffiliate/UserMaintenance.png";
      obj.hr = false;
      arr.push(obj);
    break;
    case "HELPDESK":
 
      var obj = new Object();
      obj.id = "FloatingButton";
      obj.name = "Floating Button";
      obj.divClass = "noScroll";
      obj.img = "./img/projects/Helpdesk/FloatingButton.png";
      obj.hr = false;
      arr.push(obj);

      var obj = new Object();
      obj.id = "ClientSendMessage";
      obj.name = "Client Send Message";
      obj.divClass = "noScroll";
      obj.img = "./img/projects/Helpdesk/ClientSendMessage.png";
      obj.hr = false;
      arr.push(obj);

      var obj = new Object();
      obj.id = "ClientReportIssue";
      obj.name = "Client Report Issue";
      obj.divClass = "";
      obj.img = "./img/projects/Helpdesk/ClientReportIssue.png";
      obj.hr = false;
      arr.push(obj);
      
      var obj = new Object();
      obj.id = "ClientFAQ";
      obj.name = "Client FAQ";
      obj.divClass = "noScroll";
      obj.img = "./img/projects/Helpdesk/ClientFAQ.png";
      obj.hr = true;
      arr.push(obj);

      var obj = new Object();
      obj.id = "Login";
      obj.name = "Login";
      obj.divClass = "noScroll";
      obj.img = "./img/projects/Helpdesk/Login.png";
      obj.hr = false;
      arr.push(obj);

      var obj = new Object();
      obj.id = "AdminMessage";
      obj.name = "Messages (Admin)";
      obj.divClass = "noScroll";
      obj.img = "./img/projects/Helpdesk/AdminMessage.png";
      obj.hr = false;
      arr.push(obj);

      var obj = new Object();
      obj.id = "AdminIssues";
      obj.name = "Issues (Admin)";
      obj.divClass = "";
      obj.img = "./img/projects/Helpdesk/AdminIssues.png";
      obj.hr = false;
      arr.push(obj);

      var obj = new Object();
      obj.id = "AdminFAQ";
      obj.name = "FAQ (Admin)";
      obj.divClass = "";
      obj.img = "./img/projects/Helpdesk/AdminFAQ.png";
      obj.hr = false;
      arr.push(obj);

      var obj = new Object();
      obj.id = "UserMaintenance";
      obj.name = "User Maintenance";
      obj.divClass = "noScroll";
      obj.img = "./img/projects/Helpdesk/UserMaintenance.png";
      obj.hr = false;
      arr.push(obj);
    break;
    case "AUTODIALER":
      var obj = new Object();
      obj.id = "Login";
      obj.name = "Login";
      obj.divClass = "noScroll";
      obj.img = "./img/projects/Autodialer/Login.png";
      obj.hr = true;
      arr.push(obj);

      var obj = new Object();
      obj.id = "Autodialer";
      obj.name = "Autodialer";
      obj.divClass = "noScroll";
      obj.img = "./img/projects/Autodialer/Autodialer.png";
      obj.hr = true;
      arr.push(obj);      

      var obj = new Object();
      obj.id = "Upload";
      obj.name = "Upload";
      obj.divClass = "noScroll";
      obj.img = "./img/projects/Autodialer/Upload.png";
      obj.hr = false;
      arr.push(obj);      

      var obj = new Object();
      obj.id = "UserMaintenance";
      obj.name = "User Maintenance";
      obj.divClass = "noScroll";
      obj.img = "./img/projects/Autodialer/UserMaintenance.png";
      obj.hr = false;
      arr.push(obj);      

      var obj = new Object();
      obj.id = "UserSettings";
      obj.name = "User Settings";
      obj.divClass = "noScroll";
      obj.img = "./img/projects/Autodialer/UserSettings.png";
      obj.hr = false;
      arr.push(obj);      
    break;
  
    default:
      break;
  }

  return arr;

}