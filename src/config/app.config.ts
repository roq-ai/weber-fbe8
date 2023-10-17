interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Researcher', 'Scientist', 'Collaborator', 'Guest User', 'Administrator'],
  tenantName: 'Organization',
  applicationName: 'Weber',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage citation records',
    'Manage patent records',
    'Manage workshop records',
    'Manage conference records',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/ddcad310-b48c-42f4-b5bd-fa1db6926308',
};
