import { createContext, useState } from "react";

const PopUpContext = createContext()

export const PopUpProvider = ({ children }) => {
    const [modal, setModal] = useState(false);
    const values = {
        modal,
        setModal
    }
    return <PopUpContext.Provider value={values}>{children}</PopUpContext.Provider>
}
export default PopUpContext