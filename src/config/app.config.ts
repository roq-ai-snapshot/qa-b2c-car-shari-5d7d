interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Fleet Manager'],
  tenantName: 'Company',
  applicationName: 'QA B2C Car sharing',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
