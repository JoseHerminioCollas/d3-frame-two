/* eslint indent: "off" */
import { StateInterface } from './state';

enum ActionTypes {
  SHOW_INFO = 'SHOW_INFO',
  HIDE_INFO = 'HIDE_INFO',
  SET_CHART_TYPE = 'SET_CHART_TYPE',
  SET_CHART_SYMBOL_TYPE = 'SET_CHART_SYMBOL_TYPE',
  SET_THEME = 'SET_THEME',
  SET_ICON_NODES = 'SET_ICON_NODES',
  SET_IS_DRAWN = 'SET_IS_DRAWN',
}
export { ActionTypes as actionTypes };

export interface ShowInfoInterface {
  type: typeof ActionTypes.SHOW_INFO
}
export interface HideInfoInterface {
  type: typeof ActionTypes.HIDE_INFO
}
export interface SetChartTypeInterface {
  type: ActionTypes.SET_CHART_TYPE
  chartType: string
}
export interface SetChartSymbolType {
  type: ActionTypes.SET_CHART_SYMBOL_TYPE
  symbol: string
}
export interface SetThemeInterface {
  type: ActionTypes.SET_THEME
  theme: string
}
export interface SetIconNodes {
  type: ActionTypes.SET_ICON_NODES
  iconNodes: object[]
}
export interface SetIsDrawnInterface {
  type: ActionTypes.SET_IS_DRAWN
  isDrawn: boolean
}
export type AppActionsUnionInterface =
  | ShowInfoInterface
  | HideInfoInterface
  | SetChartTypeInterface
  | SetChartSymbolType
  | SetThemeInterface
  | SetIconNodes
  | SetIsDrawnInterface;

export interface DispatchInterface {
  (arg0: AppActionsUnionInterface): void
}
function reducer(state: StateInterface, action: AppActionsUnionInterface): StateInterface {
  switch (action.type) {
    case ActionTypes.SHOW_INFO:
      return { ...state, isInfoVisible: true };
    case ActionTypes.HIDE_INFO:
      return { ...state, isInfoVisible: false };
    case ActionTypes.SET_CHART_TYPE:
      return { ...state, chartType: action.chartType };
    case ActionTypes.SET_CHART_SYMBOL_TYPE:
      return { ...state, chartSymbolType: action.symbol };
    case ActionTypes.SET_THEME:
      return { ...state, theme: action.theme };
    case ActionTypes.SET_ICON_NODES:
      return {
        ...state,
        iconNodes: {
          nodes: action.iconNodes, isDrawn: false,
        },
      };
    case ActionTypes.SET_IS_DRAWN:
      return {
        ...state,
        iconNodes: {
          isDrawn: action.isDrawn,
          nodes: state.iconNodes,
        },
      };
    default:
      throw new Error('Error: Action type does not exist');
  }
}
export default reducer;
