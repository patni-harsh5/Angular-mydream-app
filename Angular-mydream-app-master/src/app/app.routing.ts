import { RouterModule} from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

export const AppRouting = RouterModule.forRoot([
    {path:'portfolio', component: PortfolioComponent},
    {path: 'userdetails/:id', component: UserdetailsComponent}
    ])