
function openDropdownOne() {     
        document.getElementById('featuresDropdown').classList.toggle('show');
        document.querySelector('.fArrowdown').classList.toggle('hide');
        document.querySelector('.fArrowup').classList.toggle('show');    
}

function openDropdownTwo() {
    document.getElementById('companyDropdown').classList.toggle('show');
    document.querySelector('.cArrowdown').classList.toggle('hide');
    document.querySelector('.cArrowup').classList.toggle('show');
}

window.onclick = e =>{
    if(!e.target.matches('#navLinkFeatures')){
        var DropdownOne = document.getElementById('featuresDropdown');
        
        if(DropdownOne.classList.contains('show')){
            DropdownOne.classList.remove('show');            
            document.querySelector('.fArrowdown').classList.toggle('hide');
             document.querySelector('.fArrowup').classList.toggle('show'); 
        }
        
    }
    if(!e.target.matches('#navLinkCompany')){
        var DropdownTwo = document.getElementById('companyDropdown');
        if(DropdownTwo.classList.contains('show')){
            DropdownTwo.classList.remove('show');
            document.querySelector('.cArrowdown').classList.toggle('hide');
            document.querySelector('.cArrowup').classList.toggle('show');
        }
    }    
}

function toggleMobMenu() {
    let sidebar = document.querySelector('.navs');
    if(!sidebar.classList.contains('flex')){
        sidebar.classList.add('flex');
        document.querySelector('.mob-menu').src ='/images/icon-close-menu.svg';
    } else{
        sidebar.classList.remove('flex');
        document.querySelector('.mob-menu').src ='/images/icon-menu.svg';
    }    
}

document.querySelector('.mob-menu').addEventListener('click', toggleMobMenu);