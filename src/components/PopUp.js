import React, { forwardRef, useContext, useImperativeHandle, useState } from "react";
import InputContext from "../contexts/InputContext";
import DataContext from "../contexts/DataContext";
import PopUpContext from "../contexts/PopUpContext";
import "../PopUp.css";

const PopUp = forwardRef((props, ref) => {
  const { modal, setModal } = useContext(PopUpContext)

  const { loanAmount, setLoanAmount } = useContext(InputContext)
  const { loanTerm, setLoanTerm } = useContext(InputContext)
  const { interestRate, setInterestRate } = useContext(InputContext)
  const { termInterval, setTermInterval } = useContext(InputContext)
  const { taxRate, setTaxRate } = useContext(InputContext)
  const { data, setData } = useContext(DataContext)

  useImperativeHandle(ref,()=>({
    callChildFunction(){
      toggleModal()
    }
}))
  
  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  console.log(data)
  return (
    <>
      {/* <button onClick={toggleModal} className="btn-modal">
        Open
      </button> */}

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h1>{termInterval} Ödeme Tablosu</h1>
            <table>
              <tr>
                <th>Taksit No</th>
                <th>Taksit Tutarı</th>
                <th>Ana Para</th>
                <th>Kalan Ana Para</th>
                <th>Kâr Tutarı</th>
                <th>KKDF</th>
                <th>BSMV</th>
              </tr>
              {data.map(item => (
                <tr>
                  <td>{item.termNo}</td>
                  <td>{item.termAmount}</td>
                  <td>{item.mainLoan}</td>
                  <td>{item.remainingLoan}</td>
                  <td>{item.calculationInterestRate}</td>
                  <td>{item.calculationKkdfRate}</td>
                  <td>{item.calculationBsmvRate}</td>
                </tr>

              ))}
            </table>
          </div>
        </div>
      )}
    </>
  );
})
export default PopUp