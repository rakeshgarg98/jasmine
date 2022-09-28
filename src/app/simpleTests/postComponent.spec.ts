import { PostComponent } from "./postComponent";

describe('Post Component',()=>
{
    //arrange
    let component:PostComponent;


    // only once
    beforeAll(()=>{

    })
    afterAll(()=>{
        component=null;
    })
    beforeEach(()=>{
    component = new PostComponent();
    component.totalLikes=3;
    })
    afterEach(()=>{
        
    })
    
    
    

    it('should increase likes',()=>{
        
        // act
        component.like();
        // assert
        expect(component.totalLikes).toBe(4);
    })
    it('should decrease likes',()=>{
        component.dislike();
        expect(component.totalLikes).toBe(2);

    })
})

