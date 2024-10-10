exports.LoginTestPage = class LoginTestPage
{
    constructor(page){
     this.page= page;
    //  this.page.myAccountLink="(//span[@class='d-none d-md-inline'])[3]";
    //  this.page.loginLink="a[href *='login']";
     this.emailAddress='#input-email';
     this.password='#input-password';
     this.loginButton='#form-login .btn-primary';
    }
    
     async gotoLoginPage(){
        // await this.page.goto ('https://demo.opencart.com/en-gb?route=account/login');
         await this.page.goto (process.env.URL);
    }

    async selectLoginLink(userName, password){
    
        console.log("username:"+userName)
        // await this.page.locator(this.myAccountLink).click();
        // await this.page.waitForSelector(this.loginLink);
        // await this.page.locator(this.loginLink).click();
        await this.page.locator(this.emailAddress).fill(userName);
        await this.page.locator(this.password).fill(password);
        await this.page.locator(this.loginButton).click();

    }
}