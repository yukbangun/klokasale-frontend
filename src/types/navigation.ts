import { Navigation } from 'src/constants/navigation';
import { MasterNavigation } from 'src/constants/navigation/master';

export type TNavigation = Navigation.Pos | `${Navigation.Master}/${MasterNavigation}`;
