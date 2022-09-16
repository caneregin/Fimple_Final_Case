import React, { useContext, useEffect, useRef } from 'react'
import Input from './Input'
import "../Form.css"
import InputContext from '../contexts/InputContext'
import DataContext from '../contexts/DataContext'
import PopUp from './PopUp'

function Form() {
    const loanAmountRef = useRef(null)
    const loanTermRef = useRef(null)
    const interestRateRef = useRef(null)
    const termIntervalRef = useRef(null)
    const kkdfRateRef = useRef(null)
    const bsmvRateRef = useRef(null)
    const { interestType, setInterestType } = useContext(InputContext)
    const { loanAmount, setLoanAmount } = useContext(InputContext)
    const { loanTerm, setLoanTerm } = useContext(InputContext)
    const { interestRate, setInterestRate } = useContext(InputContext)
    const { termInterval, setTermInterval } = useContext(InputContext)
    const { kkdfRate, setKkdfRate } = useContext(InputContext)
    const { bsmvRate, setBsmvRate } = useContext(InputContext)
    const { data, setData } = useContext(DataContext)
    const PopupRef = useRef()

    const saveLoanAmount = () => {
        setLoanAmount(loanAmountRef.current.value)
        setLoanTerm(loanTermRef.current.value)
        setInterestRate((interestRateRef.current.value) * 0.01)
        setTermInterval(termIntervalRef.current.value)
        setKkdfRate((parseFloat(kkdfRateRef.current.value))* 0.01)
        setBsmvRate((parseFloat(bsmvRateRef.current.value))* 0.01)
        PopupRef.current.callChildFunction()
    }

    useEffect(() => {
        setData([])
        if (interestType === "compound") {
            if ((loanAmount && loanTerm && interestRate && termInterval && kkdfRate && bsmvRate) !== null) {
                let tempLoan = loanAmount
                let tempremainingLoan = loanAmount
                for (let i = 0; i < loanTerm; i++) {
                    let termNo = i + 1
                    let termAmount = (loanAmount * ((interestRate * (parseFloat(1) + kkdfRate + bsmvRate)) * (Math.pow((1 + (parseFloat(interestRate * (parseFloat(1) + kkdfRate + bsmvRate)))), loanTerm))) / ((Math.pow((1 + (parseFloat(interestRate * (parseFloat(1) + kkdfRate + bsmvRate)))), loanTerm)) - 1)).toFixed(2)
                    console.log(termAmount)
                    let calculationInterestRate = parseFloat(tempremainingLoan * interestRate).toFixed(2)
                    let calculationKkdfRate = ((calculationInterestRate * (parseFloat(1) + kkdfRate)) - calculationInterestRate).toFixed(2)
                    let calculationBsmvRate = ((calculationInterestRate * (parseFloat(1) + bsmvRate)) - calculationInterestRate).toFixed(2)
                    let mainLoan = parseFloat(termAmount - (calculationInterestRate * (parseFloat(1) + kkdfRate + bsmvRate))).toFixed(2)
                    let remainingLoan = parseFloat(tempremainingLoan - mainLoan).toFixed(2)
                    if (remainingLoan < 1) { remainingLoan = parseFloat(0).toFixed(2) }
                    setData(state => [...state, { termNo: termNo, termAmount: termAmount, mainLoan: mainLoan, remainingLoan: remainingLoan, calculationInterestRate: calculationInterestRate, calculationKkdfRate: calculationKkdfRate, calculationBsmvRate: calculationBsmvRate }])
                    tempLoan = tempLoan - termAmount
                    tempremainingLoan = parseFloat(tempremainingLoan - mainLoan).toFixed(2)
                }
            }
        }
        if (interestType === "simple") {
            if ((loanAmount && loanTerm && interestRate && termInterval && kkdfRate && bsmvRate) !== null) {
                let tempLoan = loanAmount
                let tempremainingLoan = loanAmount
                for (let i = 0; i < loanTerm; i++) {
                    let termNo = i + 1
                    let termAmount = parseFloat((parseFloat(loanAmount) + parseFloat((loanAmount * ((interestRate * (parseFloat(1) + kkdfRate + bsmvRate)))))) / loanTerm).toFixed(2)
                    let calculationInterestRate = parseFloat((loanAmount * interestRate) / loanTerm).toFixed(2)
                    let calculationKkdfRate = ((calculationInterestRate * (parseFloat(1) + kkdfRate)) - calculationInterestRate).toFixed(2)
                    let calculationBsmvRate = ((calculationInterestRate * (parseFloat(1) + bsmvRate)) - calculationInterestRate).toFixed(2)
                    let mainLoan = parseFloat(termAmount - (calculationInterestRate * (parseFloat(1) + kkdfRate + bsmvRate))).toFixed(2)
                    let remainingLoan = parseFloat(tempremainingLoan - mainLoan).toFixed(2)
                    if (remainingLoan < 1) { remainingLoan = parseFloat(0).toFixed(2) }
                    setData(state => [...state, { termNo: termNo, termAmount: termAmount, mainLoan: mainLoan, remainingLoan: remainingLoan, calculationInterestRate: calculationInterestRate, calculationKkdfRate: calculationKkdfRate, calculationBsmvRate: calculationBsmvRate }])
                    tempLoan = tempLoan - termAmount
                    tempremainingLoan = parseFloat(tempremainingLoan - mainLoan).toFixed(2)
                }
            }
        }
    }, [loanAmount, loanTerm, interestRate, termInterval, kkdfRate, bsmvRate, interestType])


    return (
        <div className='main'>
            <div className='form'>
                <div className='form-info'><span className='form-span'>Kâr Oranı Tipi</span></div><div className='form-input'><button className='button-interest-type' onClick={() => setInterestType("compound")} id="compound">{interestType === "compound" ? "compound ✓" : "compound"}</button>&nbsp;&nbsp;
                    <button className='button-interest-type' onClick={() => setInterestType("simple")} id="simple">{interestType === "simple" ? "simple ✓" : "simple"}</button></div><div className='form-clear'></div>
                <div className='form-info'><span className='form-span'>Kredi Tutarı</span></div><div className='form-input'><Input placeholder={"Kredi Tutarı"} ref={loanAmountRef} value="" /></div><div className='form-clear'></div>
                <div className='form-info'><span className='form-span'>Taksit Sayısı</span></div><div className='form-input'><Input placeholder={"Taksit Sayısı"} ref={loanTermRef} value="" /></div><div className='form-clear'></div>
                <div className='form-info'><span className='form-span'>Kâr Oranı</span></div><div className='form-input'><Input placeholder={"Kâr Oranı"} ref={interestRateRef} value="" /></div><div className='form-clear'></div>
                {/* <Input placeholder={"termInterval"} ref={termIntervalRef} value="" /> */}
                <div className='form-info'><span className='form-span'>Taksit aralığı</span></div><div className='form-input'><select ref={termIntervalRef}>
                    <option value="Aylık">Aylık</option>
                    <option value="Haftalık">Haftalık</option>
                    <option value="Yıllık">Yıllık</option>
                </select></div><div className='form-clear'></div>
                <div className='form-info'><span className='form-span'>KKDF Oranı</span></div><div className='form-input'><Input placeholder={"KKDF Oranı"} ref={kkdfRateRef} value="" /></div><div className='form-clear'></div>
                <div className='form-info'><span className='form-span'>BSMV Oranı</span></div><div className='form-input'><Input placeholder={"BSMV Oranı"} ref={bsmvRateRef} value="" /></div><div className='form-clear'></div>
                <div className='form-info'></div><div className='form-input'><button className='button-submit' onClick={saveLoanAmount}>Görüntüle</button></div>
                <PopUp ref={PopupRef} />
            </div>
        </div>
    )
}

export default Form