
const chai = require*('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

describe('Verificar se os elementos estão corretos', () => {
    
    it('Verificar se o título está correto', () => {
        browser.url('http://127.0.0.1:5500/');
        const title = browser.getTitle();
        expect(title).to.be.a('string').and.equal('Log in');
    });
    
    it('Verificar se os prompts estão corretos', () => {
        browser.url('http://127.0.0.1:5500/');
  
        const link = $('a= Desejo criar minha conta');
        link.click();
  
        browser.execute(() => {
            window.prompt = () => 'test value';
        });
  
        browser.pause(5000);
  
        const nome = browser.execute(() => window.nome);
        const email = browser.execute(() => window.email);
        const senha = browser.execute(() => window.senha);
  
        expect(nome).to.be.a('string');
        expect(email).to.be.a('string');
        expect(senha).to.be.a('string');
    });
});