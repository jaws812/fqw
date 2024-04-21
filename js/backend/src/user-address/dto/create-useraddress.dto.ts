export class CreateUserAddressDto {
  readonly idUser: number;
  readonly addrIndex: string;
  readonly addrCity: string;
  readonly addrSreet: string;
  readonly addrHouse: string;
  readonly addrStructure?: string;
  readonly addrApart?: string;
}
