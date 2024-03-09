import { useEffect, useMemo, useState } from "react";
import { metaic } from "../actor/index";
import { resultFormat } from "../utils";
import { Page, PriceInfo } from "../candid/metaic";

export function useMetaic() {
  const [priceInfo, setPriceInfo] = useState<PriceInfo | undefined>(undefined);

  useEffect(() => {
    async function call() {
      const result = await metaic.query_price_history(BigInt(0), BigInt(1));

      if (result) {
        const data = resultFormat<Page>(result).data;
        if (data) {
          setPriceInfo(data.content[0]);
        }
      }
    }

    call();
  }, []);

  return useMemo(() => ({ result: priceInfo }), [priceInfo]);
}
