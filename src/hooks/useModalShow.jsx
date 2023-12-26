import { useState } from "react"

export default function useModalShow() {
    const [isDisplay, setIsDisplay] = useState(false)
    
    function showModal() { setIsDisplay(true) }
    function hideModal() { setIsDisplay(false) }

    return [isDisplay, showModal, hideModal]
}
