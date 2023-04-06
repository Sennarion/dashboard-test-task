import {
  CustomersList,
  CustomerItem,
  CustomerInfoList,
  CustomerInfoItem,
  Label,
  Info,
  Status,
} from './MobileTable.styled';

export default function MobileTable({ customers }) {
  return (
    <CustomersList>
      {customers.map(({ name, company, phone, email, country, status }) => {
        return (
          <CustomerItem key={phone} isActive={status === 'Active'}>
            <CustomerInfoList>
              <CustomerInfoItem>
                <Label>Customer Name</Label>
                <Info>{name}</Info>
              </CustomerInfoItem>
              <CustomerInfoItem>
                <Label>Company</Label>
                <Info>{company}</Info>
              </CustomerInfoItem>
              <CustomerInfoItem>
                <Label>Phone Number</Label>
                <Info>{phone}</Info>
              </CustomerInfoItem>
              <CustomerInfoItem>
                <Label>Email</Label>
                <Info>{email}</Info>
              </CustomerInfoItem>
              <CustomerInfoItem>
                <Label>Country</Label>
                <Info>{country}</Info>
              </CustomerInfoItem>
              <CustomerInfoItem>
                <Label>Status</Label>
                <Status isActive={status === 'Active'}>{status}</Status>
              </CustomerInfoItem>
            </CustomerInfoList>
          </CustomerItem>
        );
      })}
    </CustomersList>
  );
}
