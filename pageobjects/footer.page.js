import Page from './page.js';

class FooterPage extends Page {
    
    get twitterLink() { return $('.social_twitter') };

    get facebookLink() { return $('.social_facebook') };

    get linkedinLink() { return $('.social_linkedin') };

    async clickTwitterLink(){
        await this.twitterLink.click();
    }

    async clickFacebookLink(){
        await this.facebookLink.click();
    }

    async clickLinkedinLink(){
        await this.linkedinLink.click();
    }
}




export default FooterPage;

