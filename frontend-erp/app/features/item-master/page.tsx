import { ItemPage } from "./item-page";
import { getItems } from "@/lib/api/items";
export default async function Page() {
  const data = await getItems();

  return <ItemPage data={data} />;
}
