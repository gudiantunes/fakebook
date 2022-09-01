import { useState } from "react";

const useChatLogic = () => {
    const [isLogged, setIsLogged] = useState(false)
    return {isLogged};
}
 
export default useChatLogic;