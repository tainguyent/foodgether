import { Page } from 'puppeteer';
import logger from '../utils/logger';
import { IScrapedMenuItem } from './interfaces';
import { SupportedSites } from '../constants/enums';
import { identifyShopeeMenu } from './menu';
import { identifyShopeeClosed } from './closed';

export const identifyMenu = async (page: Page, type: SupportedSites)
: Promise<any> => {
  logger.log('info', 'Identifying Menu');
  switch (type) {
    case SupportedSites.SHOPEE:
      return await identifyShopeeMenu(page);
    default:
      throw new Error('Unsupported Site');
  }
};

export const identifyClosed = async (page: Page, type: SupportedSites): Promise<boolean> => {
  switch (type) {
    case SupportedSites.SHOPEE:
      return await identifyShopeeClosed(page);
    default:
      throw new Error('Unsupported Site');
  }
};
