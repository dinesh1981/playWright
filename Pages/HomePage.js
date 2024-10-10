Export.Login 
class HomePage{

    constructor(page){
     this.page= page;
     this.page.myAccountLink="(//a[@data-bs-toggle='dropdown'])[2]";
     this.page.loginLink="a[href *='login']";
     this.page.emailAddress='#input-email';
     this.page.password='#input-password';
    }

    
}