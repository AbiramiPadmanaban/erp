import { getCustomers } from "@/lib/api/customers";
import { CustomerPage } from "./customer-page";

export default async function Page() {
  const data = await getCustomers();

  return <CustomerPage data={data} />;
}
