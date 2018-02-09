// jest는 기본적으로 __test__ 폴더에 있는 js를 테스트 수행한다.
import sum from '../sum';
jest.autoMockOff();
describe('sum', function() {
    it('adds 1+2 equal 3', function() {
        expect(sum(1,2)).toBe(3);
    });
})
