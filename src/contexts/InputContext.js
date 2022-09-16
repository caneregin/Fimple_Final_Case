import { createContext, useState } from "react";

const InputContext = createContext()

export const InputProvider = ({ children }) => {
    const [interestType, setInterestType] = useState("compound")
    const [loanAmount, setLoanAmount] = useState("")
    const [loanTerm, setLoanTerm] = useState("")
    const [interestRate, setInterestRate] = useState("")
    const [termInterval, setTermInterval] = useState("")
    const [kkdfRate, setKkdfRate] = useState("")
    const [bsmvRate, setBsmvRate] = useState("")
    const [data, setData] = useState([])
    const values = {
        interestType,
        setInterestType,
        loanAmount,
        setLoanAmount,
        loanTerm,
        setLoanTerm,
        interestRate,
        setInterestRate,
        termInterval,
        setTermInterval,
        kkdfRate,
        setKkdfRate,
        bsmvRate,
        setBsmvRate,
        data,
        setData
    }
    return <InputContext.Provider value={values}>{children}</InputContext.Provider>
}
export default InputContext