/*
# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/
'use strict';

gLogContext = 'BG';

browser.runtime.onMessage.addListener((aMessage, aSender) => {
  if (!aMessage ||
      typeof aMessage.type != 'string' ||
      aMessage.type.indexOf('textlink:') != 0)
    return;

  switch (aMessage.type) {
    case kCOMMAND_DOUBLE_CLICK: {
      let result = URIMatcher.matchSingle(aMessage, aMessage.base);
      log('matchSingle result: ', result);
      if (result.uri)
        browser.tabs.create({
          active:      true,
          url:         result.uri,
          windowId:    aSender.tab.windowId,
          openerTabId: aSender.tab.id
        });
      //let text = `${aMessage.preceding}${aMessage.selection}${aMessage.following}`;
      //log('matchAll result: ', URIMatcher.matchAll(text, aMessage.base));
      return Promise.resolve(result);
    }
  }
});
