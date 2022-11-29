import { IContractWidgetAction } from "./interface";
import { CONTRACT_WIDGET_OPENED, CONTRACT_WIDGET_CLOSED } from "./constants";

const openContractWidget = (): IContractWidgetAction => {
  return {
    type: CONTRACT_WIDGET_OPENED,
  };
};

const closeContractWidget = (): IContractWidgetAction => {
  return {
    type: CONTRACT_WIDGET_CLOSED,
  };
};

export { openContractWidget, closeContractWidget };
