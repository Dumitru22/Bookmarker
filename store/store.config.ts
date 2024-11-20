import { NgxsConfig } from '@ngxs/store';
import { NgxsDevtoolsOptions } from '@ngxs/devtools-plugin';

import { BookmarkerState } from './bookmarker/bookmarker.state';

export const STATES_MODULES = [BookmarkerState];

export const OPTIONS_CONFIG: Partial<NgxsConfig> = {
  /**
   * Run in development mode. This will add additional debugging features:
   * - Object.freeze on the state and actions to guarantee immutability
   * todo: you need set production mode
   * import { environment } from '@env';
   * developmentMode: !environment.production
   */
  developmentMode: true
};

export const DEVTOOLS_REDUX_CONFIG: NgxsDevtoolsOptions = {
  /**
   * Whether the dev tools is enabled or note. Useful for setting during production.
   * todo: you need set production mode
   * import { environment } from '@env';
   * disabled: environment.production
   */
  disabled: false
};


