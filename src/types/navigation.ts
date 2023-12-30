import { ENavigation } from 'src/constants/navigation';
import { EMasterNavigation } from 'src/constants/navigation/master';

export type TNavigation = ENavigation.Pos | `${ENavigation.Master}/${EMasterNavigation}`;
