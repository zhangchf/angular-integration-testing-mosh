import { UsersComponent } from './users/users.component';
import { routes } from "./app.routes";

describe('app.routes', () => {
    it('should have a users route', () => {
        expect(routes).toContain({path: 'users', component: UsersComponent});
    })
})