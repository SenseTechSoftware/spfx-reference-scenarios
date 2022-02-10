import {
  BasePrimaryTextCardView,
  IPrimaryTextCardParameters,
  IExternalLinkCardAction,
  IQuickViewCardAction,
  ICardButton
} from '@microsoft/sp-adaptive-card-extension-base';
import * as strings from 'FaqaccordionAdaptiveCardExtensionStrings';
import { AccordionList, FAQ, IFAQ } from '../../../common/models/designtemplate.models';
import { IFaqaccordionAdaptiveCardExtensionProps, IFaqaccordionAdaptiveCardExtensionState, QUICK_VIEW_REGISTRY_ID } from '../FaqaccordionAdaptiveCardExtension';

export class CardView extends BasePrimaryTextCardView<IFaqaccordionAdaptiveCardExtensionProps, IFaqaccordionAdaptiveCardExtensionState> {
  public get cardButtons(): [ICardButton] | [ICardButton, ICardButton] | undefined {
    const accList: AccordionList = this.state.faqApp.cardData as AccordionList;
    const buttonText: string = strings.QuickViewButtonText.replace("___XXXX___", accList.faqs.length.toString());
    return [
      {
        title: buttonText,
        action: {
          type: 'QuickView',
          parameters: {
            view: QUICK_VIEW_REGISTRY_ID
          }
        }
      }
    ];
  }

  public get data(): IPrimaryTextCardParameters {
    return {
      primaryText: strings.PrimaryText,
      description: strings.PrimaryDescription
    };
  }

  public get onCardSelection(): IQuickViewCardAction | IExternalLinkCardAction | undefined {
    return {
      type: 'QuickView',
      parameters: {
        view: QUICK_VIEW_REGISTRY_ID
      }
    };
  }
}
