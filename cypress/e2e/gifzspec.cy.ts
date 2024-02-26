import searchRes from '../fixtures/giphy.json';

describe('giphy app', () => {
    beforeEach( ()=>{
        cy.intercept('https://api.giphy.com/v1/gifs/search?api_key=lflyzKL8Q7Nv1MdqW4hmUmPfYKFBgKI9&limit=10&q=hello', searchRes).as('searchGiphy');
        cy.intercept('https://api.giphy.com/v1/gifs/trending?api_key=lflyzKL8Q7Nv1MdqW4hmUmPfYKFBgKI9&limit=10', searchRes).as('trendingGiphy')
        cy.visit('http://localhost:3000');
    })
    it('should display search box and trending button by default', () => {
        cy.get('[data-testid="searchbox"]').should('have.length', 1);
        cy.get('[data-testid="searchBtn"]').should('have.length', 1);
        cy.get('[data-testid="trendingBtn"]').should('have.length', 1);
    });
    it('should be able to search', () => {
        const searchText = 'hello';
        cy.get('[data-testid="searchbox"]').type(`${searchText}`);
        cy.get('[data-testid="searchBtn"]').click();
        cy.wait('@searchGiphy');
        cy.get('[data-testid="search-img"]').should('have.length', 10);
    });
    it('should be able to access trending', () => {
        cy.get('[data-testid="trendingBtn"]').click();
        cy.wait('@trendingGiphy');
        cy.get('[data-testid="trending-img"]').should('have.length', 10);
    });

    it('should be able to navigate back to home', () => {
        cy.get('[data-testid="trendingBtn"]').click();
        cy.get('[data-testid="gifs"]').click();
        cy.get('[data-testid="searchbox"]').should('have.length', 1);
    });
});