import React, { forwardRef, useContext, useImperativeHandle, useState } from "react";
import InputContext from "../contexts/InputContext";
import DataContext from "../contexts/DataContext";
import PopUpContext from "../contexts/PopUpContext";
import "../PopUp.css";

const PopUp = forwardRef((props, ref) => {
  // Popup ekranda belirmesi
  const { modal, setModal } = useContext(PopUpContext)
  // Taksit aralığı
  const { termInterval, setTermInterval } = useContext(InputContext)
  // Gösterilecek olan tüm veriler
  const { data, setData } = useContext(DataContext)

  //Üst Component'ten gelen fonksiyon çalıştırma isteği burada karşılanır ve 
  // toogleModal sayesinde Popup ekranda belirir veya belirmez
  useImperativeHandle(ref,()=>({
    callChildFunction(){
      toggleModal()
    }
}))
  // Ekranda belirip belirmeme toggle
  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  return (
    <>
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
              {/* data ile gelen veriler map edilir ve tablo içeriğine yazılır */}
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