describe('First Test',()=>{
    it('should pass',()=>{
        expect(1+1).toEqual(2);
    })
})

describe('Second Test',()=>{
    it('should fail',()=>{
        expect(1-1).toEqual(0);
    })
})