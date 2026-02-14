export const WHATSAPP_NUMBER = '5547991090590';
export const WHATSAPP_ORDER_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido!`;
export const WHATSAPP_ITEM_LINK = (itemName: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20queria%20pedir%20o%20${encodeURIComponent(itemName)}`;

export const GOOMER_LINK = 'https://azumi-culinaria-oriental.goomer.app/';
export const IFOOD_LINK = 'https://www.ifood.com.br/delivery/joinville-sc/azumi---culinaria-oriental---japonesa---guioza---yakisoba-america/2f394a32-3d04-4248-8b02-400f9431a1ac';
export const INSTAGRAM_LINK = 'https://www.instagram.com/azumi_gun/';
export const INSTAGRAM_HANDLE = '@azumi_gun';
export const GOOGLE_MAPS_LINK = 'https://maps.google.com/?q=Rua+Max+Colin,2093,Joinville';

export const CONTACT = {
  phone: '(47) 99109.0590',
  address: {
    street: 'Rua Max Colin, 2093',
    neighborhood: 'América',
    city: 'Joinville',
    state: 'SC',
  },
  hours: {
    weekday: { days: 'Ter - Sex', time: '18h - 23h' },
    weekend: { days: 'Sáb - Dom', time: '11h - 14h / 18h - 23h' },
  },
};
