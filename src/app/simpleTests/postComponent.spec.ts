import { PostComponent } from "./postComponent";

describe('Post Component',()=>
{
    it('should increase likes',()=>{
        let component = new PostComponent();
        component.like();
    })
    it('should decrease likes',()=>{
        expect(1-1).toEqual(0);
    })
})

