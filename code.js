"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function createNewText(card, content, fsize, contentwidth, topdist) {
    return __awaiter(this, void 0, void 0, function* () {
        const text = figma.createText();
        yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
        text.characters = content;
        text.fontSize = fsize;
        text.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
        card.appendChild(text);
    });
}
figma.showUI(__html__);
figma.ui.resize(500, 425);
let widval = 0;
figma.ui.onmessage = msg => {
    console.log(msg.data);
    if (msg.type === 'generate') {
        for (let i = 0; i < msg.data.length; i++) {
            const card = figma.createFrame();
            widval = widval + 500;
            card.x = widval;
            card.y = 0;
            card.layoutMode = "VERTICAL";
            card.itemSpacing = 10;
            card.primaryAxisAlignItems = "CENTER";
            card.counterAxisAlignItems = "CENTER";
            card.backgrounds = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
            card.strokes = [{ type: 'SOLID', color: { r: 0.2157, g: 0.4275, b: 0.5647 } }];
            card.strokeWeight = 10;
            card.resize(400, 250);
            createNewText(card, "CERTIFICATE", 28, 190, 50);
            createNewText(card, "OF APPRECIATION", 10, 82, 85);
            createNewText(card, "PROUDLY PRESENTED TO", 5, 80, 100);
            createNewText(card, msg.data[i].name, 24, 130, 105);
            createNewText(card, "on securing " + msg.data[i].position + " position" + " for " + msg.data[i].event, 8, 150, 135);
            createNewText(card, "Conducted By " + msg.data[i].organisation, 12, 150, 155);
        }
    }
    else if (msg.type === 'cancel') {
        figma.closePlugin();
    }
};
