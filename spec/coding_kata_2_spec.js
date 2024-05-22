describe('Coding Kata 2', function () {
    beforeEach(function () {
        electrons = new Electrons();
    });

    it('Should return 6 for given array', function() {
        expect(electrons.solve(1, 2, 3, 4, 5))
            .toEqual(6);
    });
});
