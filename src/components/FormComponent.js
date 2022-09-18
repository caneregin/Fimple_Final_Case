import React, { useContext, useEffect, useRef } from 'react'
import Input from './Input'
import "../Form.css"
import InputContext from '../contexts/InputContext'
import DataContext from '../contexts/DataContext'
import PopUp from './PopUp'
import { Formik, Form } from "formik"
import * as Yup from "yup"

function FormComponent() {
    // ***** TANIMLAMALAR *****

    // input verileri için useRef tanımlamaları
    const loanAmountRef = useRef("")
    const loanTermRef = useRef("")
    const interestRateRef = useRef("")
    const termIntervalRef = useRef(null)
    const kkdfRateRef = useRef("")
    const bsmvRateRef = useRef("")
    // React Context tanımlamaları - veriler bu şekilde kaydedilip güncelleniyor
    const { interestType, setInterestType } = useContext(InputContext)
    const { loanAmount, setLoanAmount } = useContext(InputContext)
    const { loanTerm, setLoanTerm } = useContext(InputContext)
    const { interestRate, setInterestRate } = useContext(InputContext)
    const { termInterval, setTermInterval } = useContext(InputContext)
    const { kkdfRate, setKkdfRate } = useContext(InputContext)
    const { bsmvRate, setBsmvRate } = useContext(InputContext)
    const { data, setData } = useContext(DataContext)
    const {totalPayment, setTotalPayment} = useContext(DataContext)
    const {totalInterest, setTotalInterest} = useContext(DataContext)
    const PopupRef = useRef()

    // Görüntüle butonuna tıklandığında girilen değerler kaydediliyor
    // useEffect çalışmasıyla beraber Popup açılıyor ve sonuç gösteriliyor
    // Popup farklı bir componentte ve oradaki fonksiyon şu anki componentten çalıştırılıyor.
    const saveLoanAmount = () => {
        setLoanAmount(loanAmountRef.current.value)
        setLoanTerm(loanTermRef.current.value)
        setInterestRate((interestRateRef.current.value) * 0.01)
        setTermInterval(termIntervalRef.current.value)
        setKkdfRate((parseFloat(kkdfRateRef.current.value)) * 0.01)
        setBsmvRate((parseFloat(bsmvRateRef.current.value)) * 0.01)
        PopupRef.current.callChildFunction()
    }
    // Görüntüle butona tıklanıp veriler kaydedilince useEffect tetiklenmiş oluyor ve hesaplama yapıyor.
    useEffect(() => {
        // veriler üst üste kaydedilmesin diye her tıklamada önceki değerler siliniyor
        setData([])
        // Compound seçiliyse buradaki formul aracılığıyla hesaplama yapılıyor.
        if (interestType === "compound") {
            if ((loanAmount && loanTerm && interestRate && termInterval && kkdfRate && bsmvRate) !== null) {
                let tempLoan = loanAmount
                let tempremainingLoan = loanAmount
                for (let i = 0; i < loanTerm; i++) {
                    let termNo = i + 1
                    let termAmount = (loanAmount * ((interestRate * (parseFloat(1) + kkdfRate + bsmvRate)) * (Math.pow((1 + (parseFloat(interestRate * (parseFloat(1) + kkdfRate + bsmvRate)))), loanTerm))) / ((Math.pow((1 + (parseFloat(interestRate * (parseFloat(1) + kkdfRate + bsmvRate)))), loanTerm)) - 1)).toFixed(2)
                    let calculationInterestRate = parseFloat(tempremainingLoan * interestRate).toFixed(2)
                    let calculationKkdfRate = ((calculationInterestRate * (parseFloat(1) + kkdfRate)) - calculationInterestRate).toFixed(2)
                    let calculationBsmvRate = ((calculationInterestRate * (parseFloat(1) + bsmvRate)) - calculationInterestRate).toFixed(2)
                    let mainLoan = parseFloat(termAmount - (calculationInterestRate * (parseFloat(1) + kkdfRate + bsmvRate))).toFixed(2)
                    let remainingLoan = parseFloat(tempremainingLoan - mainLoan).toFixed(2)
                    if (remainingLoan < 1) { remainingLoan = parseFloat(0).toFixed(2) }
                    let totalPayment = parseFloat(termAmount*loanTerm).toFixed(2)
                    let totalInterest = parseFloat(totalPayment - loanAmount).toFixed(2)
                    setTotalPayment(totalPayment)
                    setTotalInterest(totalInterest)
                    setData(state => [...state, { termNo: termNo, termAmount: termAmount, mainLoan: mainLoan, remainingLoan: remainingLoan, calculationInterestRate: calculationInterestRate, calculationKkdfRate: calculationKkdfRate, calculationBsmvRate: calculationBsmvRate }])
                    tempLoan = tempLoan - termAmount
                    tempremainingLoan = parseFloat(tempremainingLoan - mainLoan).toFixed(2)
                    // Aylıktan Yıllığa Çevirme Formülü Bileşik Kâr Oranı = (((1+((interestRate)*(kkdfRate)*(bsmvRate)))^12)-1)
                    // Yıllıktan Aylığa Çevirme Formülü Bileşik Kâr Oranı = (((1+((interestRate)*(kkdfRate)*(bsmvRate)))^(1/12))-1)
                    // Aylıktan Haftalığa Çevirme Formülü Bileşik Kâr Oranı = (((1+((interestRate)*(kkdfRate)*(bsmvRate)))^(1/4.28))-1)
                }
            }
        }
        // Simple seçiliyse buradaki formul aracılığıyla hesaplama yapılıyor.
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
                    let totalPayment = parseFloat(termAmount*loanTerm).toFixed(2)
                    let totalInterest = parseFloat(totalPayment - loanAmount).toFixed(2)
                    setTotalPayment(totalPayment)
                    setTotalInterest(totalInterest)
                    setData(state => [...state, { termNo: termNo, termAmount: termAmount, mainLoan: mainLoan, remainingLoan: remainingLoan, calculationInterestRate: calculationInterestRate, calculationKkdfRate: calculationKkdfRate, calculationBsmvRate: calculationBsmvRate }])
                    tempLoan = tempLoan - termAmount
                    tempremainingLoan = parseFloat(tempremainingLoan - mainLoan).toFixed(2)
                }
            }
        }
    }, [loanAmount, loanTerm, interestRate, termInterval, kkdfRate, bsmvRate, interestType])
    // Form doğrulama kuralları
    const validate = Yup.object({
        loanAmount: Yup.number().moreThan(1000, "En az 1000 girebilirsiniz").lessThan(999999999999, "Lütfen değeri azaltınız").required("Boş geçilemez"),
        loanTerm: Yup.number().moreThan(0, "En az 1 taksit girebilirsiniz").lessThan(241, "Lütfen değeri azaltınız").required("Boş geçilemez"),
        interestRate: Yup.number().moreThan(0, "En az 1 Kâr Oranı girebilirsiniz").lessThan(500, "Lütfen değeri azaltınız").required("Boş geçilemez"),
        kkdfRate: Yup.number().moreThan(-1, "En az 0 KKDF girebilirsiniz").lessThan(500, "Lütfen değeri azaltınız").required("Boş geçilemez"),
        bsmvRate: Yup.number().moreThan(-1, "En az 0 BSMV girebilirsiniz").lessThan(500, "Lütfen değeri azaltınız").required("Boş geçilemez"),
    })
    return (
        <div className='main'>
            <div className='form'>

                <div className='form-info'><span className='form-span'>Kâr Oranı Tipi</span></div><div className='form-input'><button className='button-interest-type' onClick={() => setInterestType("compound")} id="compound">{interestType === "compound" ? "compound ✓" : "compound"}</button>&nbsp;&nbsp;
                    <button className='button-interest-type' onClick={() => setInterestType("simple")} id="simple">{interestType === "simple" ? "simple ✓" : "simple"}</button></div><div className='form-clear'></div>
                <Formik
                    //Doğrulama yapılacak olan ilk değerler
                    initialValues={{
                        loanAmount: loanAmountRef.current.value,
                        loanTerm: loanTermRef.current.value,
                        interestRate: interestRateRef.current.value,
                        kkdfRate: kkdfRateRef.current.value,
                        bsmvRate: bsmvRateRef.current.value,
                    }}
                    // Kurallar şeması
                    validationSchema={validate}
                    // type submit tıklandığında görüntüle fonksiyonunu çalıştır.
                    onSubmit={values => {
                        saveLoanAmount()
                    }}
                >
                    {formik => (
                        <div>
                            <Form>
                                <div className='form-info'><span className='form-span'>Kredi Tutarı</span></div><div className='form-input'><Input name="loanAmount" placeholder={"Kredi Tutarı"} ref={loanAmountRef} value={loanAmountRef.current.value} /></div><div className='form-clear'></div>
                                <div className='form-info'><span className='form-span'>Taksit Sayısı</span></div><div className='form-input'><Input name="loanTerm" placeholder={"Taksit Sayısı"} ref={loanTermRef} value={loanTermRef.current.value} /></div><div className='form-clear'></div>
                                <div className='form-info'><span className='form-span'>Kâr Oranı</span></div><div className='form-input'><Input name="interestRate" placeholder={"Kâr Oranı"} ref={interestRateRef} value={interestRateRef.current.value} /></div><div className='form-clear'></div>
                                <div className='form-info'><span className='form-span'>Taksit aralığı</span></div><div className='form-input'><select ref={termIntervalRef}><option value="Aylık">Aylık</option><option value="Haftalık">Haftalık</option><option value="Yıllık">Yıllık</option></select></div><div className='form-clear'></div>
                                <div className='form-info'><span className='form-span'>KKDF Oranı</span></div><div className='form-input'><Input name="kkdfRate" placeholder={"KKDF Oranı"} ref={kkdfRateRef} value={kkdfRateRef.current.value} /></div><div className='form-clear'></div>
                                <div className='form-info'><span className='form-span'>BSMV Oranı</span></div><div className='form-input'><Input name="bsmvRate" placeholder={"BSMV Oranı"} ref={bsmvRateRef} value={bsmvRateRef.current.value} /></div><div className='form-clear'></div>
                                <div className='form-info'></div><div className='form-input'><button className='button-submit' type='submit'>Görüntüle</button></div>
                                {/* Alt Component'e ref verilmiştir */}
                                <PopUp ref={PopupRef} />
                            </Form>
                        </div>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default FormComponent