import { useRecoilValue } from "recoil";
import { balanceAtom } from "../atoms/balance.js"

export function useBalance(){
    const balance=useRecoilValue(balanceAtom)
    return balance;
}