import { CompanyAccount } from './class/CompanyAccount';
import { PartnerAccount } from './class/PartnerAccount';
import { PeopleAccount } from './class/PeopleAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Janilso', 1245);
peopleAccount.deposit(100);
peopleAccount.withdraw(5);

console.log('');
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 6568655);
companyAccount.withdraw(50);
companyAccount.deposit(100);
companyAccount.withdraw(50);
companyAccount.getLoan(500);
console.log(companyAccount.getBalance());

console.log('');
const partnerAccount: PartnerAccount = new PartnerAccount('Partner', 32556);
partnerAccount.withdraw(50);
partnerAccount.deposit(100);
console.log(partnerAccount.getBalance());
